import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { TodoItemType } from '../types'
import { replaceItem, removeItem } from '../utils/todo'

const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
})

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

const filteredTodoListState = selector({
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

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter(item => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

export const useTodoList = () => {
  const filteredTodoList = useRecoilValue(filteredTodoListState)

  const [todoList, setTodoList] = useRecoilState(todoListState)

  const addTodo = (value: TodoItemType['text']) => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: Math.random().toString(),
        text: value,
        isComplete: false,
      },
    ])
  }

  const editItemText = (newValue: TodoItemType['text'], item: TodoItemType) => {
    const newList = replaceItem(todoList, item, {
      ...item,
      text: newValue,
    })
    setTodoList(newList)
  }

  const toggleItemCompletion = (item: TodoItemType) => {
    const newList = replaceItem(todoList, item, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = (item: TodoItemType) => {
    const newList = removeItem(todoList, item)
    setTodoList(newList)
  }

  return {
    filteredTodoList,
    addTodo,
    editItemText,
    deleteItem,
    toggleItemCompletion,
  }
}

export const useTodoFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  return {
    filter,
    setFilter,
  }
}

export const useTodoStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState)

  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  }
}
