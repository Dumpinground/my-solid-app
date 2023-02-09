import { createSignal, batch, For } from "solid-js"
import { createLocalStore, removeIndex } from "../utils";

type TodoItem = { 
    title: string;
    done: boolean;
};

export const TodoList = () => {
    
    const [newTitle, setTitle] = createSignal("")
    const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", [])

    const addTodo = (e: SubmitEvent) => {
        e.preventDefault()
        batch(() => {
            setTodos(todos.length, {
                title: newTitle(),
                done: false,
            })
            setTitle("")
        })
    }
    
    return (
        <>
            <h3>Simple Todos Example</h3>
            <form onSubmit={addTodo}>
                <input
                    required
                    placeholder="enter todo and click +"
                    value={newTitle()}
                    onInput={(e) => setTitle(e.currentTarget.value)}
                />
                <button>+</button>
            </form>
            <For each={todos}>
                {(todo, i) => (
                    <div>
                        <input
                            type="checkbox" checked={todo.done}
                            onChange={(e) => setTodos(i(), "done", e.currentTarget.checked)}
                        />
                        <input
                            type="text" value={ todo.title }
                            onChange={(e) => setTodos(i(), "title", e.currentTarget.value)}
                        />
                        <button onClick={() => setTodos((t) => removeIndex(t, i()))}>x</button>
                    </div>
                )}
            </For>
        </>
    )
}


