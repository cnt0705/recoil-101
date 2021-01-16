import { TodoItemType } from '../types'
import { useTodoList } from '../hooks/todo'

type Props = {
  item: TodoItemType
}

export const TodoItem: React.FC<Props> = ({ item }) => {
  const { editItemText, deleteItem, toggleItemCompletion } = useTodoList()

  return (
    <div className="mb-2">
      <input
        type="text"
        value={item.text}
        onChange={e => editItemText(e.target.value, item)}
        className="mr-2 p-2 border-2 border-gray-300 rounded"
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => toggleItemCompletion(item)}
        className="mr-2"
      />
      <button onClick={() => deleteItem(item)}>X</button>
    </div>
  )
}
