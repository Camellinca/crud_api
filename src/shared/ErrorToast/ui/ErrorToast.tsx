import { useEffect, useState } from 'react';
import styles from './ErrorToast.module.css';
import { RootState, useAppDispatch, useAppSelector } from '../../../app/store';
import { end } from '../lib/errorToastSlice';

// Простое всплывающее окно будет нашим способом уведомить пользователя об ошибках сети
export const ErrorToast = () => {
    const [isHidden, setHidden] = useState<boolean>(true);

    const { text, time } = useAppSelector((state: RootState) => state.errorToast);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (time > 0) {
            setHidden(false);
            const timeout = setTimeout(() => {
                setHidden(true);
                dispatch(end());
            }, time);
            return () => {
                clearTimeout(timeout);
                setHidden(true);
            };
        }
    });

    return (
        <div className={`${styles.errortoast} , ${isHidden ? styles.hidden : ''}`}>
            <p>Ошибка</p>
            <p>{text}</p>
        </div>
    );
};
