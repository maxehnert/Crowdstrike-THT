import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';

const TableWrapper = ({ tableData, handleRowChange }) => {
  const headerNames = tableData.length // put the header names into an array and make the first entry blank for the checkbox
    ? ['', ...Object.keys(tableData[0])]
    : []; 

  return (
    <div className="App">
      <table>
        <thead>
          <TableHeader headerNames={headerNames} />
        </thead>
        <tbody>
          <TableBody
            tableContent={tableData}
            handleRowChange={handleRowChange}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
