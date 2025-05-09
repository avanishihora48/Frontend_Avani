import { atom, selector } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalTasks = todoList.length
    const completedTasks = todoList.filter((task) => task.isComplete).length
    const remainingTasks = totalTasks - completedTasks

    return {
      totalTasks,
      completedTasks,
      remainingTasks,
    }
  },
})
