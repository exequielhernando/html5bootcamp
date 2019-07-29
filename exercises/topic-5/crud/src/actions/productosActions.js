import { MOSTRAR_PRODUCTOS } from './types';

import axios from 'axios';

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}