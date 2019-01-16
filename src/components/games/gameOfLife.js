export default class gameOfLife {
  constructor(s, width, height) {
    this.resolution = 15;
    this.cols = 0;
    this.rows = 0;
    this.grid = [];

    this.generateGrid(s, width, height);
  }

  generateGrid(s, width, height) {
    this.cols = Math.floor(width / this.resolution) + 1;
    this.rows = Math.floor(height / this.resolution) + 1;

    this.grid = new Array(this.cols);
    for (let i = 0; i < this.cols; i++) {
      this.grid[i] = new Array(this.rows);
      for (let j = 0; j < this.rows; j++) {
        let x = i * this.resolution;
        let y = j * this.resolution;

        this.grid[i][j] = {
          x: i,
          y: j,
          live: 0,
          object: s
            .rect(x, y, this.resolution, this.resolution, this.resolution / 4, this.resolution / 4)
            .attr({ fill: "black" })
            .click((e, x, y, element = this.grid[i][j]) => {
              console.log(element);
              element.live = element.live ? 0 : 1;
              element.object.attr({ fill: element.live ? "#6F2DBD" : "black" });
            })
        };
      }
    }
  }

  animate() {
    let { cols, rows, grid } = this;

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
          grid[i][j].object.attr({ fill: "#6F2DBD" });
        }
        if (state === 1 && (neighbors > 3 || neighbors < 2)) {
          grid[i][j].live = 0;
          grid[i][j].object.attr({ fill: "black" });
        }
      }
    }
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
