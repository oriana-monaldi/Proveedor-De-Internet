import  {apiUrl} from './constants'

export async function getConexiones() {
try { 
    const response = await fetch(`${apiUrl}/conexiones/all`)
    const data = await response.json()     
    console.log(data)  
        return data
} catch(error) {
    console.error("Error al consumir la api",  error );
    } 
}
