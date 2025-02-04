import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NavList from "./NavList";

const drawerWidth = 240;

const navStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar, // min-height
}));

const drawerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // Necesario para que el contenido de la aplicación esté debajo
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Navbar = (props) => {
  const [opened, setOpened] = useState(false);

  const navClasses = navStyles(props);
  const drawerClasses = drawerStyles(props);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Carsbarter</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={opened}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={drawerClasses.toolbar}></div>
        <Divider />
        <NavList></NavList>
      </Drawer>

      <div className={navClasses.offset}></div>
    </div>
  );
};

export default Navbar;
