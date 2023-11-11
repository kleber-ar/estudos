
import ModuleDetails from "./module-details";
import Title from "./title";
import { calculateAge } from "../utils/age";

function HelloWorld() {
    const name = 'John Connor'
    const birth = '11/02/1989'
    const age = calculateAge(birth);

    return (
        <div>
            <h1 style={{color: 'green', textAlign: 'center'}}>{name}</h1>
            <h2>{`age ${age}`}</h2>
            <Title/>
            <ModuleDetails/>
        </div>
    );
}

export default HelloWorld;