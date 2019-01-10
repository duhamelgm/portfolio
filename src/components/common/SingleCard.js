import React from "react";

import classes from "./SingleCard.module.scss";

const SingleCard = props => {
  const project = props.project;

  return (
    <div className={classes.card}>
      <img src={require(`../../${project.img}`)} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
};

export default SingleCard;
