import { MOSTRAR_PRODUCTOS } from '../actions/types';

//Cada reducer tiene su propio state

const initialState = {
    productos: []
}

export default function(state = initialState, action){
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return{
                ...state,
                productos: action.payload
            }
        default: 
        return state;
    }
}