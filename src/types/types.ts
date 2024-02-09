export type GAME_CODE = {
  MINE: number;
  NORMAL: number;
  QUESTION: number;
  FLAG: number;
  QUESTION_MINE: number;
  FLAG_MINE: number;
  CLICKED_MINE: number;
  OPENED: number;
};

export type STATE = {
  tableData: Array<number>;
  data: {
    row: number,
    cell: number,
    mine: number,
  };
  timer: number;
  result: string;
  halted: boolean;
  openedCount: number;
  dispatch?: (params:object) => void
}

export type ACTION =
  | { type: string; row: number; cell: number; mine: number }