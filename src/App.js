import React, { Component } from "react";
import "./App.scss";

import Navbar from "./components/layout/Navbar";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiments from "./components/Experiments";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIgloo,
  faUser,
  faBriefcase,
  faFlask,
  faEnvelope,
  faPlay,
  faStepForward,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faIgloo,
  faUser,
  faBriefcase,
  faFlask,
  faEnvelope,
  faTwitter,
  faGithub,
  faPlay,
  faStepForward,
  faPause
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Showcase />
          <About />
          <Projects />
          <Experiments />
          <Contact />

          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
