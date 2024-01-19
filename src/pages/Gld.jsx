import { MDBDataTable } from 'mdbreact';
import React from "react";
import Header from "../components/Header";




const Gld = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
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
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
      }
    ]
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
                  data={data}
                />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Gld;
