import React from "react";
import Typed from "typed.js";
import "./TypedHero.scss";

export default class TypedHero extends React.Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        };
        this.typed = new Typed(this.el, options);
    }

    render() {
        return (
            <div className="wrap">
                <div className="type-wrap">
                    <h3>
                        <span>I'm </span>
                        <span
                            className="data-typed"
                            ref={(el) => {
                                this.el = el;
                            }}
                        ></span>
                    </h3>
                </div>
            </div>
        );
    }
}
