import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { addRow, editRow } from '../../api/dataApi'
import { IModalData } from '../../interfaces/modals'
import dataStore from '../../store/data'
import userStore from '../../store/user'
interface ModalProps {
  open: boolean
  setOpen: Function
  modalName: 'Добавить' | 'Изменить'
}
export const CustomModal: React.FC<ModalProps> = ({ open, setOpen, modalName }) => {
  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit: SubmitHandler<IModalData> = (data) => {
    if (modalName == 'Добавить') {
      addRow(data)
    } else {
      editRow(data)
    }
    setOpen(false)
  }

  const { register, handleSubmit, control, reset } = useForm<IModalData>({
    defaultValues: {
      name: dataStore.currentTask?.name,
      email: dataStore.currentTask?.email,
      text: dataStore.currentTask?.text,
    },
  })
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(modalName === 'Изменить' ? true : false)
    reset({ ...dataStore.currentTask })
  }, [dataStore.currentTask])

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{modalName}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              disabled={disabled}
              autoFocus
              margin="dense"
              label="Имя"
              fullWidth
              required
              variant="standard"
              {...register('name', { required: 'true' })}
            />
            <TextField
              autoFocus
              disabled={disabled}
              margin="dense"
              label="EMail"
              type="email"
              fullWidth
              required
              {...register('email', { required: 'true' })}
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              label="Текст"
              type="text"
              fullWidth
              required
              {...register('text', { required: 'true' })}
              variant="standard"
            />
            <Grid container>
              <Typography mt={1}>Выполнено</Typography>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Checkbox disabled={!userStore.isAuth} defaultChecked={dataStore.currentTask?.status} {...field} />
                )}
              />
            </Grid>

            <DialogActions>
              <Button onClick={handleClose}>Отмена</Button>
              <Button type={'submit'}>Сохранить</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default observer(CustomModal)
