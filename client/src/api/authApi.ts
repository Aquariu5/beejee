import { IModalAuth } from '../interfaces/modals'
import { api } from './api'
import userStore from '../store/user'
import infoStore from '../store/info'
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
