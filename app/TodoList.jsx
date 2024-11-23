import TodoItem from "./TodoItem"

export default function TodoList({list}) {
    const d = new Date;
    const weekday = `${d.toLocaleString('en-us', {  weekday: 'long' })}`;
    const notDone = list.filter(todo =>
        !todo.completed
    )
    const completedTodos = list.filter(todo =>
        todo.completed
    )
    return (
        <>
        <h1>Todos for {weekday}:</h1>
        <div className="todoList">
            {notDone.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={ todo }
                />
            )}
        </div>
        <h1>What you've already done for {weekday}:</h1>
        <div className="doneList">
        {completedTodos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={ todo }
                />
            )}
        </div>
        </>
    )
}