function LuckyNumbers() {
    function randomNumbers(){
        return Math.floor(Math.random() * 60 + 1)
    }

    const myNumbers = [
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
        randomNumbers(),
    ];

    return (
        <>
        <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
        <ul>
            {myNumbers.map((number, i) => (
                <li key={i}>{number}</li>
            ))}
        </ul>
        </>
    );
}

export default LuckyNumbers;