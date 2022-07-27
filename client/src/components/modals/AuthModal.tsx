import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { login } from '../../api/authApi'
import { IModalAuth } from '../../interfaces/modals'
import { ITask } from '../../interfaces/task'

interface ModalProps {
  open: boolean
  setOpen: Function
}
export const AuthModal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const { register, handleSubmit, watch, control, reset } = useForm<IModalAuth>()

  const onSubmit: SubmitHandler<IModalAuth> = useCallback(
    async (data) => {
      const res = await login(data)
      if (res) {
        setOpen(false)
      }
    },
    [setOpen],
  )

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Авторизация</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField autoFocus margin="dense" label="Логин" fullWidth variant="standard" {...register('name')} />
            <TextField
              autoFocus
              margin="dense"
              label="Пароль"
              type="string"
              fullWidth
              {...register('password')}
              variant="standard"
            />
            <DialogActions>
              <Button onClick={handleClose}>Отмена</Button>
              <Button type="submit">Войти</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AuthModal
