import React from "react";
import Ele1 from "../components/elements/Ele1";
import Header from '../components/template/Header'

const Element = ({ match }) => {
  return (
    <div className="content-wrapper">
        <Header></Header>
      {/* <h1>Element #{match.params.id}</h1> */}
      <Ele1 />
    </div>
  );
};

export default Element;
