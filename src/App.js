import "./styles.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Todolista from "./components/Todolista";

export default function App() {
  const [todos, guardarTodos] = useState([
    { id: 1, tarea: "Tarea 1", completed: false }
  ]);

  const { id, tarea, status } = todos;

  const cambiarEstado = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    guardarTodos(newTodos);
  };

  const todoTareaReferencia = useRef();

  const agregarNuevaTarea = () => {
    const tarea = todoTareaReferencia.current.value;
    if (tarea === "") return;
    guardarTodos((prevTodos) => {
      return [...todos, { id: uuidv4(), tarea, completed: false }];
    });

    // resetear el input
    todoTareaReferencia.current.value = null;
  };

  //eliminar Tareas
  const eliminarTarea = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    guardarTodos(newTodos);
  };

  return (
    <div className="App">
      <Todolista todos={todos} cambiarEstado={cambiarEstado} />

      <input
        ref={todoTareaReferencia}
        type="text"
        placeholder="escriba tarea"
        name="tarea"
      />
      <button onClick={agregarNuevaTarea}>Agregar</button>
      <button onClick={eliminarTarea}>Eliminar</button>
      <div>
        te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </div>
  );
}
