import { combineReducers } from 'redux';
import productosReducers from './productosReducer';

export default combineReducers({
    productos: productosReducers
});