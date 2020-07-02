import {
    SAVE_KONTRASEPSI_REQUEST, SAVE_KONTRASEPSI_SUCCESS, SAVE_KONTRASEPSI_FAILURE,
    DELETE_KONTRASEPSI_REQUEST, DELETE_KONTRASEPSI_SUCCESS, DELETE_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSI_REQUEST, FIND_KONTRASEPSI_SUCCESS, FIND_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSIS_REQUEST, FIND_KONTRASEPSIS_SUCCESS, FIND_KONTRASEPSIS_FAILURE
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null }

export function saveKontrasepsi(state = defaultState, action) {
    switch (action.type) {
        case SAVE_KONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_KONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_KONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}


export function deleteKontrasepsiById(state = defaultState, action) {
    switch (action.type) {
        case DELETE_KONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_KONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_KONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findKontrasepsiById(state = defaultState, action) {
    switch (action.type) {
        case FIND_KONTRASEPSI_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_KONTRASEPSI_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_KONTRASEPSI_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findKontrasepsis(state = defaultState, action) {
    switch (action.type) {
        case FIND_KONTRASEPSIS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_KONTRASEPSIS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_KONTRASEPSIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

