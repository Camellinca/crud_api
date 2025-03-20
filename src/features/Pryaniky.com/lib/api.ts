import { Item, ItemForApi, List } from '../model/types';

interface Api {
    host: string;
    token: string;
    login: (user: string, password: string) => Promise<string>;
    checkToken: () => void;
    getTable: () => Promise<List>;
    createRow: (newData: ItemForApi) => Promise<Item>;
    editRow: (newData: Item) => Promise<string>;
    deleteRow: (id: string) => Promise<boolean>;
}

export const api: Api = {
    host: 'https://test.v5.pryaniky.com',
    token: '',
    login: async function (user, password) {
        const res = await fetch(`${this.host}/ru/data/v3/testmethods/docs/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ username: user, password: password }),
        })
            .then(res => {
                if (res.ok) {
                    return res.text();
                } else throw Error('Ошибка HTTP: ' + res.status);
            })
            .then(res => JSON.parse(res))
            .catch(error => {
                throw Error(error);
            });
        if (res.data.token) {
            this.token = res.data.token;
            return res.data.token;
        }
        throw Error();
    },
    checkToken: function () {
        if (!this.token) {
            const token = localStorage.getItem('pryaniki');
            if (token) {
                this.token = token;
            } else {
                //Не должно срабатывать
                throw Error('нет токена аутентификации!');
            }
        }
    },
    getTable: async function (): Promise<List> {
        this.checkToken();
        const res = await fetch(`${this.host}/ru/data/v3/testmethods/docs/userdocs/get`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'x-auth': this.token,
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.text();
                } else throw Error('Ошибка HTTP: ' + res.status);
            })
            .then(res => JSON.parse(res))
            .catch(error => {
                throw Error(error);
            });
        if (res.data) {
            return res.data;
        }
        throw Error(res.status);
    },
    editRow: function (newData) {
        this.checkToken();

        return fetch(`${this.host}/ru/data/v3/testmethods/docs/userdocs/set/${newData.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'x-auth': this.token,
            },
            body: JSON.stringify(newData),
        })
            .then(res => {
                if (res.ok) {
                    return res.text();
                } else {
                    throw Error('Ошибка HTTP: ' + res.status);
                }
            })
            .then(() => '')
            .catch(err => {
                throw err;
            });
    },
    //Почему удаление совершается через POST
    deleteRow: async function (id) {
        return fetch(`${this.host}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`, {
            method: 'POST',
            headers: {
                'x-auth': this.token,
            },
        })
            .then(res => {
                if (res.ok) {
                    return true;
                } else {
                    throw Error('Ошибка HTTP: ' + res.status);
                }
            })
            .then(() => '')
            .catch(err => {
                return err.message;
            });
    },
    createRow: function (newData) {
        return fetch(`${this.host}/ru/data/v3/testmethods/docs/userdocs/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'x-auth': this.token,
            },
            body: JSON.stringify(newData),
        })
            .then(res => {
                if (res.ok) {
                    return res.text();
                } else {
                    throw Error('Ошибка HTTP: ' + res.status);
                }
            })
            .then(res => JSON.parse(res).data)
            .catch(err => {
                throw err;
            });
    },
};
