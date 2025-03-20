import { useAppDispatch } from '../../../../app/store';
import { set } from '../errorToastSlice';

export const useErrorToast = () => {
    const dispatch = useAppDispatch();
    return function (text: string, time: number) {
        dispatch(set([text, time]));
    };
};
