import React from "react";

import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./CardModal.module.scss";

const CardModal = ({ project, ...props }) => {
  return (
    <Paper className={classes.paper}>
      <img src={project.img} alt={project.title} />
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <h1>{project.title}</h1>
          <IconButton>
            <FontAwesomeIcon icon="link" />
          </IconButton>
        </div>
        <p>{project.description}</p>
        {project.tech.map((element, id) => {
          return <Chip key={id} label={element} />;
        })}
      </div>
    </Paper>
  );
};

export default CardModal;
