import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import Route from "./components/SimpleRouter";

import theme from "./ThemeConfig";
import Searcher from "./views/Searcher";
import Detail from "./views/Detail";

const App = () => {
  const [selection, setSelection] = useState();

  const handleSelection = (selection) => {
    setSelection(selection);

    // Cambia la URL
    window.history.pushState({}, "", "/selection");
    // Crea evento de navegación
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Route path="/">
        <Searcher onSelection={handleSelection} />
      </Route>
      <Route path="/selection">
        <Detail seller={selection} />
      </Route>
    </ThemeProvider>
  );
};

export default App;
