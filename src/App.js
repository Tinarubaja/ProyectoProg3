import React from "react";
import Busqueda from "./components/Canciones/Busqueda";
import Header from "./components/Canciones/Header";
import Home from "./components/Canciones/Home";
import Albums from "./components/Canciones/Albums";
import Artist from "./components/Canciones/Artist";
import Generos from "./components/Canciones/Generos";
import Playlist from "./components/Canciones/Playlist";
import Songs from "./components/Canciones/Songs";
import VerTodas from "./components/Canciones/VerTodas";
import NoExiste from "./components/Canciones/NoExiste";
import Footer from "./components/Canciones/Footer";
//import Cancion from "./components/Canciones/Cancion";
import "./components/styles.css";



import {Route, Switch} from 'react-router-dom';
function App() {
  return (

    <section>
      
      <Header></Header>
      
      <Switch>
        <Route exact path="/" component>
          <Home></Home>
        </Route>
        <Route path ="/Artist/:id" component={Artist}/>
        
        <Route path="/Albums" component={Albums}/>
        <Route path ="/Generos" component={Generos}/>
        <Route path ="/Playlist" component={Playlist}/>
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