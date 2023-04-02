import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBook, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import photo from "../images/vicky.png";
import "./Navbar.scss";

export default function Navbar() {
    return (
        <div className="App-Area">
            <div
                className="menu-toggle"
                onClick={() => {
                    const nav = document.querySelector(".App-Navbar");
                    nav.classList.toggle("slide");
                }}
            >
                <input type="checkbox" name="" id="" />
                <span></span>
                <span></span>
                <span></span>
            </div>
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
                            href="https://github.com/VickyyPrass"
                            className="linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

                <div className="menu-navbar mt-3">
                    <nav className="flex-column">
                        <ul>
                            <li>
                                <Link
                                    className="nav-item"
                                    activeClass="active"
                                    to="hero"
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                >
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        className="nav-icon"
                                    />
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="nav-item"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                >
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="nav-icon"
                                    />
                                    <span>About</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="nav-item"
                                    activeClass="active"
                                    to="resume"
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                >
                                    <FontAwesomeIcon
                                        icon={faScrewdriverWrench}
                                        className="nav-icon"
                                    />
                                    <span>Resume</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="nav-item"
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                >
                                    <FontAwesomeIcon
                                        icon={faBook}
                                        className="nav-icon"
                                    />
                                    <span>Portfolio</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="nav-item"
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={10}
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="nav-icon"
                                    />
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
