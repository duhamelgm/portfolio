import React, { Component } from "react";

export default class AnimationComponent {
  constructor() {
    this._frameId = null;
    // Animation stuff
    this.now = null;
    this.then = Date.now();
    this.interval = 1000 / 20; // 1000 / fps
    this.delta = null;
  }

  startLoop = () => {
    if (!this._frameId) {
      this._frameId = window.requestAnimationFrame(this.loop);
    }
  };

  stopLoop = () => {
    window.cancelAnimationFrame(this._frameId);
    this._frameId = null;
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

  nextFrame = () => {
    this.animate();
  };
}
