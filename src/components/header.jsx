import React from 'react';

const Header = (props) => {
  const {
    tableData,
    selectedRowsCount,
    selectedFilesToDownload,
    handleRowChange,
  } = props;

  const handleDownloadSelected = () => {
    const filePathString = selectedFilesToDownload
      .map((file) => `file: ${file.path}`)
      .join(' \n');
    alert(filePathString);
  };

  const handleSelectAll = (e) => {
    const target = e.target;
    const isSelectAllChecked = target.checked;
    const tableRowElements = Array.from(
      document.querySelectorAll('table .table-row')
    );

    const selectedRowMap = new Map();
    tableRowElements.forEach((rowElement) => {
      const checkbox = rowElement.querySelector('input');

      if (!checkbox.disabled) {
        if (checkbox.checked === isSelectAllChecked) return;
        checkbox.checked = isSelectAllChecked;

        const rowName = rowElement.childNodes[1].textContent;
        const rowData = tableData.find((row) => row.name === rowName);
        selectedRowMap.set(rowData, rowElement);
      }
    });

    selectedRowMap.forEach((elementRow, rowData) => {
      handleRowChange({
        row: rowData,
        target: elementRow,
        isChecked: isSelectAllChecked,
      });
    });
  };
  return (
    <div className="dashboard-header-wrapper">
      <header className="dashboard-header">
        <label name="">
          <input type="checkbox" onClick={handleSelectAll} />
        </label>
        <div>
          <span>
            {selectedRowsCount > 0
              ? `Selected ${selectedRowsCount}`
              : 'None Selected'}
          </span>
        </div>
        <div className="download-selected" onClick={handleDownloadSelected}>
          <span>&dArr;</span>
          <span>Download Selected</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
