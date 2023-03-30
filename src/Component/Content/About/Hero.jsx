import React from "react";
import hero from "../../images/header.png";
import TypedHero from "./TypedHero";

const bgHero = {
    height: "100vh",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundAttachment: "fixed",
};

export default class Hero extends React.Component {
    render() {
        return (
            <section
                className="hero d-flex justify-content-center align-items-center text-white"
                style={bgHero}
            >
                <div className="title hero">
                    <h1>Hallo 😊</h1>
                    <h1>Vicky Galih Prasetyawan</h1>
                    <TypedHero
                        strings={["FrontEnd Developer", "Web Designer"]}
                    />
                </div>
            </section>
        );
    }
}
