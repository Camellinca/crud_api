import { useParams } from 'react-router';
import { RootState, useAppSelector } from '../../../../app/store';
import { EditorForm } from '../EditorForm/EditorForm';
import { Item } from '../../model/types';

import { ErrorToast } from '../../../../shared/ErrorToast';
import { useEditElement } from '../../lib/hooks/useEditElement';

export const Edit = () => {
    const editElement = useEditElement();
    let { index } = useParams();
    const table = useAppSelector((state: RootState) => state.pryaniki.tableList[Number(index)]);
    const onSubmit = async (values: Item) => {
        editElement(values, Number(index));
    };

    return (
        <>
            <EditorForm initialValues={table} onSubmit={onSubmit} />
            <ErrorToast />
        </>
    );
};
