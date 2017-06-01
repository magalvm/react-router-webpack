import axios from "axios"
//import {authHeaders} from '../../utils'

function dataAction(method, url, params = null, headers = {}) {
    const config = {
        url,
        method,
        params: method === 'get' || method === 'delete' ? params : null,
        data: method === 'put' || method === 'post' || method === 'path' ? params : null,
       // headers: {...authHeaders(), ...headers}
    };

    console.log(config);

    return axios.request(config)
        .then(response => {
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function getDataAction(url, params = null, headers = {}) {
    return dataAction('get', url, params, headers);
}

export function postDataAction(url, params = null, headers = {}) {
    return dataAction('post', url, params, headers);
}

export function putDataAction(url, params = null, headers = {}) {
    return dataAction('put', url, params, headers);
}

export function deleteDataAction(url, params = null, headers = {}) {
    return dataAction('delete', url, params, headers);
}