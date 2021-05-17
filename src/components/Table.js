import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "name", headerName: "Concesionario", width: 300 },
  { field: "description", headerName: "Descripción", width: 400 },
  {
    field: "phoneNumber",
    headerName: "Teléfono",
    width: 200,
  },
  {
    field: "address",
    headerName: "Dirección",
    width: 300,
  },
];

const DataTable = ({ rows }) => {
  return (
    <div style={{ width: "80%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} autoHeight={true} />
    </div>
  );
};

export default DataTable;
