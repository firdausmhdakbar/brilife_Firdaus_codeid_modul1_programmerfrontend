import {
    SAVE_KONTRASEPSI_REQUEST, SAVE_KONTRASEPSI_SUCCESS, SAVE_KONTRASEPSI_FAILURE,
    DELETE_KONTRASEPSI_REQUEST, DELETE_KONTRASEPSI_SUCCESS, DELETE_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSI_REQUEST, FIND_KONTRASEPSI_SUCCESS, FIND_KONTRASEPSI_FAILURE,
    FIND_KONTRASEPSIS_REQUEST, FIND_KONTRASEPSIS_SUCCESS, FIND_KONTRASEPSIS_FAILURE
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
            type: DELETE_KONTRASEPSI_REQUEST
        });

        commonAxios.delete(`kontrasepsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(deleteKontrasepsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been deleted',
                })
            })
            .catch(error => {
                dispatch(deleteKontrasepsiFailure(error));
            });
    };

export const save = ({ id, name} = {}) =>
    (dispatch) => {
        dispatch({
            type: SAVE_KONTRASEPSI_REQUEST
        });

        const request = id ?
            commonAxios.put(`kontrasepsi/${id}`, { id, name }) :
            commonAxios.post('kontrasepsi/', { name});

        request
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(saveKontrasepsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been added',
                })
            })
            .catch(error => {
                dispatch(saveKontrasepsiFailure(error));
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
            type: FIND_KONTRASEPSI_REQUEST
        });

        commonAxios.get(`kontrasepsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(findKontrasepsiSuccess(data));
            })
            .catch(error => {
                dispatch(findKontrasepsiFailure(error));
            });
    };

export const findAll = ({ search, sort = 'asc', page = 0, size = 10 } = {}) =>
    (dispatch) => {
        dispatch({
            type: FIND_KONTRASEPSIS_REQUEST
        });

        commonAxios.get('kontrasepsi', {
            params: {
                ...search, sort, page, size
            }
        })
            .then(data => sleep(1500, data))
            .then(data => {
                dispatch(findKontrasepsisSuccess(data));
            })
            .catch(error => {
                dispatch(findKontrasepsisFailure(error));
            });
    };

function saveKontrasepsiSuccess(data) {
    return {
        type: SAVE_KONTRASEPSI_SUCCESS,
        data: data
    }
};

function saveKontrasepsiFailure(error) {
    return {
        type: SAVE_KONTRASEPSI_FAILURE,
        error: error
    }
};


function deleteKontrasepsiSuccess(data) {
    return {
        type: DELETE_KONTRASEPSI_SUCCESS,
        data: data
    }
};

function deleteKontrasepsiFailure(error) {
    return {
        type: DELETE_KONTRASEPSI_FAILURE,
        error: error
    }
};

function findKontrasepsiSuccess(data) {
    return {
        type: FIND_KONTRASEPSI_SUCCESS,
        data: data
    }
};

function findKontrasepsiFailure(error) {
    return {
        type: FIND_KONTRASEPSI_FAILURE,
        error: error
    }
};

function findKontrasepsisSuccess(data) {
    return {
        type: FIND_KONTRASEPSIS_SUCCESS,
        data: data
    }
};

function findKontrasepsisFailure(error) {
    return {
        type: FIND_KONTRASEPSIS_FAILURE,
        error: error
    }
};


