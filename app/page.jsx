import TodoList from "./TodoList"
import { mockTodoList } from "./mockData"

export default function Home() {
  const d = new Date;
  const weekday = `${d.toLocaleString('en-us', {  weekday: 'long' })}`;
  const notDone = mockTodoList.filter(todo =>
      !todo.completed
  )
  const completedTodos = mockTodoList.filter(todo =>
      todo.completed
  )
  return (
    <>
      <TodoList
        title={`Todos for ${weekday}`}
        list={notDone}
      />
      <TodoList
        title={`What you've already done for ${weekday}`}
        list={completedTodos}
      />
    </>
  )
}