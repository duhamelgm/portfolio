import React, { Component } from "react";
import p5 from "p5";
import Snap from "snapsvg-cjs";
import classNames from "classnames";

import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gameOfLife from "../games/gameOfLife";

import classes from "./GameWrapper.module.scss";

export default class GameWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      _frameId: null,
      game: null,

      // Animation stuff
      now: null,
      then: Date.now(),
      interval: 1000 / 20, // 1000 / fps
      delta: null
    };
  }

  componentDidMount = () => {
    let s = new Snap(this.svg);

    this.setState({
      game: new gameOfLife(s, this.svg.clientWidth, this.svg.clientHeight)
    });
  };

  startLoop = () => {
    if (!this._frameId) {
      console.log("start");
      this._frameId = window.requestAnimationFrame(this.loop);
    }
  };

  loop = () => {
    this._frameId = window.requestAnimationFrame(this.loop);

    this.state.now = Date.now();
    this.state.delta = this.state.now - this.state.then;

    if (this.state.delta > this.state.interval) {
      this.state.then = this.state.now - (this.state.delta % this.state.interval);

      this.animate();
    }
  };

  animate = () => {
    this.state.game.animate();
  };

  stopLoop = () => {
    console.log("stop");
    window.cancelAnimationFrame(this._frameId);
    this._frameId = null;
  };

  nextFrame = () => {
    this.animate();
  };

  componentWillUnmount = () => {
    this.stopLoop();
  };

  onPlayAnimation = () => {
    if (this.state.playing) {
      this.stopLoop();
    } else if (!this.state.playing) {
      this.startLoop();
    }

    this.setState({
      playing: !this.state.playing
    });
  };

  render() {
    console.log(classes);
    return (
      <div>
        <svg style={{ width: "100%", height: "100vh" }} id="svg" ref={r => (this.svg = r)} />
        <div className={classes.controls}>
          <h2>Game of life</h2>
          <IconButton style={{ padding: "1.5rem" }} onClick={this.onPlayAnimation}>
            <FontAwesomeIcon
              icon="play"
              className={classNames(classes.iconButton, classes.play, {
                [classes.active]: !this.state.playing
              })}
            />
            <FontAwesomeIcon
              icon="pause"
              className={classNames(classes.iconButton, classes.stop, {
                [classes.active]: this.state.playing
              })}
            />
          </IconButton>
          <IconButton onClick={this.nextFrame}>
            <FontAwesomeIcon icon="step-forward" />
          </IconButton>
        </div>
      </div>
    );
  }
}
