import React from "react";
import Busqueda from "./components/screens/Busqueda"
import Header from "./components/Header/Header";
import Home from "./components/screens/Home/Home";
import Albums from "./components/screens/DetalleAlbum/Albums";
import Cancion from "./components/screens/DetalleCancion/Cancion";
import Songs from "./components/screens/VerTodasCancion/Songs";
import VerTodas from "./components/screens/VerTodasAlbum/VerTodas";
import NoExiste from "./components/screens/NotFound/NoExiste";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/screens/Favoritos/Favoritos";
// import Favoritos from "./components/Favoritos";
//import Cancion from "./components/Canciones/Cancion";
import "./components/styles.css"



import {Route, Switch} from 'react-router-dom';
function App() {
  return (

    <section>
      
      <Header></Header>
      
      <Switch>
        <Route exact path="/" component>
          <Home></Home>
        </Route>
        <Route path ="/Cancion/:id" component={Cancion}/>
        <Route path ="/Favoritos" component={Favoritos}/>
        <Route path="/Albums/:id" component={Albums}/>
        <Route path ="/Songs" component={Songs}/>
        <Route path ="/VerTodas" component={VerTodas}/>
        <Route path ="/Busqueda/:q" component={Busqueda}/>
        <Route component={NoExiste}></Route>
      </Switch>
      
        <Footer></Footer>
    </section>
  );
}



export default App;