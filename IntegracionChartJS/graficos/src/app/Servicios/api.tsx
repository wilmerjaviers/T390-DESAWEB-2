import axios from 'axios';

const URL_API="http://localhost:5000";

export const sumaSalarioDepartamento= async ()=>{
    const response= await axios.get(`${URL_API}/suma-salario-departamento`);
    return response.data;
}

export const conteoPuestoDeptos= async ()=>{
    const response= await axios.get(`${URL_API}/cantidad-empleado-puesto`);
    return response.data;
}

export const sumaValorCategoria= async ()=>{
    const response= await axios.get(`${URL_API}/suma-valor-categoria`);
    return response.data;
}

export const cantidadProductosMarcaEstado= async ()=>{
    const response= await axios.get(`${URL_API}/cantidad-productos-marca-estado`);
    return response.data;
}

export const promedioPrecioSegmento= async ()=>{
    const response= await axios.get(`${URL_API}/promedio-precio-segmento`);
    return response.data;
}