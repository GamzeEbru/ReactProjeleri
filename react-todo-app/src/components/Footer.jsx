import React from "react";

function Footertop({ itemCount, durum, Delete }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemCount()}</strong>
        {itemCount() > 1 ? "items" : "item"} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" onClick={() => durum("all")}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => durum("active")}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => durum("completed")}>
            Completed
          </a>
        </li>
      </ul>

      <button onClick={Delete} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

export default Footertop;
