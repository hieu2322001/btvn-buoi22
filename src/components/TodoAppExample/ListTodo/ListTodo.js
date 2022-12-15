import React, { Component } from "react";
import "./ListTodo.css";

export default class ListTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                className=""
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
            >
                <div
                    className="view"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                >
                    <input
                        className="toggle"
                        type="checkbox"
                        data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                    />
                    <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1">
                        {this.props.content}
                    </label>
                    <button
                        className="destroy"
                        data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                        onClick={() => {
                            this.props.deleteItem();
                        }}
                    />
                </div>
                <input
                    className="edit"
                    defaultValue="ăn sáng"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                />
            </li>
        )
    }
}

