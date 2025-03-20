import { useAppDispatch } from '../../../../app/store';
import { Item } from '../../model/types';
import { api } from '../api';
import { omitItemForApi } from '../OmitItemForApi';
import { createItem } from '../store/pryanikiSlice';
import { useNavigate } from 'react-router';
import { useErrorToast } from '../../../../shared/ErrorToast';
import { setLoadingScreen } from '../../../../shared/LoadingScreen/lib/loadingSlice';

//Логика создания нового элемента
export const useCreateElement = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useErrorToast();

    return function (value: Item) {
        dispatch(setLoadingScreen(true));
        api.createRow(omitItemForApi(value))
            .then(res => {
                dispatch(createItem(res));
                navigate('/');
            })
            .catch(err => {
                toast(err.message, 4000);
            })
            .then(() => {
                dispatch(setLoadingScreen(false));
            });
    };
};
