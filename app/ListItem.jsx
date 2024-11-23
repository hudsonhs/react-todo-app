import './styles/style.css'

export default function ListItem( {item}) {
    return (
        <div className={`list-item ${item.completed ? 'completed' : ''}`}>
            {item.completed ? '✅' : '⬜'} {item.text}
        </div>
    )
}