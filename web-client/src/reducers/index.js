import { combineReducers } from 'redux';
import { savePropinsi, deletePropinsiById, findPropinsiById, findPropinsis } from './propinsis';
import { saveKontrasepsi, deleteKontrasepsiById, findKontrasepsiById, findKontrasepsis } from './kontrasepsis';
import { savePemakaiKontrasepsi, deletePemakaiKontrasepsiById, findPemakaiKontrasepsiById, findPemakaiKontrasepsis, summaryPemakaiKontrasepsis } from './pemakaikontrasepsis';


export default combineReducers({
    savePropinsi,
    deletePropinsiById,
    findPropinsiById,
    findPropinsis,
    saveKontrasepsi,
    deleteKontrasepsiById,
    findKontrasepsiById,
    findKontrasepsis,
    savePemakaiKontrasepsi,
    deletePemakaiKontrasepsiById,
    findPemakaiKontrasepsiById,
    findPemakaiKontrasepsis,
    summaryPemakaiKontrasepsis,

});