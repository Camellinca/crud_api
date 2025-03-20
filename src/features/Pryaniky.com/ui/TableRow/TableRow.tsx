import { Link } from 'react-router';
import { RootState, useAppSelector } from '../../../../app/store';
import styles from './TableRow.module.css';

import { useDeleteElement } from '../../lib/hooks/useDeleteElement';

interface Props {
    index: number;
}

export const TableRow = ({ index }: Props) => {
    const deleteElement = useDeleteElement();
    const row = useAppSelector((state: RootState) => state.pryaniki.tableList[index]);

    const onDelete = async () => {
        deleteElement(row.id, index);
    };
    return (
        <>
            <tr>
                <td>{row.companySigDate}</td>
                <td>{row.companySignatureName}</td>
                <td>{row.documentName}</td>
                <td>{row.documentStatus}</td>
                <td>{row.documentType}</td>
                <td>{row.employeeNumber}</td>
                <td>{row.employeeSigDate}</td>
                <td>{row.employeeSignatureName}</td>
                <td>
                    <Link className={styles.interactable} to={`/edit/${index}`}>
                        Изменить
                    </Link>
                </td>
                <td>
                    <button className={styles.interactable} onClick={onDelete}>
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};
