import { useRecoilValue } from 'recoil'

import { TodoItemCreator } from './TodoItemCreator'
import { todoListState } from '../state'

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
