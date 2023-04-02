import React from "react";
import Profile from "./Profile";
import "./Profile.scss";
import Skills from "./Skills";

export default class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <Profile />
                <Skills />
            </section>
        );
    }
}
