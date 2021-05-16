import { createMuiTheme } from "@material-ui/core/styles";
import { red, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: red[700],
    },
    secondary: lightGreen,
  },
});

export default theme;
