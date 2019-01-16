import React, { Component } from "react";

import sketch from "./utils/BoidCanvas/sketch";
import GameWrapper from "./layout/GameWrapper";

import classes from "./Showcase.module.scss";

export default class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null
    };
  }
  componentDidMount() {
    this.setState({
      element: document.querySelector("#showcase")
    });
  }

  render() {
    let { element } = this.state;

    return (
      <div className={classes.showcase} id="showcase">
        {console.log(element)}
        {element ? (
          <GameWrapper sketch={sketch} width={element.clientWidth} height={element.clientHeight} />
        ) : (
          ""
        )}

        <div>
          <h1 className={classes.title}>duhamelgm.me</h1>
        </div>
      </div>
    );
  }
}
