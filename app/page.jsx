import List from "./List"
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
    <h1>{mockTodoList.title}</h1>
      <List
        title='Todo'
        items={notDone}
      />
      <List
        title='Completed'
        items={completedTodos}
      />
    </>
  )
}