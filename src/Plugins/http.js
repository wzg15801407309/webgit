import _axios from "@/config/axios";
// import qs from 'qs';
export default class Http {
    static get (url, params) {
        return new Promise((resolve, reject) => {
            _axios
                .get(url, {
                    params: params
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static post (url, params) {
        return new Promise((resolve, reject) => {
            _axios
                .post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static delete (url, params) {
        return new Promise((resolve, reject) => {
            _axios
                .delete(url, {
                    data: params
                })
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static put (url, params) {
        return new Promise((resolve, reject) => {
            _axios
                .put(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
