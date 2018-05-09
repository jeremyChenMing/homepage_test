import 'es6-promise';
import fetch from 'isomorphic-fetch';
import qs from 'qs';
import _ from 'underscore';

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
        // ...header,
        
            Accept        : 'application/json',
            'Content-Type': 'application/json',
            Authorization : access_token ? `JWT ${access_token}` : ''
        
    };
    
    if (!access_token) delete result.Authorization;
    
    return result;
};

const get = (url, query = {}, options) => {
    
    const defaultOpt = {
        method : 'get',
        timeout: requestTimeOut,
        // headers: {...options}
        headers: {
            Accept        : 'application/json',
            'Content-Type': 'application/json',
            Authorization : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpkZDA2MSIsImV4cCI6MTUwMzIwMjgxNywiZW1haWwiOiIiLCJ1c2VyX2lkIjozMDB9.kOWI-FEuIxlncMmbpciaO2q7_bx1RMGSY6e7Rh7PDlA'    
        }    
    };
    
    // defaultOpt.headers = completeHeader(defaultOpt.headers);
    
    return fetch(url + (!_.isEmpty(query) ? `?${qs.stringify(query)}` : ''), defaultOpt).then(checkStatus).then(parseJSON);
};



export default {
    get,
   
};
