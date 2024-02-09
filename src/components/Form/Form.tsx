import { useState, useContext, memo } from "react";
import "./Form.module.css";
import { TableContext } from "../../MineFinder";
import { START_GAME } from "../../lib/reducer";

function Form() {
  const [row, setRow] = useState<number>(10);
  const [cell, setCell] = useState<number>(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRow(parseInt(e.target.value));
  };
  const onChangeCell = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCell(parseInt(e.target.value));
  };
  const onChangeMine = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMine(parseInt(e.target.value));
  };

  const onClickBtn = (/*e: React.MouseEvent<HTMLButtonElement>*/) => {
    dispatch({ type: START_GAME, row, cell, mine });
  };

  return (
    <div>
      <input
        type="number"
        placeholder="세로"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="가로"
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="지뢰개수"
        value={mine}
        onChange={onChangeMine}
      />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
}

export default memo(Form);
