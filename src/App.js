import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from "./context/context";
import { useState, useEffect } from "react";
import HeaderInfo from './components/Navbar';
import Home from "./views/Home";
import Carrito from './views/Carrito';
import PizzaInfo from './views/PizzaInfo';

function App() {

  const endpoint = "/pizzas.json";
  const [ pizzasInfo, setPizzasInfo ] = useState([]);
  const getPizzas = () => {
    fetch(endpoint).then(resp => resp.json())
      .then(data => (
        setPizzasInfo(data)
      ));
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const estado = { pizzasInfo }

  return (
    <>
      <Context.Provider value={estado}>
        <BrowserRouter>
          <HeaderInfo />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/pizza/:id' element={<PizzaInfo />} />
            </Routes>

        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;