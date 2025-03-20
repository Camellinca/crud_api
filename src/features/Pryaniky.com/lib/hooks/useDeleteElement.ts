import { useAppDispatch } from '../../../../app/store';

import { api } from '../api';

import { deleteItem } from '../store/pryanikiSlice';
import { useErrorToast } from '../../../../shared/ErrorToast';
import { setLoadingScreen } from '../../../../shared/LoadingScreen/lib/loadingSlice';

//Логика удаления элемента
export const useDeleteElement = () => {
    const dispatch = useAppDispatch();
    const toast = useErrorToast();

    return function (id: string, index: number) {
        dispatch(setLoadingScreen(true));
        api.deleteRow(id)
            .then(() => {
                dispatch(deleteItem(index));
            })
            .catch(err => {
                toast(err.message, 4000);
            })
            .then(() => {
                dispatch(setLoadingScreen(false));
            });
    };
};
