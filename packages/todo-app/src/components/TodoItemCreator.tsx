import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '../state'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: Math.random().toString(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="mb-5">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="mr-2 p-2 border-2 border-gray-300 rounded"
      />
      <button onClick={addItem} className="p-2 bg-green-500 text-white rounded">
        Add
      </button>
    </div>
  )
}
