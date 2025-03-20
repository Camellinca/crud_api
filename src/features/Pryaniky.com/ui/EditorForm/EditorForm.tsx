import { Formik } from 'formik';
import { Item } from '../../model/types';
import styles from './EditorForm.module.css';
import { initialForForm } from '../../lib/initialForForm';
import { NavLink } from 'react-router';

interface Props {
    initialValues?: Item;
    onSubmit: (values: Item) => void;
}

type Errors = Partial<Item>;

export const EditorForm = ({ initialValues, onSubmit }: Props) => {
    const _initialValues = initialForForm(initialValues);

    const onValidate = (values: Item) => {
        const errors: Errors = {};
        if (!values.companySigDate) errors.companySigDate = 'required';
        if (!values.companySignatureName) errors.companySignatureName = 'required';
        if (!values.documentName) errors.documentName = 'required';
        if (!values.documentStatus) errors.documentStatus = 'required';
        if (!values.documentType) errors.documentType = 'required';
        if (!values.employeeNumber) errors.employeeNumber = 'required';
        if (!values.employeeSigDate) errors.employeeSigDate = 'required';
        if (!values.employeeSignatureName) errors.employeeSignatureName = 'required';
        return errors;
    };

    return (
        <>
            <Formik initialValues={_initialValues} validate={onValidate} onSubmit={onSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <label>
                            <p>companySigDate</p>
                            <input
                                className={
                                    errors.companySigDate && touched.companySigDate
                                        ? styles.unvalidated
                                        : !initialValues && values.documentName
                                          ? styles.validated
                                          : ''
                                }
                                autoComplete="off"
                                placeholder="companySigDate"
                                type="datetime-local"
                                name="companySigDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.companySigDate}
                            />
                        </label>
                        <label>
                            <p>companySignatureName</p>
                            <input
                                className={
                                    errors.companySignatureName && touched.companySignatureName
                                        ? styles.unvalidated
                                        : !initialValues && values.documentName
                                          ? styles.validated
                                          : ''
                                }
                                placeholder="companySignatureName"
                                type="text"
                                name="companySignatureName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.companySignatureName}
                            />
                        </label>
                        <label>
                            <p>documentName</p>
                            <input
                                className={errors.documentName && touched.documentName ? styles.unvalidated : ''}
                                placeholder="documentName"
                                type="text"
                                name="documentName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.documentName}
                            />
                        </label>
                        <label>
                            <p>documentStatus</p>
                            <input
                                className={errors.documentStatus && touched.documentStatus ? styles.unvalidated : ''}
                                placeholder="documentStatus"
                                type="text"
                                name="documentStatus"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.documentStatus}
                            />
                        </label>
                        <label>
                            <p>documentType</p>
                            <input
                                className={errors.documentType && touched.documentType ? styles.unvalidated : ''}
                                placeholder="documentType"
                                type="text"
                                name="documentType"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.documentType}
                            />
                        </label>
                        <label>
                            <p>employeeNumber</p>
                            <input
                                className={errors.employeeNumber && touched.employeeNumber ? styles.unvalidated : ''}
                                placeholder="employeeNumber"
                                type="text"
                                name="employeeNumber"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.employeeNumber}
                            />
                        </label>
                        <label>
                            <p>employeeSigDate</p>
                            <input
                                className={errors.employeeSigDate && touched.employeeSigDate ? styles.unvalidated : ''}
                                placeholder="employeeSigDate"
                                type="datetime-local"
                                name="employeeSigDate"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.employeeSigDate}
                            />
                        </label>
                        <label>
                            <p>employeeSignatureName</p>
                            <input
                                className={errors.employeeSignatureName && touched.employeeSignatureName ? styles.unvalidated : ''}
                                placeholder="employeeSignatureName"
                                type="text"
                                name="employeeSignatureName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.employeeSignatureName}
                            />
                        </label>
                        <div className={styles.button_container}>
                            <button className={styles.button} type="submit">
                                Сохранить
                            </button>
                            <NavLink className={styles.button} to="/">
                                Отмена
                            </NavLink>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};
