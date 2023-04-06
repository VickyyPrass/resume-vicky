import React from "react";
import "./Contact.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const contact = () => {
    return (
        <section className="contact" id="contact">
            <h3>My Contact</h3>
            <div className="line"></div>
            <h4>Let's make some deal and create a great idea together.</h4>
            <div className="contact-area-info">
                <Row>
                    <Col md={{ span: 5 }} className="contact-info">
                        <div className="info mb-4">
                            <div className="address">
                                <h5>Location :</h5>
                                <p>Trihanggo, Sleman, Yogyakarta, Indonesia</p>
                            </div>
                            <div className="email">
                                <h5>Email :</h5>
                                <p>vickygalih31@gmail.com</p>
                            </div>
                            <div className="phone">
                                <h5>Phone :</h5>
                                <p>+62 877 7984 4990</p>
                            </div>
                        </div>

                        <div className="maps">
                            <div id="canvas-for-googlemap">
                                <iframe src="https://www.google.com/maps/embed/v1/place?q=Jl.+Salakan+No.6,+Salakan,+Trihanggo,+Kec.+Gamping,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55291&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6 }} className="contact-form">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control required type="text" />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control required type="email" />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" required />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Messsage</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Row>

                            <Button type="submit" className="mt-3">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default contact;
