import React from 'react';

function Todoitems ({todo, cambiarEstado}) {

    const {id, tarea, completed} = todo;

    const cambiarClickEstado = () =>{
      cambiarEstado(id)
    }

    return (
      <div>
        <li>
          <input 
          type="checkbox"
          checked={completed}
          onChange={cambiarClickEstado}
          /> {tarea}
        </li>
      </div>
    )
}

export default Todoitems;