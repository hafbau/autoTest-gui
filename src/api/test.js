import fetch from 'superagent';

import config from '../config';

export default {
    saveAndRun: (body, token) => {
        return fetch.post(`${config.API_PATH}/tests/saveAndRun`)
            .send(body)
            .type('json')
            .set('x-access-token', token)
            .set('Content-Type', 'application/json');
    }
};