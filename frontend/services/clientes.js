import  {apiUrl} from './constants'

export async function deleteCliente(id){
    try {
        const response = await fetch(`${apiUrl}/clientes/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${data.message}`);
        }
    } catch (error) {
        console.error("Error al eliminar al cliente",  error );
    }
}

export async function getClientes() {
    try { 
        const response = await fetch(`${apiUrl}/clientes/all`)
        const data = await response.json()       
            return data
    } catch(error) {
        console.error("Error al consumir la api",  error );
        } 
}
export async function getClienteById(id) {
    try {
        const response = await fetch(`${apiUrl}/clientes/${id}`)
        
        const data = await response.json()       
            return data
    } catch(error) {
        console.error("Error al consumir la api",  error );
        } 
}

export async function addCliente(cliente) {
    try {
        const response = await fetch(`${apiUrl}/clientes`, {
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
