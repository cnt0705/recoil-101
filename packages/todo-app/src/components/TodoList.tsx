import { useRecoilValue } from 'recoil'

import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

import { filteredTodoListState } from '../state'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="p-5">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}
