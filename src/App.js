import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Navbar";

import theme from "./ThemeConfig";
import Searcher from "./views/Searcher";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Searcher />
    </ThemeProvider>
  );
};

export default App;
