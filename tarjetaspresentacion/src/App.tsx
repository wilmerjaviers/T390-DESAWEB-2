import './App.css'
import Persona3Component from './Components/Persona3Component';
import { Persona } from './Modelos/Persona';

function App() {

 
  let listaPersonas: Persona[] = [];
   listaPersonas.push(
    {
      nombre: 'Wilmer Sanchez',
      ocupacion: 'Diseñador UX/UI',
      pais: 'Honduras'
    },
    {
      nombre: 'Javier Sanabria', 
      ocupacion: 'Product Manager',
      pais: 'Honduras'
    },   
    
    {
      nombre: 'Jacobo Nuñez', 
      ocupacion: 'Product Manager',
      pais: 'Brasil'
    }
  );
  
  return (
    <div>
      <header>
        <h1>Tarjetas de Presentación</h1>
        <h1>------------------------------</h1>
      </header>
      <main>
        <div>
        
          {listaPersonas.map((persona, index) => (
            <Persona3Component
              key={index}
              nombre={persona.nombre}
              ocupacion={persona.ocupacion}
              pais={persona.pais}
              
            />
          ))}
          
        </div>
        
      </main>
    </div>
  );
}

export default App;