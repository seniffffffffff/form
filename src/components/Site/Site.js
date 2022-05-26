import React from "react";
import "./styles.css"


export class Site extends React.Component {
    render() {
        return (
            <div className="site">
                <h2 className="article">Сайт</h2>
                <input
                 type={"text"}
                 placeholder={`https://github.com`} 
                 className={"input-text"}
                 ></input>
            </div>
        )
    }
}
