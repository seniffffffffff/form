import React from "react";
import "./styles.css"

export class DescriptionAboutProject extends React.Component {
    render() {
        return (
            <div className="description">
                <h2>Описание последнего проекта</h2>
                <textarea
                className="info-text"
                rows={'7'}
                placeholder={`bla bla bla`}
                ></textarea>
            </div>
        )
    }
}