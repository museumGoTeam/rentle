import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles'
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import InsertOccupant from "./pages/InsertOccupant";
import Details from "./pages/Details";


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 32,
    paddingBottom: 32,
    width: '50%',
    margin: 'auto'
  },
}));

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/properties" />} />
            <Route exact path="/:entity" component={Home} />
            <Route exact path="/property/newOccupant/:id" component={InsertOccupant} />
            <Route exact path={["/property/:id", "/occupant/:id"]} component={Details} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>

  );
};

export default App;
