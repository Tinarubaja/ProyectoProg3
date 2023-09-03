import Home from "./components/Canciones/Index";
import Albums from "./components/Canciones/Albums";
import Artist from "./components/Canciones/Artist";
import Generos from "./components/Canciones/Generos";
import Playlist from "./components/Canciones/Playlist";
import Songs from "./components/Canciones/Songs";
import VerTodas from "./components/Canciones/VerTodas";
import {Link, Route} from 'react-router-dom'; 15.1 (gzipped:5.9k)
function App() {
  return (
    <section>
      <Link to="/">Home</Link><br/>
      <Link to="/Artist">Artist</Link><br/>
      <Link to="/Generos">Gneros</Link><br/>
      <Link to="/Playlist">Playlist</Link><br/>
      <Link to="/Songs">Songs</Link><br/>
      <Link to="/VerTodas">Ver Todas</Link><br/>
      
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path ="/Artist" component={Artist}/>
      <Route path ="/Generos" component={Generos}/>
      <Route path ="/Playlist" component={Playlist}/>
      <Route path ="/Songs" component={Songs}/>
      <Route path ="/VerTodas" component={VerTodas}/>
      
    </section>
  );
}



export default App;