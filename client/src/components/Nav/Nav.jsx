import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
} from "@material-ui/core";
import "./Nav.scss";

export default function Nav() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h6">Verbalyze</Typography>
        <IconButton edge="end" color="inherit" aria-label="menu">
          <Icon>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
