import  {apiUrl} from './constants'

export async function getVisitas() {
try { 
    const response = await fetch(`${apiUrl}/visitas/all`)
    const data = await response.json()       
        return data
} catch(error) {
    console.error("Error al consumir la api",  error );
    } 
}
