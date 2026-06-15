public class ListaAlunos {

    public static void main(String[] args) {

        String[] alunos = {
            "MARCOS",
            "ALINE",
            "LUCAS",
            "PATRICIA"
        };

        String log;
        int totalAlunos = alunos.length;

        System.out.println(
            "A lista de chamadas possui "
            + totalAlunos
            + " alunos\n"
        );

        // FOR tradicional (índice)
        System.out.println("=== FOR ===");

        for (int posicao = 0; posicao < totalAlunos; posicao++) {

            int matricula = posicao + 1;

            log =
                "Matricula: "
                + matricula
                + " Aluno: "
                + alunos[posicao];

            System.out.println(log);
        }

        System.out.println();

        // FOR-EACH (equivalente ao for...of)
        System.out.println("=== FOR EACH (for...of) ===");

        int matricula = 1;

        for (String aluno : alunos) {

            log =
                "Matricula: "
                + matricula
                + " Aluno: "
                + aluno;

            System.out.println(log);

            matricula++;
        }
    }
}
