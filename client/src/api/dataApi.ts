import { IModalData } from "../interfaces/modals";
import { IFetchData, ITask } from "../interfaces/task";
import dataStore from '../store/data';
import infoStore from '../store/info';
import { api } from "./api";


export const getData = () => {
    api.get<IFetchData>('/data', {params: {
        page: dataStore.page,
        sortby: dataStore.sorBy,
        sortdirection: dataStore.sortDirection}})
        .then(res => {
            dataStore.setTasks(res.data.rows);
            dataStore.setCount(res.data.count);
        })
}
export const addRow = (data: IModalData) => {
    api.post<ITask>('/data', data)
    .then(res => {
        dataStore.addTask(res.data)
        infoStore.setAlert(true, 'Задание добавлено', 'success')
    })
}

export const editRow = (data: IModalData) => {
    api.put<ITask>('/data', {...data, id: dataStore.currentTask?.id})
    .then(res => dataStore.editTask(res.data))
    .catch(res => infoStore.setAlert(true, res.response.data.error, 'error'));
}