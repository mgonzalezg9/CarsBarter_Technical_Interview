import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const PAGE_SIZE = 10;

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

const DataTable = ({ rows, onRowClick }) => {
  return (
    <div style={{ width: "80%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={PAGE_SIZE}
        autoHeight={true}
        onRowClick={(e) => {
          onRowClick(e.row);
        }}
      />
    </div>
  );
};

export default DataTable;
