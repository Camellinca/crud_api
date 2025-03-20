import { EditorForm } from '../EditorForm/EditorForm';
import { Item } from '../../model/types';
import { useCreateElement } from '../../lib/hooks/useCreateElement';

export const Create = () => {
    const createElement = useCreateElement();

    const onSubmit = (values: Item) => {
        createElement(values);
    };
    return (
        <>
            <EditorForm onSubmit={onSubmit} />
        </>
    );
};
