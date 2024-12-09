import './App.css'
import Cliente from './components/cliente/Cliente'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import AltaCliente from './components/cliente/AltaCliente'
import AltaConexion from './components/conexion/AltaConexion'
import Conexion from './components/conexion/Conexion'
import Visita from './components/visita/Visita'
import AltaVisita from './components/visita/AltaVisita'
import EditarCliente from './components/cliente/EditarCliente'
import EditarConexion from './components/conexion/EditarConexion'
import EditarVisita from './components/visita/EditarVisita'
import Main from './components/Main'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/cliente' element={<Cliente/>}></Route>
        <Route path='/alta-cliente' element={<AltaCliente/>}></Route>
        <Route path='/editar-cliente/:id' element={<EditarCliente/>}></Route>
        <Route path='cliente/conexion/:id' element={<Conexion/>}></Route>
        <Route path='/alta-conexion' element={<AltaConexion/>}></Route>
        <Route path='/editar-conexion' element={<EditarConexion/>}></Route>
        <Route path='/visita' element={<Visita/>}></Route>
        <Route path='/alta-visita' element={<AltaVisita/>}></Route>
        <Route path='/editar-visita' element={<EditarVisita/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
