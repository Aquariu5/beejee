import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

import infoData from '../store/info'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Info: React.FC = () => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    infoData.setAlert(false, '', infoData.severity)
  }

  return (
    <Snackbar open={infoData.open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={infoData.severity as AlertColor} sx={{ width: '100%' }}>
        {infoData.message}
      </Alert>
    </Snackbar>
  )
}

export default observer(Info)
