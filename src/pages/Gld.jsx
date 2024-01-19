import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Papa from "papaparse"; // Import papaparse library

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const Gld = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch and parse CSV data
    const fetchData = async () => {
      try {
        const response = await fetch("/data/yourcsvfile.csv"); // Update the path accordingly
        console.log("Response status:", response.status);
  
        if (!response.ok) {
          console.error("Failed to fetch CSV data:", response.statusText);
          return;
        }
  
        const csvData = await response.text();
        console.log("Fetched CSV data:", csvData);
  
        // Parse CSV data using papaparse
        Papa.parse(csvData, {
          header: true, // Assumes the first row contains column headers
          complete: (result) => {
            console.log("Parsed CSV data:", result.data);
            setData(result.data);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing CSV data", error);
        setLoading(false);
      }
    };
  
    fetchData();
}, []);

  const [responsive] = useState("vertical");
  const [tableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight] = useState("");
  const [downloadBtn] = useState(false);
  const [printBtn] = useState(false);
  const [viewColumnBtn] = useState(false);
  const [filterBtn] = useState(false);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Title",
    "Location",
  ];

  const options = {
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    selectableRows: "none",
    responsive,
    tableBodyHeight,
    searchOpen: true,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  return (
    <div className="main-layout">
      <header>
        <div className="header">
          <div className="white_bg">
            <Header />
            <CacheProvider value={muiCache}>
              <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                  title={"ACME Employee list"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </ThemeProvider>
            </CacheProvider>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Gld;
