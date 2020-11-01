import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import getTheme from "../../styles/themes";
import GlobalStyle from "../../styles/globalStyles";
import NavBar from "../components/NavBar/NavBar.component";
import { TodosProvider } from "../contexts/Todocontext";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const theme = getTheme();

  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   console.log('##jssStyles', jssStyles, jssStyles?.parentElement);
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <GlobalStyle />
            <NavBar />
            <TodosProvider>
              <Component {...pageProps} />
            </TodosProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
