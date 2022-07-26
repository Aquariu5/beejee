import { makeAutoObservable } from 'mobx'

import { IInfoStore } from '../interfaces/info'

class InfoStore implements IInfoStore {
  severity: string
  message: string
  open: boolean
  constructor() {
    this.message = ''
    this.severity = 'error'
    this.open = false
    makeAutoObservable(this)
  }

  setAlert(open: boolean, message: string, severity: string) {
    this.open = open
    this.message = message
    this.severity = severity
  }
}

export default new InfoStore()
