import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todo from "./components/todo/Todo";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import { TodoType } from "./types";
import { useEffect, useState } from "react";

function App() {
  const todosArray = useSelector((state: RootState) => state.data)


  const [test, setTest] = useState();

  useEffect(() =>{
    console.log("Hello world");
  }, [])

  const newTodos = todosArray.map((item: TodoType) => (
    <Todo key={item.id} {...item} />
  ));
  const compleatTodos = todosArray.reduce((acc: number, item: TodoType) => acc + Number(item.status), 0);
  return (
    <div className="App">
      <Header todos={todosArray.length} compleatTodos={compleatTodos} />
      <div className="content">
        <CreateTodo />
        <div className="todosWrapper">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
