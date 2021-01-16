import { atom, selector } from 'recoil'
import { TodoItemType } from '../types'

export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete)
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete)
      default:
        return list
    }
  },
})
