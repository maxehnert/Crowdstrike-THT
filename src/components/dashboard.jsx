import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './header';
import TableWrapper from './table-wrapper';
// import { FileData, requestData } from '../utils/request-data';
import { getTableData } from '../utils/mock-request';

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRowsCount, setSelectedRowsCount] = useState(0);
  const [selectedFilesToDownload, setSelectedFilesToDownload] = useState([]);

  // Not using this in favor of simulated Promise to get data, but leaving here since it's easier to work with for later interviews.
  //   useEffect(() => {
  //     setTableData(() => [...requestData]);
  //   }, [requestData]);

  useEffect(() => {
    getTableData().then((tableData) => setTableData(() => [...tableData]));
  }, [tableData]);

  const handleRowChange = (props) => {
    const { row, target, isChecked } = props;
    target.classList[isChecked ? 'add' : 'remove']('selected-row'); // update row color

    setSelectedRowsCount((count) => (isChecked ? count + 1 : count - 1));
    setSelectedFilesToDownload((files) => {
      if (!isChecked) {
        return files.filter((file) => file.name !== row.name);
      } else {
        return [row, ...files];
      }
    });
  };

  const headerProps = {
    tableData,
    selectedFilesToDownload,
    selectedRowsCount,
    handleRowChange,
  };
  const tableProps = { tableData, handleRowChange };

  return (
    <div className="App gutter">
      {tableData.length ? (
        <>
          <Header {...headerProps} />
          <TableWrapper {...tableProps} />
        </>
      ) : (
        <div>There was a problem...</div>
      )}
    </div>
  );
};

export default Dashboard;
