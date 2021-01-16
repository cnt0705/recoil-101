import { TodoItemType } from '../types'

type ReplaceItemHandler = (
  items: TodoItemType[],
  item: TodoItemType,
  newValue: TodoItemType
) => TodoItemType[]

type RemoveItemHandler = (
  items: TodoItemType[],
  item: TodoItemType
) => TodoItemType[]

const getIndex = (todoList: TodoItemType[], item: TodoItemType) =>
  todoList.findIndex(ListItem => ListItem === item)

export const replaceItem: ReplaceItemHandler = (todoList, item, newValue) => {
  const index = getIndex(todoList, item)
  return [...todoList.slice(0, index), newValue, ...todoList.slice(index + 1)]
}

export const removeItem: RemoveItemHandler = (todoList, item) => {
  const index = getIndex(todoList, item)
  return [...todoList.slice(0, index), ...todoList.slice(index + 1)]
}
