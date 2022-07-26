import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import dataStore from '../store/data';

const SortPanel = () => {

  const changeSortBy = React.useCallback((event: SelectChangeEvent) => {
    dataStore.setSortBy(event.target.value as "status" | "email" | "name")
  },[]);
  
  const changeDirection = React.useCallback((event: SelectChangeEvent) => {
    dataStore.setDirection(event.target.value as "ASC" | "DESC")
  },[]);

  return (
    <Grid container direction={'column'} gap={2}>
      <FormControl fullWidth>
        <InputLabel>Сортировать по</InputLabel>
        <Select
          value={dataStore.sorBy}
          label="Сортировать по"
          onChange={changeSortBy}
        >
          <MenuItem value={'email'}>Email</MenuItem>
          <MenuItem value={'name'}>Name</MenuItem>
          <MenuItem value={'status'}>Status</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Направление</InputLabel>
        <Select
          value={dataStore.sortDirection}
          label="Сортировать по"
          onChange={changeDirection}
        >
          <MenuItem value={'ASC'}>По возрастанию</MenuItem>
          <MenuItem value={'DESC'}>По убыванию</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default observer(SortPanel)
