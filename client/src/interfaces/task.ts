export interface ITask {
  id: string
  name: string
  email: string
  text: string
  status: boolean
  changed: boolean
}

export enum SortDirectionType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SortType {
  EMAIL = 'email',
  NAME = 'name',
  STATUS = 'status',
}

export interface ITaskStore {
  _sortBy: 'email' | 'name' | 'status'
  _sortDirection: SortDirectionType
  _pages: number
  _count: number
  _tasks: ITask[]
  _page: number
  _limit: number
  _currentTask: ITask | null
}

export interface IFetchData {
  rows: ITask[]
  count: number
}
