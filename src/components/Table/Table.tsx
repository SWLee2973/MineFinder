import { useContext } from 'react'
import './Table.module.css'
import { TableContext } from '../../MineFinder'
import Tr from '../Tr/Tr';

function Table() {

  const { tableData } = useContext(TableContext);

  return (
    <table>
      {Array(tableData.length).fill(1).map((_, i) => <Tr key={i} rowIndex={i} />)}
    </table>
  )
}

export default Table
