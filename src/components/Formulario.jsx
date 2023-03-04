import { useState, useEffect } from "react"

import Alerta from "./Alerta"

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
   

    const [alerta, setAlerta] = useState({})
    

    useEffect(() => {
        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

            
        }

    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([nombre, propietario, email, fecha, sintomas].includes("")){
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return
        }

        // Agregando el paciente
        const pacienteObj = {nombre, propietario, email, fecha, sintomas}


        if(paciente.id) {
            // Editar 
            pacienteObj.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? 
                pacienteObj : pacienteState )

                setPacientes(pacientesActualizados)

                setPaciente({})
        }else {
            pacienteObj.id = generarId()
            setPacientes([...pacientes , pacienteObj ])
            
        }

       

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')


        setAlerta({
            msg:"Guardado Correctamente",
            error: false
        })
   
    }


    const {msg} = alerta

    return (
        <>
            <div className="w-3/4 lg:w-2/5">
                <h2 className="text-center py-2 border-b font-bold text-2xl ">Añadir Pacientes</h2>

                <form className="mt-5"
                    onSubmit={handleSubmit}
                >
                    {msg && <Alerta 
                        alerta={alerta}
                        setAlerta={setAlerta}
                    />}

                    <div className="mt-5">
                        <label  htmlFor="nombre">Nombre Mascota</label>
                        <input type="text"
                            id="nombre"
                            className=" w-full mt-2 p-2 rounded-md text-black" 
                            placeholder="Nombre de la mascota" 
                            value={  nombre}
                            onChange={e => setNombre(e.target.value)}   
                        />
                    </div>
                   
                    <div className="mt-5">
                        <label  htmlFor="propietario">Nombre Propietario</label>
                        <input type="text"
                            id="propietario"
                            className=" w-full mt-2 p-2 rounded-md text-black" 
                            placeholder="Nombre del propietario"  
                            value={ propietario} 
                            onChange={e => setPropietario(e.target.value)}    
                        />
                    </div>

                    <div className="mt-5">
                        <label  htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            className=" w-full mt-2 p-2 rounded-md text-black" 
                            placeholder="Email" 
                            value={ email}
                            onChange={e => setEmail(e.target.value)}     
                        />
                    </div>

                    <div className="mt-5">
                        <label  htmlFor="fecha">Fecha de Ingreso</label>
                        <input type="date"
                            id="fecha"
                            className=" w-full mt-2 p-2 rounded-md text-black" 
                            value={fecha}
                            onChange={e => setFecha(e.target.value)}  
                           
                        />
                    </div>

                    <div className="mt-5">
                        <label  htmlFor="sintomas">Sintomas</label>
                        <textarea type="text"
                            id="sintomas"
                            className=" w-full mt-2 p-2 rounded-md text-black" 
                            placeholder="Sintomas de la mascota"    
                            value={ sintomas}
                            onChange={e => setSintomas(e.target.value)}  
                        />
                    </div>

                    <input type="submit"
                        value={paciente.id ? "Guardar paciente" : "Agregar paciente"}
                            className="bg-gray-400 w-full mt-5 p-3 text-xl hover:bg-gray-500 cursor-pointer transition-all rounded-md font-bold tracking-wider uppercase shadow-gray-800 shadow-lg "
                        
                    />

                </form>
                
            </div>

            
                    
            
            

        </>

    )
}

export default Formulario