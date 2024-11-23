import TodoList from "./TodoList"
import { mockTodoList } from "./mockData"

export default function Home() {
  return (
    <TodoList
      list={mockTodoList}
    />
  )
}
