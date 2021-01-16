import { TodoItem } from './TodoItem'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

import { useTodoList } from '../hooks/todo'

export const TodoList = () => {
  const { filteredTodoList } = useTodoList()

  return (
    <div className="p-5">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {filteredTodoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}
