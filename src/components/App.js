import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Filter from "./Filter";
import Navbar from "./Navbar";

import theme from "../ThemeConfig";
import { Box, Table } from "@material-ui/core";

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <Box display="flex" justifyContent="center" mt={2}>
        <Filter></Filter>
        {/* <Table></Table> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
