import Tabla from './Tabla'

function Cliente() {
    return (
      <div className="max-w-[1400px] mx-auto ">
        <h1 className="text-3xl mt-10 mb-20 text-center font-bold text-white">
          Clientes
        </h1>
        <Tabla />
      </div>
    );
}

export default Cliente