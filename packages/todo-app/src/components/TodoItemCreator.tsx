import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '../state'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  return <div>TodoItemCreator</div>
}
