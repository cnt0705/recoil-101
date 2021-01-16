import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../state'

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFileter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFileter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
