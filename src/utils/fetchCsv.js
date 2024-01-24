// src/utils/fetchCsv.js
export const fetchCsv = async (csvFilePath) => {
    const response = await fetch(csvFilePath);
    const csvData = await response.text();
    return csvData;
  };
  