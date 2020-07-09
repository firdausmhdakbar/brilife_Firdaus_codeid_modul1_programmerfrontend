import {
    SAVE_PEMAKAIKONTRASEPSI_REQUEST, SAVE_PEMAKAIKONTRASEPSI_SUCCESS, SAVE_PEMAKAIKONTRASEPSI_FAILURE,
    DELETE_PEMAKAIKONTRASEPSI_REQUEST, DELETE_PEMAKAIKONTRASEPSI_SUCCESS, DELETE_PEMAKAIKONTRASEPSI_FAILURE,
    FIND_PEMAKAIKONTRASEPSI_REQUEST, FIND_PEMAKAIKONTRASEPSI_SUCCESS, FIND_PEMAKAIKONTRASEPSI_FAILURE,
    FIND_PEMAKAIKONTRASEPSIS_REQUEST, FIND_PEMAKAIKONTRASEPSIS_SUCCESS, FIND_PEMAKAIKONTRASEPSIS_FAILURE
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
            type: DELETE_PEMAKAIKONTRASEPSI_REQUEST
        });

        commonAxios.delete(`pemakaikontrasepsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(deletePemakaiKontrasepsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been deleted',
                })
            })
            .catch(error => {
                dispatch(deletePemakaiKontrasepsiFailure(error));
            });
    };


export const save = (model) =>
    (dispatch) => {
        dispatch({
            type: SAVE_PEMAKAIKONTRASEPSI_REQUEST
        });

        const request = model.id
            ? commonAxios.put(`pemakaikontrasepsi/${model.id}`,
                {
                    "propinsi": { "id": model.propinsi?.id },
                    "jumlahPemakai": model.jumlahPemakai,
                    "kontrasepsi": { "id": model.kontrasepsi?.id }
                })
            : commonAxios.post(`pemakaikontrasepsi`,
                {
                    "propinsi": { "id": model.propinsi?.id },
                    "jumlahPemakai": model.jumlahPemakai,
                    "kontrasepsi": { "id": model.kontrasepsi?.id }
                });
        request
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(savePemakaiKontrasepsiSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been added',
                })
            })
            .catch(error => {
                dispatch(savePemakaiKontrasepsiFailure(error));
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
            type: FIND_PEMAKAIKONTRASEPSI_REQUEST
        });

        commonAxios.get(`pemakaikontrasepsi/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(findPemakaiKontrasepsiSuccess(data));
            })
            .catch(error => {
                dispatch(findPemakaiKontrasepsiFailure(error));
            });
    };

export const findAll = ({ sort = 'asc', page = 0, size = 15 } = {}) =>
    (dispatch) => {
        dispatch({
            type: FIND_PEMAKAIKONTRASEPSIS_REQUEST
        });

        commonAxios.get('pemakaikontrasepsi', {
            params: {
                sort, page, size
            }
        })
            .then(data => sleep(1500, data))
            .then(data => {
                dispatch(findPemakaiKontrasepsisSuccess(data));
            })
            .catch(error => {
                dispatch(findPemakaiKontrasepsisFailure(error));
            });
    };



function savePemakaiKontrasepsiSuccess(data) {
    return {
        type: SAVE_PEMAKAIKONTRASEPSI_SUCCESS,
        data: data
    }
};

function savePemakaiKontrasepsiFailure(error) {
    return {
        type: SAVE_PEMAKAIKONTRASEPSI_FAILURE,
        error: error
    }
};


function deletePemakaiKontrasepsiSuccess(data) {
    return {
        type: DELETE_PEMAKAIKONTRASEPSI_SUCCESS,
        data: data
    }
};

function deletePemakaiKontrasepsiFailure(error) {
    return {
        type: DELETE_PEMAKAIKONTRASEPSI_FAILURE,
        error: error
    }
};

function findPemakaiKontrasepsiSuccess(data) {
    return {
        type: FIND_PEMAKAIKONTRASEPSI_SUCCESS,
        data: data
    }
};

function findPemakaiKontrasepsiFailure(error) {
    return {
        type: FIND_PEMAKAIKONTRASEPSI_FAILURE,
        error: error
    }
};

function findPemakaiKontrasepsisSuccess(data) {
    return {
        type: FIND_PEMAKAIKONTRASEPSIS_SUCCESS,
        data: data
    }
};

function findPemakaiKontrasepsisFailure(error) {
    return {
        type: FIND_PEMAKAIKONTRASEPSIS_FAILURE,
        error: error
    }
};


