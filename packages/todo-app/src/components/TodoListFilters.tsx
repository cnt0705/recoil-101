import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../state'

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFileter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div className="mb-3">
      <span className="mr-2">Filter:</span>
      <select
        value={filter}
        onChange={updateFileter}
        className="p-2 bg-gray-100 rounded"
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}
