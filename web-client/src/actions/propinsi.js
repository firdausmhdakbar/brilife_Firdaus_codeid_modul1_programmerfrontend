import {
    SAVE_PROPINSI_REQUEST, SAVE_PROPINSI_SUCCESS, SAVE_PROPINSI_FAILURE,
    DELETE_PROPINSI_REQUEST, DELETE_PROPINSI_SUCCESS, DELETE_PROPINSI_FAILURE,
    FIND_PROPINSI_REQUEST, FIND_PROPINSI_SUCCESS, FIND_PROPINSI_FAILURE,
    FIND_PROPINSIS_REQUEST, FIND_PROPINSIS_SUCCESS, FIND_PROPINSIS_FAILURE
} from './constants';
import { commonAxios } from '../utils/apiUtils';
import Swal from 'sweetalert2';

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

export const deleteById = (id) =>
    (dispatch) => {
        dispatch({
            type: DELETE_PROPINSI_REQUEST
        });

        commonAxios.delete(`propinsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(deletePropinsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been deleted',
                })   
            })
            .catch(error => {
                dispatch(deletePropinsiFailure(error));
            });
    };

export const save = ({ id, name } = {}) =>
    (dispatch) => {
        dispatch({
            type: SAVE_PROPINSI_REQUEST
        });

        const request = id ?
            commonAxios.put(`propinsi/${id}`, { id, name }) :
            commonAxios.post('propinsi/', { name });

        request
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(savePropinsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been added',
                })
            })
            .catch(error => {
                dispatch(savePropinsiFailure(error));
                Swal.fire({
                    icon: 'warning',
                    title: 'Warning...',
                    text: 'Please Input First',
                })
            });
    };

export const findById = (id) =>
    (dispatch) => {
        dispatch({
            type: FIND_PROPINSI_REQUEST
        });

        commonAxios.get(`propinsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(findPropinsiSuccess(data));
            })
            .catch(error => {
                dispatch(findPropinsiFailure(error));
            });
    };

export const findAll = ({ search, sort = 'asc', page = 0, size = 10 } = {}) =>
    (dispatch) => {
        dispatch({
            type: FIND_PROPINSIS_REQUEST
        });

        commonAxios.get('propinsi', {
            params: {
                ...search, sort, page, size
            }
        })
            .then(data => sleep(1500, data))
            .then(data => {
                dispatch(findPropinsisSuccess(data));
            })
            .catch(error => {
                dispatch(findPropinsisFailure(error));
            });

    };

function savePropinsiSuccess(data) {
    return {
        type: SAVE_PROPINSI_SUCCESS,
        data: data
    }
};

function savePropinsiFailure(error) {
    return {
        type: SAVE_PROPINSI_FAILURE,
        error: error
    }
};

function deletePropinsiSuccess(data) {
    return {
        type: DELETE_PROPINSI_SUCCESS,
        data: data
    }
};

function deletePropinsiFailure(error) {
    return {
        type: DELETE_PROPINSI_FAILURE,
        error: error
    }
};

function findPropinsiSuccess(data) {
    return {
        type: FIND_PROPINSI_SUCCESS,
        data: data
    }
};

function findPropinsiFailure(error) {
    return {
        type: FIND_PROPINSI_FAILURE,
        error: error
    }
};

function findPropinsisSuccess(data) {
    return {
        type: FIND_PROPINSIS_SUCCESS,
        data: data
    }
};

function findPropinsisFailure(error) {
    return {
        type: FIND_PROPINSIS_FAILURE,
        error: error
    }
};


