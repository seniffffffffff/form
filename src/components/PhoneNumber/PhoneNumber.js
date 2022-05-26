import React from "react";
import "./styles.css"

export class PhoneNumber extends React.Component {
    render() {
        return (
            <div className="phone-number">
                <h2 className="article">Номер телефона</h2>
                <input
                 type={"text"}
                 placeholder={`+380 (63) 301 50 05`} 
                 className={"input-text"}
                 ></input>
            </div>
        )
    }
}
