import React from "react";
import { Link } from "react-router-dom";
import "../styles/ListItem.scss";

const uiType = ["button", "slider", "carousel", "loader"];
const items = [
  {
    id: 0,
    type: "slider",
    history: {
      start: "2018.11.25"
    },
    inspiredBy: "10x10",
    title: "Inifinite Animation Slider",
    desc: ""
  }
];

const ListItem = () => {
  const List = items.map(item => {
    return <li className="cell" key={item.id}>
        <Link className="cell-link" to="/element/1">
          <div className="top">
            <h1 className="item-title">{item.title}</h1>
            <h1 className="item-id">{item.id + 1}</h1>
          </div>
          <div className="bottom">
            <p className="item-date">{item.history.start}</p>
          </div>
        </Link>
      </li>;
  });

  return List;
};

export default ListItem;
