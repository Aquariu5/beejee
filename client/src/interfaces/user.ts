export interface IUser {
    id: number
    name: string
    password: string
    role: string
}

export interface IUserStore {
    _isAuth: boolean
    _user: IUser | null
}