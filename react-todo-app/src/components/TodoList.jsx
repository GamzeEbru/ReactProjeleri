import { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todo.filter((item) => item.completed === true));
          break;
        case "active":
          setFilteredTodos(todo.filter((item) => item.completed === false));
          break;
        default:
          setFilteredTodos(todo);
          break;
      }
    };

    filterHandler();
  }, [todo, status]);

  return (
    <div>
      <div className="todoapp">
        <Header addTodo={setTodo} todo={todo} />
        <List
          filteredTodos={filteredTodos}
          todol={todo}
          deleteTodo={setTodo}
          status={status}
        />
        <Footer
          todoCount={todo}
          setTodo={setTodo}
          status={status}
          setStatus={setStatus}
        />
      </div>

      <footer className="info">
        <p>Click to edit a todo</p>
      </footer>
    </div>
  );
}

export default TodoList;
