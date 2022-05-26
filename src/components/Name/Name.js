import React from "react";
import "./styles.css"

export class Name extends React.Component {
    render() {
        return (
            <div className="name">
                <h2 className="article">Имя</h2>
                <input 
                type={"text"} 
                placeholder={"Иван"} 
                className={"input-text"}
                ></input>
            </div>
        )
    }
}