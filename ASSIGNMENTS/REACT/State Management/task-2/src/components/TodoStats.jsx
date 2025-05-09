import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../recoil/todoState'

const TodoStats = () => {
  const { totalTasks, completedTasks, remainingTasks } =
    useRecoilValue(todoListStatsState)

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Remaining Tasks: {remainingTasks}</p>
    </div>
  )
}

export default TodoStats
