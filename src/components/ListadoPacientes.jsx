import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
   
    return (

        <div className="w-3/4 lg:w-3/5 lg:h-screen lg:overflow-y-scroll pr-5 ">

            <h2 className="text-center py-2 border-b font-bold text-2xl">{pacientes.length ? "Listado Pacientes" : "Empieza agregando un Paciente"}</h2>

          
            <div className="mt-8 ml-5 ">
                <>
                
                     {pacientes.map(paciente =>   
                         <Paciente paciente={paciente} eliminarPaciente={eliminarPaciente} setPaciente={setPaciente} key={paciente.id} /> 
                        
                    ) }
       
               </>
            </div>

        </div>
    )
}

export default ListadoPacientes