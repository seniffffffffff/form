import React from "react";
import "./styles.css"

export class SecondName extends React.Component {
    render() {
        return (
            <div className="second-name">
                <h2 className="article">Фамилия</h2>
                <input
                 type={"text"}
                 placeholder={"Васильевич"} 
                 className={"input-text"}
                 ></input>
            </div>
        )
    }
}
