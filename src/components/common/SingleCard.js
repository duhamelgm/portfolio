import React, { Component } from "react";

import Modal from "@material-ui/core/Modal";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardModal from "./CardModal";

import classes from "./SingleCard.module.scss";

class SingleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      img: require(`../../${this.props.project.img}`),
      project: props.project
    };
  }

  openDialog = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      dialogOpen: false
    });
  };

  render() {
    let project = { ...this.state.project, img: this.state.img };
    let dialog = "";

    if (project.tech) {
      dialog = (
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{project.title}</DialogTitle>
          <DialogContent>
            <img src={project.img} alt={project.title} />
            <div className={classes.content}>
              <div className={classes.titleContainer} />
              <p>{project.description}</p>
              {project.tech.map((element, id) => {
                return <Chip key={id} label={element} />;
              })}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Link
            </Button>
          </DialogActions>
        </Dialog>
      );
    }

    return (
      <div className={classes.card}>
        <img src={project.img} alt={project.title} />
        <div className={classes.buttonContainer}>
          <button onClick={this.openDialog}>READ MORE</button>
        </div>

        {/*
        <Modal
          disableAutoFocus={true}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
          repositionOnUpdate={true}
          contentStyle={{ width: "90%", height: "90%" }}
        >
          <CardModal project={project} />
        </Modal>*/}

        {dialog}
      </div>
    );
  }
}

export default SingleCard;
