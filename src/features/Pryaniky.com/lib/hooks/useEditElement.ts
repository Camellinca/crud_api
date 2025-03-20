import { useAppDispatch } from '../../../../app/store';
import { Item } from '../../model/types';
import { api } from '../api';
import { editItem } from '../store/pryanikiSlice';
import { useNavigate } from 'react-router';
import { useErrorToast } from '../../../../shared/ErrorToast';
import { setLoadingScreen } from '../../../../shared/LoadingScreen/lib/loadingSlice';

//Логика редиктирования элемента
export const useEditElement = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const toast = useErrorToast();

    return function (value: Item, index: number) {
        dispatch(setLoadingScreen(true));
        api.createRow(value)
            .then(() => {
                dispatch(editItem([value, Number(index)]));
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
