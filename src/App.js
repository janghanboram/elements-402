import React from "react";
import {Route} from 'react-router-dom'
import './App.scss';
import { Home, Element } from "pages";

const App = () => {
  return <div>
      <Route exact path="/" component={Home} />
      <Route path="/element/:id" component={Element} />
    </div>;
};

export default App;
