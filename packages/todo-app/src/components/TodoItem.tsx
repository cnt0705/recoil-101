import { TodoItemType } from '../types'

type Props = {
  item: TodoItemType
}

export const TodoItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <input type="text" value={item.text} />
      <input type="checkbox" checked={false} />
      <button>X</button>
    </div>
  )
}
