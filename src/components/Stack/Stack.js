import React from "react";
import "./styles.css"

export class Stack extends React.Component {
    render() {
        return (
            <div className="stack">
                <h2>Стек технологий</h2>
                <textarea
                className="info-text"
                rows={'7'}
                placeholder={`React, Redux`}
                ></textarea>
            </div>
        )
    }
}