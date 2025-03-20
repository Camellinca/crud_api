import { Formik } from 'formik';

import styles from './Login.module.css';
import { useLogin } from '../../lib/hooks/useLogin';

interface Values {
    login: string;
    password: string;
}
interface Errors {
    login?: string;
    password?: string;
}
export const datalogin = () => {
    return 5;
};

export const Login = () => {
    const LoginSubmit = useLogin();

    const onSubmit = async (values: Values) => {
        const { login, password } = values;
        LoginSubmit(login, password);
    };

    const onValidate = (values: Values) => {
        const errors: Errors = {};
        if (!values.login) {
            errors.login = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };
    const initialValues = { login: '', password: '' };

    return (
        <>
            <h1>Авторизация</h1>
            <Formik initialValues={initialValues} validate={onValidate} onSubmit={onSubmit}>
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <input
                            autoComplete="off"
                            placeholder="Логин"
                            type="text"
                            name="login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.login}
                        />
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <div>
                            <button className={styles.button} type="submit">
                                Сохранить
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};
