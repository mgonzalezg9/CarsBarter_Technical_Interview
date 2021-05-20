import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import { Box } from "@material-ui/core";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

// let concesionarios = [];

const Searcher = ({ onSelection }) => {
  const [concesionarios, setConcesionarios] = useState([]);
  const [listado, setListado] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/data`)
      .then((res) => {
        console.log("Concesionarios recuperados correctamente");
        // concesionarios = res.data.slice(0, 4);
        setConcesionarios(res.data);
        setListado(res.data);
      })
      .catch((error) => {
        console.error("Error recuperando los concesionarios:", error);
      });
  }, []);

  const onFilterChange = (name, location) => {
    let nuevo = concesionarios
      .filter((c) => name === "" || c.name.includes(name))
      .filter((c) => location === "" || c.address.includes(location));

    setListado(nuevo);
    // console.log(listado);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mt={2}>
        <Filter onFilterChange={onFilterChange}></Filter>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Table
          rows={listado}
          style={{ width: "50%" }}
          onRowClick={onSelection}
        ></Table>
      </Box>
    </div>
  );
};

export default Searcher;
