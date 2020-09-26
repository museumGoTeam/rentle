import React from "react";
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";



const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/Maisons" />} />
          <Route exact path="/:entity" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
