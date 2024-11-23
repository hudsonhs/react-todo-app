import TodoItem from "./TodoItem"

export default function TodoList({title, list}) {
    return (
        <>
        <h1>{title}</h1>
        <div className="todo-list">
            {list.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
        </>
    )
}