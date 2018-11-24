import React from "react";
import {Route} from 'react-router-dom'
import './App.scss';
import { Home, About } from "pages";
import Menu from "./components/Menu"

const App = () => {
  return <div>
    <Menu/>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
  </div>;
};

export default App;
