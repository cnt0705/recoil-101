import { atom } from 'recoil'

type TodoItem = {
  id: string
  text: string
}

export const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
})
