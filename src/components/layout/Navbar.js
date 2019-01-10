import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Navbar.module.scss";

export default class Navbar extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <FontAwesomeIcon size="2x" icon="igloo" />
          </li>
          <li>
            <FontAwesomeIcon size="2x" icon="user" />
          </li>
          <li>
            <FontAwesomeIcon size="2x" icon="briefcase" />
          </li>
          <li>
            <FontAwesomeIcon size="2x" icon="flask" />
          </li>
          <li>
            <FontAwesomeIcon size="2x" icon="envelope" />
          </li>
        </ul>
      </nav>
    );
  }
}
