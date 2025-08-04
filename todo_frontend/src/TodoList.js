import React from "react";


function TodoList({ todos}){
    if ( todos.length === 0){
        return (
            <section>
                <h2>Your Todos</h2>
                <p>No Todos yet.Add some!</p>
            </section>
        );
    }

    return (
        <section>
            <h2>Your Todo</h2>
            <ul>
                {todos.map(todo=> (
                    <li key ={todo.id}>
                        <h3>
                            {todo.title} {todo.completed && '(Completed)'}
                        </h3>
                        {todo.description && <p>{todo.description}</p>}
                    </li>

                ))}
            </ul>
        </section>
    )
}
export default TodoList;