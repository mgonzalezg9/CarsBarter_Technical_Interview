import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

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

const useStyles = makeStyles((theme) => ({
  data: {
    width: "80%",
  },
}));

const DataTable = ({ rows, onRowClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.data}>
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
