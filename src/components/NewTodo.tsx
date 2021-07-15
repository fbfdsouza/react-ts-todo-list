import React, {useRef} from "react";
import { Todo } from "../models/todo.models"

interface NewTodoProps {
    addTodo: (todo: Todo) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.addTodo({id: enteredText, text: enteredText});
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )

}

export default NewTodo;