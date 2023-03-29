import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBook, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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

                    <div className="social-links mt-3 text-center">
                        <a
                            href="https://www.instagram.com/vickyyprass/"
                            className="instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vickyyprass/"
                            className="linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href="hhttps://github.com/VickyyPrass"
                            className="linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="menu-navbar">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/hero" className="nav-item">
                            <FontAwesomeIcon
                                icon={faHouse}
                                className="nav-icon"
                            />
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link href="/about" className="nav-item">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="nav-icon"
                            />
                            <span>About</span>
                        </Nav.Link>
                        <Nav.Link href="/skill" className="nav-item">
                            <FontAwesomeIcon
                                icon={faFile}
                                className="nav-icon"
                            />
                            <span>Skill</span>
                        </Nav.Link>
                        <Nav.Link href="/resume" className="nav-item">
                            <FontAwesomeIcon
                                icon={faScrewdriverWrench}
                                className="nav-icon"
                            />
                            <span>Resume</span>
                        </Nav.Link>
                        <Nav.Link href="/portfolio" className="nav-item">
                            <FontAwesomeIcon
                                icon={faBook}
                                className="nav-icon"
                            />
                            <span>Portfolio</span>
                        </Nav.Link>
                        <Nav.Link href="/contact" className="nav-item">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="nav-icon"
                            />
                            <span>Contact</span>
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}
