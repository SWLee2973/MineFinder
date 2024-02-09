import { useReducer, createContext, useMemo, useEffect } from "react";
import "./MineFinder.module.css";
import { Table, Form } from "./components";
import { ACTION, STATE } from "./types/types";
import { reducer } from "./lib";
import { INCREMENT_TIMER } from "./lib/reducer";

export const TableContext = createContext({
  tableData: [],
  halted: true,
  dispatch: () => {},
});

const INITIAL_STATE: STATE = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  timer: 0,
  result: "",
  halted: true,
  openedCount: 0,
};

function MineFinder() {
  const [state, dispatch] = useReducer<(state: STATE, action: ACTION) => STATE>(
    reducer,
    INITIAL_STATE
  );
  const { tableData, halted, timer, result } = state;

  const value = useMemo(
    () => ({ tableData, halted, dispatch }),
    [tableData, halted]
  );

  useEffect (() => {
    let timer:number;
    if(halted === false) {
      timer = setInterval(() => {
        dispatch({type: INCREMENT_TIMER})
      }, 1000)
      return () => {
        clearInterval(timer);
      }
    }

  }, [halted])

  return (
    <>
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
    </>
  );
}

export default MineFinder;
