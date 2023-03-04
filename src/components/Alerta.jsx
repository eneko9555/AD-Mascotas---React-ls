

const Alerta = ({ alerta, setAlerta }) => {
  const { msg, error } = alerta

  
    setTimeout(() => {
      setAlerta({})
    }, 2500);
      
  

  return (
    <div className={`${error ? "bg-red-600" : "bg-green-600"} p-3  w-full rounded-md text-center alerta`}>
       <p >{msg} </p>
    </div>
  )
}

export default Alerta