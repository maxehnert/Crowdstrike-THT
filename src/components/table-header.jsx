import React from 'react';

function TableHeader({ headerNames }) {
  return (
    <tr>
      {headerNames &&
        headerNames.map((header) => {
          return <th key={header}>{header}</th>;
        })}
    </tr>
  );
}

export default TableHeader;
