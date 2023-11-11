function PastResults() {
    const results = [
      {
        id: 1035,
        year: 2008,
        numbers: [1, 11, 26, 51, 59, 60],
        prize: 'R$ 37.025.110,94',
      },
      {
        id: 1140,
        year: 2009,
        numbers: [10, 27, 40, 46, 49, 58],
        prize: 'R$ 144.901.494,92',
      },
      {
        id: 1245,
        year: 2010,
        numbers: [2, 10, 34, 37, 43, 50],
        prize: 'R$ 194.395.200,04',
      },
    ];
  
    return (
        <>
        <div className="results-container">
            <h2 className="past-results-title">Resultados anteriores:</h2>
            {
                results.map((result) => (
                    <article key={result.id}>
                        <h3>Ano: {result.year}</h3>
                        <h4>Prêmio: {result.prize}</h4>

                        <h3>Números sorteados:</h3>
                        <ul>
                            {result.numbers.map((number) => (
                                <li key={number}>{number}</li>
                                ))}
                        </ul>
                    </article>
                ))
            };
        </div>
        </>
    );
  }
  
  export default PastResults;
  