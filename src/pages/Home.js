import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
const uiType = ["button", "slider", "carousel", "loader"];
const items = [
  {
    id: 0,
    type: "slider",
    inspiredBy: "10x10",
    desc: "animation slider"
  }
];

const Home = () => {
  return <div className="content-wrapper">
      <header className="content-header">
        <h1>The List of Elements</h1>
        <p>떠오르는 UI 아이디어를 스케치합니다.</p>
        <p>아름다운 UI를 클론합니다.</p>
      </header>
      <ul className="grid">
        <li className="cell">
          <Link className="cell-link" to="/element/1">
            <h1 className="item-id">{items[0].id + 1}</h1>
            <p className="item-desc">{items[0].desc}</p>
          </Link>
        </li>
      </ul>
    </div>;
};

export default Home;
