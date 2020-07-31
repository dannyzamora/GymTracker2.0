import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode'

import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { getUserData, logoutUser } from './redux/actions/userActions';

import Navbar from './components/Navbar';
import PublicRoute from './util/PublicRoute';
import PrivateRoute from './util/PrivateRoute';


import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import axios from 'axios';


const theme = createMuiTheme(themeFile)

const token = localStorage.FBIdToken;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  
 if( error.response.status===403){
   store.dispatch(logoutUser())
 }
  return Promise.reject(error);
});


if (token) {
  const decodedToken = jwtDecode(token)
  console.log("TOKEN",decodedToken)
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser())
    window.location.href = '/login';
  }
  else {

    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }

}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />

          <div className="container">
            <Switch>
              <PrivateRoute exact path="/" component={home} />
              <PublicRoute exact path="/login" component={login} />
              <PublicRoute exact path="/signup" component={signup} />
            </Switch>
          </div>

        </Router>
      </Provider>
    </ThemeProvider>

  );
}

export default App;
