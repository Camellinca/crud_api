import { ErrorToast } from '../../../shared/ErrorToast';
import { LoadingScreen } from '../../../shared/LoadingScreen/ui/LoadingScreen';
import styles from './MainWindow.module.css';

interface Props {
    children: React.ReactNode;
}

export const MainWindow = ({ children }: Props) => {
    return (
        <>
            {/* <header></header> */}
            <main className={styles.main}>{children}</main>
            {/* <footer></footer> */}
            <LoadingScreen />
            <ErrorToast />
        </>
    );
};
