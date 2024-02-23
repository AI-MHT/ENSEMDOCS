import React from "react";
import { MDBDataTable } from 'mdbreact';
import Header from "../components/Header";
import data from "../datasets/indus.json"; // Import your JSON data file

const Indus = () => {
  const dataTable = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 190
      },
      {
        label: 'Report Name / Link',
        field: 'position',
        sort: 'asc',
        width: 130
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      }
    ],
    rows: data.rows.map(row => ({
      ...row,
      position: <a href={row.positionLink}>{row.position}</a>
    }))
  };

  return (
    <div className="main-layout">
      <header>
        <div className="header">
          <div className="white_bg">
            <Header />
            <MDBDataTable
              striped
              bordered
              small
              data={dataTable}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Indus;
