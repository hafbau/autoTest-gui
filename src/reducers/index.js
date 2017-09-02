const initialState = {
    // data
    token: '',
    user: {

    },
    error: null,

    // UI state
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        /**
         * Auth related
         */
        // login
        case "LOGIN_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "LOGIN_PENDING":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.user,
                token: action.token,
                loading: false,
                error: null
            };

        // logout
        case "LOGOUT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "LOGOUT_PENDING":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "LOGOUT_SUCCESS":
            return {
                ...state,
                user: action.user,
                token: action.token,
                loading: false,
                error: null
            };

        // register
        case "REGISTER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "REGISTER_PENDING":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "REGISTER_SUCCESS":
            return {
                ...state,
                user: action.user,
                token: action.token,
                loading: false,
                error: null
            };

        /**
         * Socket setup Related
         */
        // has_socket
        case "HAS_SOCKET":
            return {
                ...state,
                hasSocket: true,
                socket: action.socket
            };

        // is_listening
        case "IS_LISTENING":
            return {
                ...state,
                isListening: true
            };

        /**
         * Test Related
         */
        // save and run
        case "SAVE_AND_RUN_FAILURE":
            return {
                ...state,
                running: false,
                error: action.error
            };
        case "SAVE_AND_RUN_PENDING":
            return {
                ...state,
                running: true,
                runningCase: action.runningCase,
                error: null
            };
        case "SAVE_AND_RUN_SUCCESS":
            return {
                ...state,
                results: action.results,
                running: false,
                error: null
            };

        // step result (listener dispatched)
        case "STEP_RESULT":
            return {
                ...state,
                result: action.payload
            }
        
            default:
                return state
    }
}