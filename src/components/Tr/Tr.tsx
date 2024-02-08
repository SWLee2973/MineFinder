import { useContext } from 'react'
import './Tr.module.css'
import { TableContext } from '../../MineFinder'
import Td from '../Td/Td';

function Tr({ rowIndex }) {
  const { tableData } = useContext(TableContext);


  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill(1).map((td, i) => <Td key={''+rowIndex+i} rowIndex={rowIndex} cellIndex={i}/>)}
    </tr>
  )
}

export default Tr
