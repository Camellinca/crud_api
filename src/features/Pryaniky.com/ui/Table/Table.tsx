import { NavLink, useNavigate } from 'react-router';
import { RootState, useAppSelector } from '../../../../app/store';
import { TableRow } from '../TableRow/TableRow';
import styles from './Table.module.css';

export const Table = () => {
    const table = useAppSelector((state: RootState) => state.pryaniki.tableList);

    let navigate = useNavigate();

    const getTable = () => {
        const arr = [];
        for (let i = 0; i < table.length; i++) {
            arr.push(<TableRow key={table[i].id} index={i} />);
        }
        return arr;
    };

    const onLogout = () => {
        localStorage.removeItem('pryaniki');
        navigate('/login');
    };
    return (
        <>
            <div className={styles.controlButtons}>
                <NavLink className={styles.button} to="/about">
                    О Проекте
                </NavLink>
                <button className={styles.button} onClick={onLogout}>
                    Выйти
                </button>
                <NavLink className={styles.button} to="/create">
                    Добавить
                </NavLink>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Дата 1</th>
                        <th>CSName</th>
                        <th>docName</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>employee</th>
                        <th>Дата 2</th>
                        <th>ESName</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{getTable()}</tbody>
            </table>
        </>
    );
};
