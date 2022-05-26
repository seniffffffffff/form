import React from "react";
import "./styles.css"

export class Date extends React.Component {
    render() {
        return (
            <div className="date">
                <h2 className="article">Дата рождения</h2>
                <input
                 type={"text"}
                 placeholder={`DD.MM.YYYY`} 
                 className={"input-text"}
                 ></input>
            </div>
        )
    }
}
