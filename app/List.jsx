import ListItem from "./ListItem"

export default function List({title, items}) {
    return (
        <>
        <h2 className="list-title">{title}</h2>
        <div className="list">
            {items.map(item =>
                <ListItem
                    key={item.id}
                    item={item}
                />
            )}
        </div>
        </>
    )
}