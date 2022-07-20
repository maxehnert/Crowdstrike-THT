import { FileData, requestData } from './request-data';

/**
 * 
 * Purpose here is to just mock fetching real data. 
 * This can then be replaced with real functions for handling that process if needed later.
 */

function fetchDataFromApi(tableData: FileData[]) { 
  return new Promise(resolve => resolve(tableData));
}

export const getTableData = async () => {
  try {
    return await fetchDataFromApi(requestData); 
  } catch(e) {
    console.log(e);
  }
};