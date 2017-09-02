import authApi from "../api/auth";

export function login(credential) {
    return function(dispatch) {
        dispatch({
            type: 'LOGIN_PENDING',
        });

        return authApi.login(credential)
        .then(({ body: { token, user } }) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                token,
                user
            });

        })
        .catch(error => {
            return dispatch({
                type: 'LOGIN_FAILURE',
                error
            })
        })
    }
}

export function logout(token) {
    return function(dispatch) {
        dispatch({
            type: 'LOGOUT_PENDING',
        });

        return authApi.logout(token)
        .then(({ body }) => {
            console.log("body", body)
            dispatch({
                type: 'LOGOUT_SUCCESS',
                token: "",
                user: {}
            });

        })
        .catch(error => {
            return dispatch({
                type: 'LOGOUT_FAILURE',
                error
            })
        })
    }
}

export function register(body) {
    return function(dispatch) {
        dispatch({
            type: 'REGISTER_PENDING',
        });

        return authApi.register(body)
        .then(({ body: { token, user } }) => {
            dispatch({
                type: 'REGISTER_SUCCESS',
                token,
                user
            });

        })
        .catch(error => {
            return dispatch({
                type: 'REGISTER_FAILURE',
                error
            })
        })
    }
}