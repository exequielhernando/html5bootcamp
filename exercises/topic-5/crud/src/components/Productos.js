import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mostrarProductos } from '../actions/productosActions'
import Producto from './Producto';

class Productos extends Component{
    componentDidMount(){
        this.props.mostrarProductos();
    }

    render(){
        const { productos } = this.props;
        console.log(productos);
        
        return(
            <>
                <h2>Listado de productos</h2>
                <div>
                    <ul>
                        {productos.map(producto => (
                            <Producto
                                key={producto.id}
                                info={producto}
                            />
                        ) )}
                    </ul>
                </div>


            </>
        )
    }
}
//state
const mapStateToProps = state =>({
    productos: state.productos.productos
})
export default connect(mapStateToProps, { mostrarProductos }) (Productos);