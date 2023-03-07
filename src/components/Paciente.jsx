import { useState } from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  return (

    <div className='bg-gray-400 text-white p-3 w-full rounded-md shadow-gray-800 shadow-lg hover:scale-105 ease-in duration-300 transition-all mb-10 '>

      <p className='font-bold'>Nombre:
        <span className='font-normal'>{paciente.nombre}</span>
      </p>

      <p className='mt-1 font-bold'>Propietario:
        <span className='font-normal'>{paciente.propietario}</span>
      </p>

      <p className='mt-1 font-bold'>Email:
        <span className='font-normal'>{paciente.email}</span>
      </p>

      <p className='mt-1 font-bold'>Fecha:
        <span className='font-normal'>{paciente.fecha}</span>
      </p>

      <p className='mt-1 font-bold'>Sintomas:
        <span className='font-normal'>{paciente.sintomas}</span>
      </p>

      <div className='flex flex-row justify-around mt-5 gap-5'>

        <button
          className=' p-2  bg-green-600 rounded-md shadow-md w-1/2 hover:shadow-2xl hover:-translate-y-2
                                    transition-all'
          onClick={() => setPaciente(paciente)}
        >Editar
        </button>

        <button
          className=' p-2 bg-red-600 rounded-md shadow-md w-1/2 hover:shadow-2xl hover:-translate-y-2
                                    transition-all'
          onClick={() => eliminarPaciente(paciente.id)}
        >Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
