import React from "react";
import "./styles.css"

export class AboutMe extends React.Component {
    render() {
        return(
            <div className="about-me">
                <h2>О себе</h2>
                <textarea
                className="info-text"
                rows={'7'}
                placeholder={"blalblablablbal"}
                ></textarea>
            </div>
        )
    }
}
