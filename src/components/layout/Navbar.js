import React, { Component } from "react";
import _ from "lodash/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import classes from "./Navbar.module.scss";

const listItems = [
  { id: "showcase", icon: "igloo" },
  { id: "about", icon: "user" },
  { id: "projects", icon: "briefcase" },
  { id: "experiments", icon: "flask" },
  { id: "contact", icon: "envelope" }
];

export default class Navbar extends Component {
  scrollToMyRef = id => e => {
    let pos = document.querySelector(`#${id}`).offsetTop;
    // run this method to execute scrolling.
    window.scrollTo({
      top: pos,
      behavior: "smooth" // Optional, adds animation
    });
  };

  render() {
    return (
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          {listItems.map((element, id) => (
            <li key={id} onClick={this.scrollToMyRef(element.id)}>
              <FontAwesomeIcon size="2x" icon={element.icon} />
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
