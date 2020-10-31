import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  LinkWrapper,
  LinkContainer,
  NavBarContainer,
  ButtonWrapper,
} from "./Navbar.styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   })
// );

export default function NavBar() {
  // const classes = useStyles();

  return (
    <NavBarContainer>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <LinkContainer>
            <LinkWrapper href="/">
              <a>Cars</a>
            </LinkWrapper>
            <LinkWrapper href="/todo">
              <a>Todo</a>
            </LinkWrapper>
          </LinkContainer>
          <ButtonWrapper color="inherit">Login</ButtonWrapper>
        </Toolbar>
      </AppBar>
    </NavBarContainer>
  );
}
