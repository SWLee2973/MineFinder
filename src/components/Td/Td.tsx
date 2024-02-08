import { useCallback, useContext } from "react";
// import classes from "./Td.module.css";
import { TableContext } from "../../MineFinder";
import {
  CLICKED_MINE,
  CODE,
  FLAG_CELL,
  NORMALIZE_CELL,
  OPEN_CELL,
  QUESTION_CELL,
} from "../../lib/reducer";

const getTdStyle = (code: number) => {
  switch (code) {
    case CODE.NORMAL:
      return {
        background: "#444",
      };
    case CODE.OPENED:
    case CODE.CLICKED_MINE:
      return {
        background: "white",
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: "url(/question.svg) no-repeat 50% 50%",
      };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return {
        background: "url(/flag.svg) no-repeat 50% 50%",
      };
    case CODE.MINE:
      return {
        background: 'url(/mine.svg) no-repeat 50% 50%',
      }
    default:
      return {
        background: "white",
      };
  }
};

const getTdText = (code: number) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "";
    case CODE.CLICKED_MINE:
      return "펑";
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return "";
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return "";
    default:
      return "";
  }
};

function Td({ rowIndex, cellIndex }: { rowIndex: number; cellIndex: number }) {
  const { tableData, dispatch, halted } = useContext(TableContext);

  if(halted) return;

  const onClickTd = useCallback(() => {
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICKED_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement>) => {
      e.preventDefault();
      if(halted) return;

      switch (tableData[rowIndex][cellIndex]) {
        case CODE.NORMAL:
        case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
          return;
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
          dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
          return;
        default:
          return;
      }
    },
    [tableData[rowIndex][cellIndex], halted]
  );

  return (
    <td
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
      style={{
        width: '32px',
        height: '32px',
        border: '1px solid white',
        textAlign: 'center',
        ...getTdStyle(tableData[rowIndex][cellIndex])
      }}
    >
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
}

export default Td;
