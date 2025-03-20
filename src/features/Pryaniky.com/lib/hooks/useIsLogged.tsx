import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../../app/store';
import { api } from '../api';
import { setList } from '../store/pryanikiSlice';
import { setLoadingScreen } from '../../../../shared/LoadingScreen/lib/loadingSlice';
import { useErrorToast } from '../../../../shared/ErrorToast';

//Проверяем на наличие токена аутентификации в браузере
export const useIsLogged = () => {
    const navigate = useNavigate();
    const toast = useErrorToast();
    const dispatch = useAppDispatch();

    return function () {
        const token = localStorage.getItem('pryaniki');
        if (token != null) {
            dispatch(setLoadingScreen(true));
            api.getTable()
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
            return true;
        }
        navigate('/login');
    };
};
