import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SearchIcon from "@material-ui/icons/Search";

const NavList = () => {
  return (
    <div>
      <List component="nav" aria-label="Lista del navbar">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Inicio</ListItemText>
        </ListItem>

        <Divider />

        <ListItem button selected>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText>Buscador</ListItemText>
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>Sobre la aplicación</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default NavList;
