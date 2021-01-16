import { useTodoStats } from '../hooks/todo'

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useTodoStats()

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul className="mb-5">
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}
