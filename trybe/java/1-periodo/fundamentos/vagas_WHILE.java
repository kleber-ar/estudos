public class SistemaInscricao {

    public static void main(String[] args) {

        // Lista de inscritos
        String[] inscritos = {
            "MARCOS",
            "ALINE",
            "LUCAS",
            "PATRICIA",
            "JOAO",
            "FELIPE",
            "LUCIA",
            "ANTONIO",
            "FERNANDA",
            "MARCELA",
            "VITOR",
            "BEATRIZ",
            "JORGE",
            "JULIA"
        };

        // Número máximo de vagas
        final int numeroVagas = 10;

        // Vetor de vagas
        String[] vagas = new String[numeroVagas];

        // Controle de vagas preenchidas
        int vagaAtual = 0;

        String inscrito;
        String log;

        // Preenche vagas usando WHILE
        while (vagaAtual < numeroVagas) {

            inscrito = inscritos[vagaAtual];

            vagas[vagaAtual] = inscrito;

            log =
                "Adicionando a inscrição: "
                + inscrito
                + " Na vaga: "
                + (vagaAtual + 1);

            System.out.println(log);

            vagaAtual++;
        }
    }
}
