import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

public class Estudantes {

    public static Collection<Estudante> obterEntrada() {
        return Set.of(
            new Estudante("2001", "Maria", "Computação"),
            new Estudante("2002", "João", "Computação"),
            new Estudante("2003", "José", "Pedagogia"),
            new Estudante("2004", "Ana", "Computação"),
            new Estudante("2005", "Bernardo", "Engenharia"),
            new Estudante("2006", "Antônia", "Computação")
        );
    }

    public static void main(String[] args) {
        Collection<Estudante> entrada = obterEntrada();
        
        /* * ENGENHARIA DE UMA STREAM:
         * Uma Stream funciona como uma linha de montagem (esteira). 
         * Os dados entram, passam por filtros/transformações e geram um resultado.
         */
        List<String> matriculas = entrada.stream() // 1. A FONTE: Coloca os 6 estudantes na esteira do fluxo.
            
            // 2. OPERAÇÃO INTERMÉDIA (FILTRO/PENEIRA):
            // Avalia cada estudante. Se o curso for "Computação", continua na esteira; se não, é descartado.
            // Sobram aqui apenas: Maria, João, Ana e Antônia.
            .filter(e -> "Computação".equals(e.getCurso()))  
            
            // 3. OPERAÇÃO INTERMÉDIA (ORDENAÇÃO):
            // Organiza os estudantes que restaram na esteira em ordem alfabética baseada no Nome.
            // A ordem na esteira passa a ser: Ana, Antônia, João e Maria.
            .sorted(Comparator.comparing(Estudante::getNome)) 
            
            // 4. OPERAÇÃO INTERMÉDIA (MAPEAMENTO/TRANSFORMAÇÃO):
            // Transforma o tipo de dado. Modifica o fluxo que continha objetos do tipo 'Estudante'
            // para conter apenas a String da 'Matricula' de cada um deles.
            // Agora rodam na esteira apenas os textos: "2004", "2006", "2002", "2001".
            .map(Estudante::getMatricula)                    
            
            // 5. OPERAÇÃO TERMINAL (FECHAMENTO):
            // Desliga a esteira, recolhe todas as Strings de matrículas que chegaram ao fim
            // e empacota-as juntas dentro de uma List<String> imutável.
            .toList();                                        
            
        // Exibe o resultado final: [2004, 2006, 2002, 2001]
        System.out.println(matriculas);
    }
}

class Estudante {
    private String matricula;
    private String nome;
    private String curso;

    public Estudante() {}

    public Estudante(String matricula, String nome, String curso) {
        this.matricula = matricula;
        this.nome = nome;
        this.curso = curso;
    }

    public String getMatricula() { return matricula; }
    public String getNome() { return nome; }
    public String getCurso() { return curso; }
}
