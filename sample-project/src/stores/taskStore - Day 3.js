import { defineStore } from 'pinia'
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, name: 'Task 1', done: false, dueDate: new Date('2025-06-01') },
      { id: 2, name: 'Task 2', done: true,  dueDate: new Date('2025-06-02') },
      { id: 3, name: 'Task 3', done: false, dueDate: new Date('2025-06-03') },
    ]
  }),
})