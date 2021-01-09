import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Nav from './nav';
import About from './about';
import Register from './register';
import Organise from './organise';
import UpcomingConf from './upcomingConferences';
import LoggedIn from './loggedIn';
import NotLogged from './notLogged';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends React.Component{
  render(){
    
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/organiseMeeting" exact component={LoggedIn}/>
          <Route path="/meetings"  component={UpcomingConf} />
          <Route path="/xyz"  component={LoggedIn} />
          <Route path="/abc"  component={NotLogged} />

        </Switch>
      </div>
    </Router>
  );
}
}


export default App;
