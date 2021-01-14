import { atom, useRecoilValue } from 'recoil'
import { TodoItemCreator } from './TodoItemCreator'

type TodoItem = {
  id: string
  text: string
}

const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
})

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <TodoItemCreator />
      {console.log(todoList)}

      {/* {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))} */}
    </>
  )
}
