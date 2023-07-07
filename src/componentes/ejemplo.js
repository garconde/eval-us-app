import React from 'react';
import { Spreadsheet, CellData } from 'react-spreadsheet';

const ExampleComponent = () => {
  /* const handleCellChange = (rowIndex, colIndex, newValue, cells) => {
    const newCells = [...cells];
    newCells[rowIndex][colIndex] = newValue;
    // Realizar cualquier lógica adicional aquí

    return newCells;
  };

  const customCellRenderer = (cellData, rowIndex, colIndex) => {
    // Verificar si el valor de la celda es mayor a 26
    const isGreaterThan26 = Number(cellData.value) > 26;

    // Definir el estilo de la celda basado en la condición
    const cellStyle = {
      backgroundColor: isGreaterThan26 ? 'red' : 'white',
    };

    return (
      <CellData style={cellStyle}>
        {cellData.value}
      </CellData>
    );
  };

  return (
    <Spreadsheet
      rowCount={10}
      columnCount={10}
      onChange={handleCellChange}
      customCellRenderer={customCellRenderer}
    /> 
  );*/
};

export default ExampleComponent;
