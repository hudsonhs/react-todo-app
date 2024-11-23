import './styles/style.css'

export default function ListItem( {todo}) {
    return (
        <div className={`list-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text} {todo.completed && '✅'}
        </div>
    )
}