import { CODE } from "./reducer";

const plantMine = (
  row: number,
  cell: number,
  mine: number
): Array<Array<number>> => {
  const candidate = Array(row * cell)
    .fill(1)
    .map((_, i) => i);

  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  const data: Array<Array<number>> = [];
  for (let i = 0; i < row; i++) {
    const rowData: Array<number> = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver: number = Math.floor(shuffle[k] / cell);
    const hor: number = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  return data;
};

export default plantMine;