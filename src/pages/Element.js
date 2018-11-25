import React from "react";
import Ele1 from "../components/elements/Ele1";

const Element = ({ match }) => {
  return (
    <div>
      <h1>Element #{match.params.id}</h1>
      <Ele1 />
    </div>
  );
};

export default Element;
