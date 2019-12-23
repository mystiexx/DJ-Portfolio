import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Event from "./components/Events/Event";
import Bookings from "./components/Bookings/Bookings";
import Mixtape from "./components/Mixtape/Mixtape";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

class App extends Component {
    render() {
        return (
            <div className="body">
                <div id="home">
                    <Home />
                </div>
                <div id="about" className="pt-1 pb-5">
                    <About />
                </div>
                <div id="event" className="pt-1">
                    <Event />
                </div>

                <div id="booking" className="pt-4 pb-3">
                    <Bookings />
                </div>
               
                <div id="mixtape" className="pt-5 pb-5">
                    <Mixtape />
                </div>

                <div id="gallery" className="pt-5 pb-5 mb-5">
                    <Gallery />
                </div>

                <div id="footer" className="pt-5 mt-5">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
