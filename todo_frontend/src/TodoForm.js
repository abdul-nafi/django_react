import React ,{ useState } from "react";

function TodoForm({ addTodo }) {
const [newToDoTitle,setNewToDoTitle] = useState("");
const [newToDoDescription,setNewToDoDescription] = useState("");

const handleSubmit = (e)=> {
    e.preventDefault();
    if (!newToDoTitle.trim()){
        alert('Title cannot be empty');
        return;

    }
    addTodo({
    title:newToDoTitle,
    description:newToDoDescription,
    completed: false,
     });
    setNewToDoTitle("");
    setNewToDoDescription("");
    };

   return(
    <section>
        <h2>Add New Todo</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Todo Title"
            value={newToDoTitle}
            onChange={(e)=> setNewToDoTitle(e.target.value)}
            required

            />
           <textarea
           placeholder="Todo Description"
           value={newToDoDescription}
           onChange={(e)=> setNewToDoDescription(e.target.value)}
           rows={3}
           />
           <button type="submit">Add Todo</button>
        </form>


    </section>
   ) ;
}

export default TodoForm;