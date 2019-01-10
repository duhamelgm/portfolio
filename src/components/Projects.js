import React, { Component } from "react";

import projectsData from "../data/projects/projectsData";

import SingleCard from "./common/SingleCard";

import classes from "./Projects.module.scss";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projectsData
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <section>
        <div className="container">
          <header>
            <h2 className="title">Projects</h2>
          </header>

          <ul className={classes.grid}>
            {projects.map((element, id) => (
              <li key={id}>
                <SingleCard project={element} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
