import React, { Component } from "react";
import p5 from "p5";
import { fabric } from "fabric";

export default class CanvasWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resolution: 50,
      cols: 0,
      rows: 0,
      grid: [],
      _frameId: null,

      // Animation stuff
      now: null,
      then: Date.now(),
      interval: 1000 / 10, // 1000 / fps
      delta: null
    };
  }

  componentDidMount = () => {
    let { resolution, cols, rows, canvas, grid } = this.state;
    canvas = new fabric.Canvas("c");
    console.log(this.props.height);
    console.log(this.props.width);
    canvas.setHeight(this.props.height);
    canvas.setWidth(this.props.width);

    window.addEventListener(
      "resize",
      () => {
        canvas.setHeight(this.props.height);
        canvas.setWidth(this.props.width);
        canvas.renderAll();
      },
      false
    );

    cols = Math.floor(canvas.getWidth() / resolution);
    rows = Math.floor(canvas.getHeight() / resolution);

    grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;

        grid[i][j] = {
          x: i,
          y: j,
          live: 0,
          object: new fabric.Rect({
            left: x,
            top: y,
            fill: "black",
            width: resolution,
            height: resolution,
            selectable: false
          })
        };
        grid[i][j].object.on("mousedown", (e, element = grid[i][j]) => {
          console.log(countNeighbors(grid, element.x, element.y, rows, cols));
          element.live = element.live ? 0 : 1;
          element.object.set("fill", element.live ? "white" : "black");
        });

        canvas.add(grid[i][j].object);
      }
    }

    this.setState({
      cols,
      rows,
      grid,
      canvas
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
    let { resolution, cols, rows, canvas, grid } = this.state;

    let tempGrid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      tempGrid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        tempGrid[i][j] = grid[i][j].live;
      }
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = tempGrid[i][j];
        let neighbors = countNeighbors(tempGrid, i, j, rows, cols);

        if (state === 0 && neighbors === 3) {
          grid[i][j].live = 1;
          grid[i][j].object.set("fill", "white");
        }
        if (state === 1 && (neighbors > 3 || neighbors < 2)) {
          grid[i][j].live = 0;
          grid[i][j].object.set("fill", "black");
        }
      }
    }

    this.state.canvas.renderAll();
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

  render() {
    return (
      <div>
        <button onClick={this.stopLoop}>stop</button>
        <button onClick={this.startLoop}>play</button>
        <button onClick={this.nextFrame}>next frame</button>
        <canvas style={{ width: "100%" }} id="c" />
      </div>
    );
  }
}

const countNeighbors = (grid, x, y, rows, cols) => {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let posX = (x + i + cols) % cols;
      let posY = (y + j + rows) % rows;

      sum += grid[posX][posY];
    }
  }
  sum -= grid[x][y];
  return sum;
};
