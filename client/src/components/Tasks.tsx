import ModeEditIcon from '@mui/icons-material/ModeEdit'
import {
  Box,
  Pagination,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useCallback, useEffect, useState } from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CustomModal from './modals/CustomModal'

import { api } from '../api/api'
import { getData } from '../api/dataApi'
import { ITask } from '../interfaces/task'
import dataStore from '../store/data'
import userStore from '../store/user'
import infoStore from '../store/info'
import Task from './Task'
import SortPanel from './SortPanel'
import AuthModal from './modals/AuthModal'
import Info from './Info'

const Tasks = () => {
  useEffect(() => {
    getData()
  }, [dataStore.page, dataStore.sorBy, dataStore.sortDirection, dataStore.pages])

  const [open, setOpen] = useState<boolean>(false)
  const [openAuth, setOpenAuth] = useState<boolean>(false)
  const [modalName, setModalName] = useState<'Добавить' | 'Изменить'>('Добавить')
  
  const add = useCallback(() => {
    setOpen(true)
    setModalName('Добавить')
  },[]);

  const auth = useCallback(() => {
    if (userStore.isAuth) {
        localStorage.removeItem('token');
        userStore.changeAuth();
    }
    else {
        setOpenAuth(true);
    }

  },[]);

  const edit = useCallback((task: ITask) => {
    if (userStore.isAuth) {
        dataStore.setTask(task)
        setOpen(true)
        setModalName('Изменить')
    }
    else {
        infoStore.setAlert(true, 'Не авторизован', 'error')
    }
  },[]);

  const changePage = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dataStore.setPage(page)
  },[]);

  return (
    <Box p={4}>
      <Grid container direction={'row'} gap={2}>
        <Grid item md={8}>
          {dataStore.tasks.map((task) => (
            <Task key={task.id} task={task} edit={edit} />
          ))}
          <Box p={2}>
            <Pagination onChange={changePage} count={dataStore.pages} color="primary" />
          </Box>
        </Grid>
        <Grid item>
          <Grid container direction={'column'} gap={1}>
            <Button onClick={add} variant={'contained'}>
              Добавить
            </Button>
            <Button onClick={auth} variant={'contained'}>
              {userStore.isAuth ? 'Выйти' : 'Авторизация'}
            </Button>
          </Grid>
        </Grid>

        <Grid>
          <SortPanel />
        </Grid>
      </Grid>

      <CustomModal open={open} setOpen={setOpen} modalName={modalName} />
      <AuthModal open={openAuth} setOpen={setOpenAuth} />
      <Info />
    </Box>
  )
}

export default observer(Tasks)
