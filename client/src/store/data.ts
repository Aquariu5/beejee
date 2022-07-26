import { makeAutoObservable } from 'mobx'
import { IModalData } from '../interfaces/modals'
import { ITask, ITaskStore } from '../interfaces/task'

class DataStore implements ITaskStore {
  _count: number
  _pages: number
  _tasks: ITask[]
  _page: number
  _limit: number
  _currentTask: ITask | null
  _sortBy: 'email' | 'name' | 'status'
  _sortDirection: 'ASC' | 'DESC'
  constructor() {
    this._tasks = []
    this._page = 1
    this._limit = 3
    this._currentTask = null
    this._count = 0
    this._pages = 1
    this._sortBy = 'name'
    this._sortDirection = 'ASC'
    makeAutoObservable(this)
  }

  setCount(count: number) {
    this._count = count
    this._pages = Math.ceil(count / this._limit)
  }

  setPage(page: number) {
    this._page = page
  }
  setLimit(limit: number) {
    this._limit = limit
  }

  setTasks(tasks: ITask[]) {
    this._tasks = tasks
  }

  setTask(task: ITask) {
    this._currentTask = task
  }

  addTask(task: ITask) {
    this._count += 1
    this._pages = Math.ceil(this._count / this._limit)
  }

  editTask(data: IModalData) {
    let idx = this._tasks.findIndex((el) => el.id === this._currentTask?.id)
    if (idx != -1) {
      this._tasks[idx] = { ...this._tasks[idx], ...data }
    }
  }

  setSortBy(sort: 'email' | 'name' | 'status') {
    this._sortBy = sort
  }

  setDirection(direction: 'ASC' | 'DESC') {
    this._sortDirection = direction
  }

  get currentTask() {
    return this._currentTask
  }

  get tasks() {
    return this._tasks
  }

  get count() {
    return this._count
  }

  get page() {
    return this._page
  }

  get pages() {
    return this._pages
  }

  get sorBy() {
    return this._sortBy
  }

  get sortDirection() {
    return this._sortDirection
  }
}

export default new DataStore()
