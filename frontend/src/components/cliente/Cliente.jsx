import Tabla from './Tabla'
import { IoAddCircle } from "react-icons/io5";
import  {Link} from 'react-router-dom'

function Cliente() {
    return (
      <div className="max-w-[1400px] mx-auto ">
        <h1 className="text-3xl mt-10 mb-20 text-center font-bold text-white">
          Clientes
        </h1>
        <div className="flex flex-row justify-between m-6  ">
          <Link to="/alta-cliente">
            <div style={{ position: "relative", width: "100%", left:"1300px" }}>
              <IoAddCircle className="text-white add-circle-button" size={45} />
            </div>
          </Link>
        </div>
        <Tabla />
      </div>
    );
}

export default Cliente