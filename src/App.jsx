import PWABadge from './PWABadge.jsx'
import './App.css'
import { Formulario } from './components/formulario.jsx'
import { Resultado } from './components/Resultado.jsx'

function App() {

  return (
    <>
      <Formulario onSubmit={(data) => console.log(data)} />
      <Resultado />
      <PWABadge />
    </>
  )
}

export default App
