import { useReducer, createContext, useMemo } from "react";
import "./MineFinder.module.css";
import { Table, Form } from "./components";
import { ACTION, STATE } from "./types/types";
import { reducer } from "./lib";

export const TableContext = createContext({
  tableData: [],
  halted: true,
  dispatch: () => {},
});

const INITIAL_STATE: STATE = {
  tableData: [],
  timer: 0,
  result: "",
  halted: false,
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

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
}

export default MineFinder;
