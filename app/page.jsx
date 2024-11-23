import List from "./List"
import { mockTodoList } from "./mockData"

export default function Home() {
  const notDone = mockTodoList.items.filter(item => !item.completed)
  const completedTodos = mockTodoList.items.filter(item => item.completed)
  
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