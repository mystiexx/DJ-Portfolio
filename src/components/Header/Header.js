import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div>
                 <div className="nav d-flex justify-content-between">
                    <span>DJ</span>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#event">Event</a>
                        </li>
                       
                        <li>
                            <a href="#mixtape">Mixtape</a>
                        </li>

                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>

                        <li>
                            <a href="#booking">Booking</a>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Header;
