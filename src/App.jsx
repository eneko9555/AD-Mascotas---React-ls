import { useState, useEffect } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || [])
  const [paciente, setPaciente] = useState({})
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente = id => {
    const nuevosP = pacientes.filter(pacienteState => pacienteState.id !== id)
    setPacientes(nuevosP)
  }


  return (
    <>
      <Header />

      <div className="flex flex-col items-center lg:items-start lg:flex lg:flex-row justify-between text-xl mt-20 lg:w-10/12 lg:mx-auto  gap-16">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

        />

        <ListadoPacientes
          pacientes={pacientes}
          setPacientes = {setPacientes}
          setPaciente = {setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
        
        />
      </div>

    </>
  )
}

export default App
