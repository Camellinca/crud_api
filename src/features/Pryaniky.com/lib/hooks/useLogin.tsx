import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../../app/store';
import { useErrorToast } from '../../../../shared/ErrorToast';
import { api } from '../api';

import { setList } from '../store/pryanikiSlice';
import { setLoadingScreen } from '../../../../shared/LoadingScreen/lib/loadingSlice';

//Логинимся
export const useLogin = () => {
    const dispatch = useAppDispatch();
    const toast = useErrorToast();
    let navigate = useNavigate();

    return function (user: string, password: string) {
        dispatch(setLoadingScreen(true));
        api.login(user, password)
            .then(res => {
                //В нормальном приложении используем куки
                localStorage.setItem('pryaniki', res);
                return api.getTable();
            })
            .then(res => {
                dispatch(setList(res));
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
