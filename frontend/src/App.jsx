
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Login/>} />
        <Route path = "registrar" element={<Registrar/>} />

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
