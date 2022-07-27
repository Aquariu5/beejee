import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'

import { ITask } from '../interfaces/task'

interface TaskProps {
  task: ITask
  edit: (task: ITask) => void
}

const Task: React.FC<TaskProps> = ({ task, edit }) => {
  return (
    <Card key={task.id} sx={{ border: '1px dashed gray' }}>
      <CardContent>
        <Grid container gap={2} justifyContent={'space-between'}>
          <Grid item>
            <Grid container>
              <Typography variant={'overline'} p={1} color={'CaptionText'}>
                {task.name}
              </Typography>
              <Typography p={1} variant={'subtitle1'} color={'ActiveBorder'}>
                {task.text}
              </Typography>
              <Box p={1}>{task.status ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</Box>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Grid container direction={'column'}>
                  <Typography p={1} color={'GrayText'}>
                    {task.email}
                  </Typography>
                  <Box ml={2}>
                    <small>{task.change && 'отредактировано администратором'}</small>
                  </Box>
                </Grid>
              </Grid>
              <IconButton onClick={() => edit(task)}>
                <ModeEditIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Task
