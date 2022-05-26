import React from "react";
import "./styles.css"

export class SuccesButton extends React.Component {
    render() {
        return (
            <button
            className="button-succ"
            >
            Сохранить
            </button>
        )
    }
}

export class NegativeButton extends React.Component {
    render() {
        return (
            <button
            className="button-negative"
            >
            Отмена
            </button>
        )
    }
}