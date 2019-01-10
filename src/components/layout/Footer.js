import React, { Component } from "react";

import classes from "./Footer.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className={classes.footer}>
        <strong>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by <a href="https://duhamelgm.me">duhamelgm</a>
        </strong>
      </footer>
    );
  }
}
