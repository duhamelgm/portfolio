import React, { Component } from "react";

import experimentsData from "../data/experiments/experimentsData";

import SingleCard from "./common/SingleCard";

import classes from "./Experiments.module.scss";

export default class Experiments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiments: experimentsData
    };
  }

  render() {
    const { experiments } = this.state;

    return (
      <section id="experiments">
        <div className="container">
          <header>
            <h2 className="title">Experiments</h2>
          </header>
          <ul className={classes.grid}>
            {experiments.map((element, id) => (
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
