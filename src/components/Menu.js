import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Menu = () => {
  const activeStyle = { color: "green", fontSize: "2rem" };

  return (
    <div>
      <ul>
        {/* 1. link Tag */}
        {/* <li><Link to="/">홈</Link></li>
                <li><Link to="/about">소개</Link></li>
                <li><Link to="/about/react">React 소개</Link></li> */}
        {/* 2. NavLink */}
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            홈
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
