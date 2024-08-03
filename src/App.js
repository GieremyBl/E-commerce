
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { TiendaCategoria } from './Pages/TiendaCategoria';
import { Productos } from './Pages/Productos';
import { Carrito } from './Pages/Carrito';
import { LoginSingup } from './Pages/LoginSingup';
import { Tienda } from './Pages/Tienda';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Tienda/>}/>
          <Route path='/hombres' element={<TiendaCategoria banner={men_banner} categoria = "hombre"/>}/>
          <Route path='/mujeres' element={<TiendaCategoria banner={women_banner} categoria = "mujer"/>}/>
          <Route path='/niños' element={<TiendaCategoria banner={kids_banner} categoria = "niño"/>}/>
          <Route path='/producto' element={<Productos/>}>
            <Route path=':productoId' element={<Productos/>}/>
          </Route>
          <Route path='/carrito' element={<Carrito/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
