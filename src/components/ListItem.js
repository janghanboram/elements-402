import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ListItem.scss'

const uiType = ["button", "slider", "carousel", "loader"];
const items = [
  {
    id: 0,
    type: "slider",
    inspiredBy: "10x10",
    desc: "Inifinite animation slider"
  }
];

const ListItem =() =>{
    const List = items.map(item=>{
        return <li className="cell" key={item.id}>
            <Link className="cell-link" to="/element/1">
              <h1 className="item-id">{item.id + 1}</h1>
              <p className="item-desc">{item.desc}</p>
            </Link>
          </li>;
    })

    return List;
}

export default ListItem;