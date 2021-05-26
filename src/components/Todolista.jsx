import React from "react";
import Todoitems from "./Todoitems";

function Todolista({ todos, cambiarEstado }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todoitems key={todo.id} todo={todo} cambiarEstado={cambiarEstado} />
        ))}
      </ul>
    </div>
  );
}

export default Todolista;
