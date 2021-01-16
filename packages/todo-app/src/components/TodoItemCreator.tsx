import { useState } from 'react'
import { useTodoList } from '../hooks/todo'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodo } = useTodoList()

  const addItem = () => {
    addTodo(inputValue)
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
