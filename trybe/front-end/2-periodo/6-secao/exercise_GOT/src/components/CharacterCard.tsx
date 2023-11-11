import { useSelector } from "react-redux";
import { CharacterState } from "../types";




function CharacterCard() {
    const { character, isLoading, error } = useSelector((state: CharacterState) => state);

    if (isLoading) { return <p>Loading...</p>}
    if (error) { return <p>{ error }</p>}

    if(character) {
        return (
            <div>
                <h1>{ character.name }</h1>
                <p>{ `Born ${ character.born }`}</p>
                <h3>Titles:</h3>
                <ol>
                    {character.titles.map((title) => (
                        <li key={`${title}`}>{title}</li>
                    ))}
                </ol>
                <h3>Aliases:</h3>
                <ol>
                {character.aliases.map((alias) => (
                        <li key={`${alias}`}>{alias}</li>
                    ))}
                </ol>
            </div>
        );
    }
    return <p>Type a chracter name and click to search!</p>;
}

export default CharacterCard;