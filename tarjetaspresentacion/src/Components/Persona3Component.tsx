import { Persona } from '../Modelos/Persona'

export default function Persona3Component({ nombre, ocupacion, pais }: Persona) {
  return (
 <div>
      <h3 style={{ 
        color: '#0366d6', 
        marginTop: '0',
        marginBottom: '10px',
        fontSize: '18px' 
      }}>Nombre: {nombre}</h3>
      
      <h3 style={{ 
        color: '#586069', 
        marginTop: '0',
        marginBottom: '10px',
        fontSize: '16px',
        fontWeight: 'normal'
      }}>Ocupación: {ocupacion}</h3>
      
      <h3 style={{ 
        color: '#586069', 
        marginTop: '0',
        marginBottom: '15px',
        fontSize: '16px',
        fontWeight: 'normal'
      }}>País: {pais}</h3>
      
      <h4 style={{ 
        borderTop: '1px solid #e1e4e8',
        paddingTop: '10px',
        color: '#6a737d',
        fontSize: '14px',
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: '0'
      }}></h4>
      
    </div>
  )
}