import {
    SAVE_PEMAKAIKONTRASEPSI_REQUEST, SAVE_PEMAKAIKONTRASEPSI_SUCCESS, SAVE_PEMAKAIKONTRASEPSI_FAILURE,
    DELETE_PEMAKAIKONTRASEPSI_REQUEST, DELETE_PEMAKAIKONTRASEPSI_SUCCESS, DELETE_PEMAKAIKONTRASEPSI_FAILURE,
    FIND_PEMAKAIKONTRASEPSI_REQUEST, FIND_PEMAKAIKONTRASEPSI_SUCCESS, FIND_PEMAKAIKONTRASEPSI_FAILURE,
    FIND_PEMAKAIKONTRASEPSIS_REQUEST, FIND_PEMAKAIKONTRASEPSIS_SUCCESS, FIND_PEMAKAIKONTRASEPSIS_FAILURE
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null }


export function savePemakaiKontrasepsi(state = defaultState, action) {
    switch (action.type) {
        case SAVE_PEMAKAIKONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_PEMAKAIKONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_PEMAKAIKONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}


export function deletePemakaiKontrasepsiById(state = defaultState, action) {
    switch (action.type) {
        case DELETE_PEMAKAIKONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_PEMAKAIKONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_PEMAKAIKONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findPemakaiKontrasepsiById(state = defaultState, action) {
    switch (action.type) {
        case FIND_PEMAKAIKONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_PEMAKAIKONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PEMAKAIKONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findPemakaiKontrasepsis(state = defaultState, action) {
    switch (action.type) {
        case FIND_PEMAKAIKONTRASEPSIS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_PEMAKAIKONTRASEPSIS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PEMAKAIKONTRASEPSIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

