import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profile from "../../images/vicky-about.jpg";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="profile">
                <h3>It's Me and Only Me</h3>
                <div className="line"></div>

                <div className="biography mt-5 mb-5">
                    <Row>
                        <Col md={{ span: 5 }} className="text-center">
                            <img src={profile} alt="Vicky Galih Prasetyawan" />
                        </Col>

                        <Col md={{ span: 5, offset: 1 }}>
                            <p>
                                I'm a Front-End Developer located in Indonesia.
                                I have expertise in Web Development and Web
                                Design. I am a person who likes new things,
                                likes various challenges and can work in a team
                                or individually. I have learned about website
                                development from frontend and database
                                management. Currently, I am focusing on the
                                frontend to deepen how users can enjoy a website
                                comfortably.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
