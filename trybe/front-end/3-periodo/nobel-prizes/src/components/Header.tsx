import { Component } from "react";
import reactLogo from '../assets/react.svg'

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={ reactLogo } alt="react logo" />
            </header>
        )
        
    }
}