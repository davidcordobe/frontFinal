import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/error';
import Home from './pages/home'
import Productos from './pages/productos'
import Formulario from './pages/formulario'
import Layout from './componentes/layout';
import Footer from './componentes/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/formulario' element={<Formulario />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

