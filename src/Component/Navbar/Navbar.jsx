import React from "react";
import photo from "../images/vicky.png";
import "./Navbar.scss";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="App-Navbar">
                <div className="profile-navbar">
                    <img
                        src={photo}
                        alt="Foto Vicky Galih Prasetyawan"
                        className="photo-profile-navbar"
                    />
                    <p>Vicky Galih Prasetyawan</p>
                    <div class="social-links mt-3 text-center">
                        <a
                            href="https://www.instagram.com/vickyyprass/"
                            class="instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* <i class=""></i> */}a
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vickyyprass/"
                            class="linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {/* <i class=""></i> */}b
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
