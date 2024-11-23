import TodoList from "./TodoList"
import { mockTodoList } from "./mockData"

export default function Home() {
  const notDone = mockTodoList.items.filter(todo =>
      !todo.completed
  )
  const completedTodos = mockTodoList.items.filter(todo =>
      todo.completed
  )
  return (
    <>
      <TodoList
        title={mockTodoList.title}
        list={notDone}
      />
      <TodoList
        title={`Completed for ${mockTodoList.title}`}
        list={completedTodos}
      />
    </>
  )
}