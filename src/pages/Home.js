import React from "react";
import "../styles/Home.scss";
import ListItem from "../components/ListItem"

const Home = () => {
  return <div className="content-wrapper">
      <section className="home">
        <header className="content-header">
          <h1>The List of Elements</h1>
          <p>떠오르는 UI 아이디어를 스케치합니다.</p>
          <p>아름다운 UI를 클론합니다.</p>
        </header>
        <ul className="grid">
          <ListItem />
        </ul>
      </section>
    </div>;
};

export default Home;
