import React from "react";
import "../../styles/Header.scss";

const sampleData = [
  {
    id: 0,
    history: {
      start: "",
      end: "",
      status: ""
    },
    todoList: [
      { id: 0, isPassed: true, todo: "html/css 뼈대 세우기" },
      { id: 1, isPassed: false, todo: "Slider 자동 스크롤링" },
      { id: 2, isPassed: false, todo: "Slider:hover하면 스크롤링 멈추기" }
    ]
  }
];
const progressValue = 0;
const List = sampleData.map(item => {
  const todoItems = item.todoList.map(todoItem => {
    return (
      <li key={todoItem.id} className="todo-item">
        <span className="checkbox">
          <input type="checkbox" checked={todoItem.isPassed} disabled />
        </span>
        <span className="todo">{todoItem.todo}</span>
      </li>
    );
  });

  return todoItems;
});
const Header = () => {
  return (
    <div className="element-header">
      <header className="content-header">
        <h1>Element #1</h1>
        <h3>2018. 11. 25</h3>
      </header>
      <ul className="todo-list">
        <h3>To Do List</h3>

        {List}
      </ul>
    </div>
  );
};

export default Header;
