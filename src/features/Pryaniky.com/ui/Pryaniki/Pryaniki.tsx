import { Routes, Route } from 'react-router';
import { Login } from '../Login/Login';
import { useEffect } from 'react';
import { Table } from '../Table/Table';
import { Edit } from '../Edit/Edit';
import { Create } from '../Create/Create';
import { useIsLogged } from '../../lib/hooks/useIsLogged';
import { About } from '../About/About';

export const Pryaniki = () => {
    const isLogged = useIsLogged();

    useEffect(() => {
        isLogged();
    }, []);
    return (
        <>
            <Routes>
                <Route index element={<Table />} />
                <Route index path="login" element={<Login />} />
                <Route path="edit/:index" element={<Edit />}></Route>
                <Route path="create" element={<Create />}></Route>
                <Route path="about" element={<About />}></Route>
            </Routes>
        </>
    );
};
