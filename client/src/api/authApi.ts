import { IModalAuth } from '../interfaces/modals'
import infoStore from '../store/info'
import userStore from '../store/user'
import { api } from './api'
interface ILogin {
  token: string
}
export const login = (data: IModalAuth) => {
  return api
    .post<ILogin>('/auth', data)
    .then((res) => {
      userStore.changeAuth()
      localStorage.setItem('token', res.data.token)
      return res.data.token
    })
    .catch((res) => infoStore.setAlert(true, res.response.data.error, 'error'))
}
