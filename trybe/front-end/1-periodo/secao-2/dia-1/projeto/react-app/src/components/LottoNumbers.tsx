
function LottoNumbers() {
    function randomNumber(){
        return Math.floor(Math.random() * 60 + 1)
    }

    const sortNumbers= [
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
        randomNumber(),
    ];

    return (
        <>
        <h3>Os numeros sorteados são:</h3>
        <ul>
            { sortNumbers.length === 6 ? (
                sortNumbers.map((number,index) => (
                    <li key={index} className="lotto"> {number}</li>
                ))
            ) : ( 
            <h3>A lista deve conter 6 números.</h3> )
            }
        </ul>
        </>
    );

}

export default LottoNumbers;