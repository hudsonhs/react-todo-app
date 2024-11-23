import './styles/style.css'

export default function TodoItem( {todo}) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text} {todo.completed && '✅'}
        </div>
    )
}