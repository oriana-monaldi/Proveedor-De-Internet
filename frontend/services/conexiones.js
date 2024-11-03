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

export async function addConexion(cliente) {
    try {
        const response = await fetch(`${apiUrl}/conexiones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        const data = await response.json()       


        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${data.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

