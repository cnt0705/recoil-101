import { useRecoilState } from 'recoil'
import { todoListState } from '../state'
import { TodoItemType } from '../types'

type Props = {
  item: TodoItemType
}

type ReplaceItemHandler = (
  items: TodoItemType[],
  index: number,
  item: TodoItemType
) => TodoItemType[]

type RemoveItemHandler = (
  items: TodoItemType[],
  index: number
) => TodoItemType[]

const replaceItemAtIndex: ReplaceItemHandler = (arr, index, newValue) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
]

const removeItemAtIndex: RemoveItemHandler = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
]

export const TodoItem: React.FC<Props> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(ListItem => ListItem === item)

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
