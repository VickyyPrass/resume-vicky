import React from "react";
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import jsLogo from "../../images/javascript.png";
import sassLogo from "../../images/sass.png";
import bootstrapLogo from "../../images/bootstrap.png";
import nodeLogo from "../../images/node.png";
import reactLogo from "../../images/react.png";
import expressLogo from "../../images/express.png";
import mongoLogo from "../../images/mongo.png";
import mysqlLogo from "../../images/mysql.png";

export default class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h3>Skills</h3>
                <div className="line"></div>
                <div className="skill-area mt-3">
                    <div className="item">
                        <img src={htmlLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={cssLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={jsLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={sassLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={nodeLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={reactLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={bootstrapLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={expressLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={mongoLogo} alt="" />
                    </div>
                    <div className="item">
                        <img src={mysqlLogo} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
