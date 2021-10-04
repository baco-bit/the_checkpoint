import React,{useContext, useState} from 'react'
import UserContext from '../UserContext/UserContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import IngresarNuevoProducto from "../Vistas/Catalogo/IngresarNuevoProducto";
import ModificarProducto from "../Vistas/Catalogo/Modificar_NuevoProducto";
import Catalogo_PaginaPrincipal from "../Vistas/Catalogo/Catalogo_PaginaPrincipal";
import ModificarUsuario from '../Componentes/ModificarUsuario';
import Login from '../Login';
import Ventas from '../Vista_Ventas/Ventas';
import CrearUsuario from '../Componentes/CrearUsuario';

const ContenidoGeneral = () => {
    const {user, isDesplegado}= useContext(UserContext);
    const activo = {
        paddingLeft: '14rem',
        transition: "all ease .5s"
    };
    
  const no_activo = {

    paddingLeft: '6rem',
    transition: "all ease .5s"
  };

  return (
    <BrowserRouter>
        <Switch>
          <div className="container-fluid" style={!isDesplegado ? activo : no_activo}>
            {/* <Route exact path="/" component={Login} /> */}

            {/*<Route exact path="/Inicio"component={Inicio}/>
            <Route exact path="/Catalogo_PaginaPrincipal"component={Catalogo_PaginaPrincipal}/>
            <Route exact path="/Catalogo_IngresarNuevoProducto" > <IngresarNuevoProducto/> </Route>
            <Route exact path="/Catalogo_ModificarProducto" > <ModificarProducto/> </Route>
  <Route exact path="/Ventas"component={Ventas}/>*/}


            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/catalogo_paginaprincipal" component={Catalogo_PaginaPrincipal} />
            <Route exact path="/catalogo_ingresarnuevoproducto" component={IngresarNuevoProducto} /> 
            <Route exact path="/catalogo_modificarproducto" component={ModificarProducto} />
            <Route exact path="/ventas" component={Ventas} />
            <Route exact path="/usuario_crearusuario" component={CrearUsuario}/>
            <Route exact path="/modificarusuario" component={ModificarUsuario} /> 
            {/* <Route exact path="/estadisticas" component={Estadisticas} /> */}
            <Route exact path="/" component={()=> <Login authorized={false} />} /> 
          </div>
        </Switch>
    </BrowserRouter>


                

    )
}

export default ContenidoGeneral
