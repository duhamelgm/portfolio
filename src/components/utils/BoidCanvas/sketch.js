export default function sketch(p) {
  let [cols, rows, grid] = [null, null, null];
  let resolution = 20;

  p.setup = function() {
    p.createCanvas(600, 400);
    p.frameRate(10);
    cols = p.width / resolution;
    rows = p.height / resolution;

    grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        grid[i][j] = p.floor(p.random(2));
      }
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {};

  p.draw = function() {
    p.background(20);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        p.fill(10);

        if (grid[i][j] == 1) {
          p.fill(200);
        }

        p.rect(x, y, resolution, resolution, resolution / 4, resolution / 4);
      }
    }

    let nextGrid = new Array(cols);
    for (let i = 0; i < nextGrid.length; i++) {
      nextGrid[i] = new Array(rows);
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        let neighbors = countNeighbors(grid, i, j, rows, cols);
        //console.log(neighbors);

        nextGrid[i][j] = state;
        if (state == 0 && neighbors >= 3) {
          nextGrid[i][j] = 1;
        }
        if (state == 1 && (neighbors > 3 || neighbors < 2)) {
          nextGrid[i][j] = 0;
        }
      }
    }

    grid = nextGrid;
    //p.noLoop();
  };
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
