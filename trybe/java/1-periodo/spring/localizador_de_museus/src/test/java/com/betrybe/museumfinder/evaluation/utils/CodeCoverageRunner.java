package com.betrybe.museumfinder.evaluation.utils;

import static org.junit.jupiter.api.Assertions.fail;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;
import org.xml.sax.SAXException;

public class CodeCoverageRunner {

  private final String buildDir;
  private final String profileName;

  public CodeCoverageRunner(String buildDir) {
    this(buildDir, null);
  }

  public CodeCoverageRunner(String buildDir, String profileName) {
    this.buildDir = buildDir;
    this.profileName = profileName;
  }
  public double run() {
    String reportPath = String.format("%s/site/jacoco/jacoco.xml", buildDir);
    String outFile = String.format("%s.log", buildDir);
    long timeoutMinutes = 20;

    String[] mvnCmd = new String[]{
        /*
         * Start by unsetting the MAVEN_CONFIG env var because it creates a conflict
         * between the Docker image in Github Actions and the mvnw wrapper.
         * For more info, see: https://issues.jenkins.io/browse/JENKINS-47890
         */
        "unset MAVEN_CONFIG &&",
        "./mvnw clean test jacoco:report",  // Run tests
        "-DuseTestsForCoverage=true",  // Include evaluation and solution tests, but exclude coverage test (like this one) or other unrelated
        "-DcoverageBuildDir=" + buildDir,  // Use different dir to build
        profileName != null ? "-D%s=true".formatted(profileName) : "",
        "--log-file " + outFile, // Save output to file
    };

    try {
      ProcessBuilder processBuilder = new ProcessBuilder(
          "sh", "-c", String.join(" ", mvnCmd)
      );
      processBuilder.redirectErrorStream(true);
      processBuilder.redirectOutput(new File(outFile));
      Process p = processBuilder.start();

      boolean finished = p.waitFor(timeoutMinutes, TimeUnit.MINUTES);
      if (!finished) {
        destroyProcessTree(p);
        fail(
            "Timeout ao executar teste de cobertura ("
                + timeoutMinutes + " min). Arquivo de log: " + outFile
                + "\n\nÚltimas linhas do log:\n" + readLogTail(outFile));
      }

      if (p.exitValue() != 0) {
        fail(
            "Erro ao executar teste de cobertura, verifique se os outros testes estão passando, "
                + "incluindo o linter! Arquivo de log: " + outFile
                + "\n\nÚltimas linhas do log:\n" + readLogTail(outFile));
      }

      File file = new File(reportPath);
      Map<String, Object> result = new XmlParser().parseToMap(file);
      List<Map<String, String>> evaluations = (List<Map<String, String>>) result.get("counters");

      Map<String, String> sample = evaluations.stream()
          .filter(eval -> eval.get("type").equals("LINE")).collect(Collectors.toList()).get(0);

      return Double.parseDouble(sample.get("percentage"));
    } catch (IOException e) {
      fail("Arquivo de cobertura não encontrado. Faça os testes passarem antes!");
    } catch (XPathExpressionException | ParserConfigurationException | InterruptedException |
             SAXException e) {
      throw new RuntimeException(e);
    }
    return 0;
  }

  private void destroyProcessTree(Process process) {
    try {
      ProcessHandle processHandle = process.toHandle();
      processHandle.descendants().forEach(this::destroyProcess);
      destroyProcess(processHandle);
    } catch (IllegalStateException | SecurityException ignored) {
      // Keep the original timeout/error message even when process cleanup is not allowed.
    }
  }

  private void destroyProcess(ProcessHandle processHandle) {
    try {
      processHandle.destroyForcibly();
    } catch (IllegalStateException | SecurityException ignored) {
      // Keep the original timeout/error message even when the OS refuses to kill a child process.
    }
  }

  private String readLogTail(String outFile) {
    try {
      List<String> lines = Files.readAllLines(Path.of(outFile));
      int start = Math.max(lines.size() - 80, 0);
      return String.join("\n", lines.subList(start, lines.size()));
    } catch (IOException e) {
      return "Não foi possível ler o arquivo de log: " + e.getMessage();
    }
  }

}
