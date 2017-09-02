import fetch from 'superagent';

import config from '../config';

export default {
    login: ({ email, password }) => {
        return fetch.post(`${config.API_PATH}/login`)
            .send({ email, password })
            .type('json')
            .set('Content-Type', 'application/json');
    },

    logout: (token) => {
        return fetch.get(`${config.API_PATH}/logout`)
            .set('x-access-token', token)
            .set('Content-Type', 'application/json');
    },

    register: (body) => {
        return fetch.post(`${config.API_PATH}/register`)
            .send(body)
            .type('json')
            .set('Content-Type', 'application/json');
    }
};