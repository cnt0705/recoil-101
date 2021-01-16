import { useRecoilValue } from 'recoil'

import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { todoListState } from '../state'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <TodoItemCreator />

      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
