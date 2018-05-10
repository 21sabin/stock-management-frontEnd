import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Signup from '../components/Signup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppRouter = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default AppRouter;
