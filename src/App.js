import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Reports from "./Pages/Reports";
import Products from "./Pages/Products";

import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route path="/reports"  component={Reports}/>
          <Route path="/products"  component={Products}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
