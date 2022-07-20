import React from 'react';

const TableBody = ({ tableContent, handleRowChange }) => {
  const handleRowClick = (e, row) => {
    let rowElement = e.target.parentElement.parentElement;
    let isChecked = e.target.checked;
    handleRowChange({ row, target: rowElement, isChecked });
  };

  return (
    <>
      {tableContent.length ? (
        tableContent.map((row, idx) => {
          const { name, device, path, status } = row;
          return (
            <tr key={path + idx} className="table-row">
              <td>
                <input
                  type="checkbox"
                  className="table-row-checkbox"
                  onClick={(e) => handleRowClick(e, row)}
                  disabled={status !== 'available'}
                />
              </td>
              <td>{name}</td>
              <td>{device}</td>
              <td>{path}</td>
              <td>{status}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}

export default TableBody;
