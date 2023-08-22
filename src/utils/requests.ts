/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import { history } from "./history";


export function requestBackend(config: AxiosRequestConfig) {
    return axios({ ...config, baseURL: BASE_URL })
}


// REQUEST INTERCEPTOR
axios.interceptors.request.use(
    function (config) {
        // DO SOMETHING BEFORE REQUEST IS SENT
        return config;
    },
    function (error) {
        // DO SOMETHING WITH REQUEST ERROR
        return Promise.reject(error);
    }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
    function (response) {
        // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            console.log('deu 401!!!!');
            history.push('/login')

        } if (error.response.status === 403) {
            console.log('deu 403!!!!');
            history.push('/catalog')


        }
        return Promise.reject(error);
    }
);