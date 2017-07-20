import 'es6-promise'; //包含promise
import fetch from 'isomorphic-fetch'; //新一代的ajax
import qs from 'qs';//查询和解析字符串，并且具有一定的安全性
import _ from 'underscore';//一些常用的小方法

let rootState = {};

const requestTimeOut = 1000 * 600;


export const changeState = (store) => {
    rootState = store.getState();
};

export const syncStateToFetch = (app) => {
    changeState(app._store);
};

const checkStatus = (response) => {
    
    switch (response.status) {
        case 200:
            return response;
        case 409:
            return response;
        case 400:
            return response;
        case 302:
            return response;
        default:
            return response;
    }
    
};

const parseJSON = (response) => {
    return response.json().then(json=>{
        if (json.code === 401){
            location.href = '#/login';
        }
        return json;
    }).catch( err => ({}));
};

const completeHeader = (header) => {
    
    const state = (rootState || {}).user || {};
    
    const {access_token = ''} = state;
    
    const result = {
        ...header,
        ...{
            Accept        : 'application/json',
            'Content-Type': 'application/json',
            Authorization : access_token ? `JWT ${access_token}` : ''
        }
    };
    
    if (!access_token) delete result.Authorization;
    
    return result;
};

const get = (url, query = {}, options) => {
    
    const defaultOpt = {
        method : 'get',
        timeout: requestTimeOut,
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url + (!_.isEmpty(query) ? `?${qs.stringify(query)}` : ''), defaultOpt).then(checkStatus).then(parseJSON);
};

const post = (url, data = {}, options) => {
    
    const defaultOpt = {
        method : 'post',
        timeout: requestTimeOut,
        body   : JSON.stringify(data),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url, defaultOpt).then(checkStatus).then(parseJSON);
};


const put = (url, data, options) => {
    const defaultOpt = {
        method : 'put',
        timeout: requestTimeOut,
        body   : JSON.stringify(data),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url, defaultOpt).then(checkStatus).then(parseJSON);
};

const del = (url, data = {}, options) => {
    
    const defaultOpt = {
        method : 'delete',
        headers: {...options},
        timeout: requestTimeOut,
        body   : JSON.stringify(data)
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url, defaultOpt).then(checkStatus).then(parseJSON);
};

const patch = (url, data, options) => {
    const defaultOpt = {
        method : 'patch',
        timeout: requestTimeOut,
        body   : JSON.stringify(data),
        headers: {...options}
    };
    
    defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url, defaultOpt).then(checkStatus).then(parseJSON);
};



export default {
    get,
    post,
    put,
    del,
    patch,
};
