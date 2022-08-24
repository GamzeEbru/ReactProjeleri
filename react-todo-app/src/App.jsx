import { useState } from "react";
import "./App.css";
import Footer from "./components/Info";
import Footertop from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
const initialState = [
  { todo: "Learn React", done: false },
  { todo: "Learn JavaScript", done: true },
];
function App() {
  const [todo, setTodo] = useState(initialState);

  const Complete = (i) => {
    const mapped = todo.map((item, index) =>
      index === i ? { ...item, done: !item.done } : { ...item }
    );
    setTodo(mapped);
  };
  {
  }
  const completeCount = () => {
    return todo.filter((item) => item.done === false).length;
  };
  const [status, setStatus] = useState("all");
  {
  }
  const durum = (type) => {
    if (type == "active") {
      setStatus("active");
    } else if (type == "completed") {
      setStatus("completed");
    } else {
      setStatus("all");
    }
  };
  {
  }
  const Delete = () => {
    const clear = todo.filter((item) => item.done != true);
    setTodo(clear);
  };
  {
  }
  const removeItem = (i) => {
    const clear = todo.filter((item, idx) => idx !== i);
    setTodo(clear);
  };

  return (
    <div className="App">
      <section className="todoapp">
        <Header setTodo={setTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <List
            todoList={todo}
            Complete={Complete}
            status={status}
            removeItem={removeItem}
          />
        </section>
        <Footertop itemCount={completeCount} durum={durum} Delete={Delete} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
