export interface ITask {
    id: string
    name: string
    email: string
    text: string
    status: boolean
    changed: boolean
}

export interface ITaskStore {
    _sortBy: 'email' | 'name' | 'status'
    _sortDirection: 'ASC' | 'DESC'
    _pages: number
    _count: number
    _tasks: ITask[]
    _page: number
    _limit: number
    _currentTask: ITask | null
}

export interface IFetchData {
    rows: ITask[],
    count: number
}