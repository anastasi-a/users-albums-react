import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import UsersContainer from "./UsersContainer";
import AlbumsContainer from "./AlbumsContainer";

class MainContainer extends React.Component {
  render() {
    return (
      <Router>
        <Container maxWidth="lg">
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/users">
                  <UsersContainer />
                </Route>
                <Route path="/albums">
                  <AlbumsContainer />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default MainContainer;
