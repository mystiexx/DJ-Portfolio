import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaSoundcloud } from "react-icons/fa";

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer d-flex justify-content-between">
                    <span className="name">DJ</span>

                    <ul>
                        <li>
                            <a href="/">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <FaSoundcloud />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
