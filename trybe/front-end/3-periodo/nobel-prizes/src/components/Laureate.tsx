import { Component } from "react";
import { LaureateType } from "../types";

type Props = {
    info: LaureateType;
};

export default class Laureate extends Component<Props> {
    render() {
        const { info: { knownName, orgName, motivation }} = this.props;

        return (
            <div className="laureate">
                <h3>{ knownName?.en || orgName.en }</h3>
                <p>{ motivation.en }</p>
            </div>
        );
    }
}