import React, { Component } from "react";

import classes from "./Showcase.module.scss";

export default class Showcase extends Component {
  render() {
    return (
      <div className={classes.showcase}>
        <div>
          <h1 className={classes.title}>duhamelgm.me</h1>
        </div>
      </div>
    );
  }
}
