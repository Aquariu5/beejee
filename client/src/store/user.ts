import { IUser, IUserStore } from '../interfaces/user'
import { makeAutoObservable } from 'mobx'

class UserStore implements IUserStore {
  _isAuth: boolean
  _user: IUser | null
  constructor() {
    this._isAuth = localStorage.getItem('token') ? true : false
    this._user = null
    makeAutoObservable(this)
  }

  changeAuth() {
    this._isAuth = !this._isAuth
  }
  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}

export default new UserStore()
