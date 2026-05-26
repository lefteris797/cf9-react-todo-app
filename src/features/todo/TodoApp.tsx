import TodoForm from "./TodoForm.tsx";
import {useRef} from "react";
import {useTodos} from "./hooks/useTodos.ts";
import TodoList from "./TodoList.tsx";
import TodoStats from "./TodoStats.tsx";
import Button from "../../shared/ui/Button.tsx";

const TodoApp = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const {todos, addTodo, removeTodo, editTodo, toggleTodo, clearAll} = useTodos();

    const handleAdd = (text:string) => {
            addTodo(text);
            inputRef.current?.focus();
    }

    return (
        <>
            <div className="max-w-sn mx-auto pb-12">
                <h1 className="text-center text-2xl py-8">
                    To-Do list
                </h1>

                <TodoForm onAdd={handleAdd} inputRef={inputRef} />
                <TodoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={removeTodo} />

                <TodoStats todos={todos} />

                {todos.length > 0 && (
                    <div className="text-end mt-4">
                        <Button
                            addClasses="bg-cf-dark-red"
                            label="Clear All"
                            onClick={clearAll}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default TodoApp;