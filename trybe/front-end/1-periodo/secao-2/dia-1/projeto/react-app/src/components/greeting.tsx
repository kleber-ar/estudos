type GreetingProps = {
    person: {
        fistName: string;
        lastNmae: string;
    };
};

function Greeting(props: GreetingProps) {
    const { person } = props;

    const fistName = person.fistName;
    const lastName = person.lastNmae;

    return (
        <h1 className="greeting">Olá, {`${fistName} ${lastName}!`}
        <img src="https://i.imgur.com/rqvLd3q.png" alt="img" />
        </h1>
    );
}

export default Greeting;