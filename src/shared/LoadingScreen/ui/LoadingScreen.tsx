import { RootState, useAppSelector } from '../../../app/store';
import styles from './LoadingScreen.module.css';

export const LoadingScreen = () => {
    const isLoading = useAppSelector((state: RootState) => state.loading.isLoading);
    return (
        <div className={isLoading ? styles.loadingPage : styles.loadingPage_disabled}>
            <span className={styles.loader} />
        </div>
    );
};
