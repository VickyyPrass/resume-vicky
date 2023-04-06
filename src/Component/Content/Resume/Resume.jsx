import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Resume.scss";

export default class Resume extends React.Component {
    render() {
        return (
            <section className="resume" id="resume">
                <h3>My Resume and My Education</h3>
                <div className="line"></div>

                <Row>
                    <Col md={6}>
                        <h4>Resume</h4>
                        <div className="timeline">
                            <div className="timeline__line"></div>
                            <div className="timeline__items">
                                <div className="timeline__item">
                                    <div className="timeline__top">
                                        <div className="timeline__circle"></div>
                                        <div className="timeline__title">
                                            Electronic Data Processing
                                        </div>
                                    </div>

                                    <div className="timeline__desc">
                                        <div className="time">
                                            <p>2021 - Present</p>
                                        </div>
                                        <p>
                                            PT. Indomarco Prismatama,
                                            Yogyakarta, Indonesia
                                        </p>
                                        <ul>
                                            <li>
                                                Support the Indomaret store by
                                                preparing the data required for
                                                the transaction.
                                            </li>
                                            <li>
                                                Backing up and repairing the
                                                entire store database.
                                            </li>
                                            <li>
                                                Repairing programs used by the
                                                store.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <h4>Education</h4>
                        <div className="timeline">
                            <div className="timeline__line"></div>
                            <div className="timeline__items">
                                <div className="timeline__item">
                                    <div className="timeline__top">
                                        <div className="timeline__circle"></div>
                                        <div className="timeline__title">
                                            Informatics Computer
                                        </div>
                                    </div>

                                    <div className="timeline__desc">
                                        <div className="time">
                                            <p>2019 - 2021</p>
                                        </div>
                                        <p>LP3I College Yogyakarta</p>
                                        <ul>
                                            <li>
                                                Learn how to create a good and
                                                effective design.
                                            </li>
                                            <li>
                                                Learn and design a database
                                                structure to be used in an
                                                application.
                                            </li>
                                            <li>
                                                Learn how to create a website
                                                that is interactive and
                                                comfortable when used by users.
                                            </li>
                                            <li>
                                                Learn how to process good data.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline__items">
                                <div className="timeline__item">
                                    <div className="timeline__top">
                                        <div className="timeline__circle"></div>
                                        <div className="timeline__title">
                                            Science and Math
                                        </div>
                                    </div>

                                    <div className="timeline__desc">
                                        <div className="time">
                                            <p>2015 - 2018</p>
                                        </div>
                                        <p>Senior High School 1 Batujajar</p>
                                        <ul></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}
