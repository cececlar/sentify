import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
  Link,
} from "@material-ui/core";
import { Link as RouterDomLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography className="navLink" variant="h6">
          Verbalyze
        </Typography>

        <Link
          underline="none"
          component={RouterDomLink}
          to="/"
          color="inherit"
          className="navLink"
        >
          <Typography variant="subtitle1">Newsfeed</Typography>
        </Link>
        <Link
          underline="none"
          component={RouterDomLink}
          to="/sentiment"
          color="inherit"
          className="navLink"
        >
          <Typography variant="subtitle1">Sentiment</Typography>
        </Link>
        {/* <IconButton edge="end" color="inherit" aria-label="menu">
          <Icon>menu</Icon>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
