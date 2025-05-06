
import { useEffect, useState } from 'react'
import './App.css'
import ContadorPalabras from './Components/ContadorPalabras';

function App() {

  //get, set
  const [contador, setContador]= useState<number>(0);


  //incrementa el valor del estado contador
  function sumaContador(){
    setContador(contador+1)
  }


/** 
 * adkjsalkdjaskld
 * daskdjsaldjklsa
 * ajsdhsajkhskjfd
*/
  function restaContador(numeroRestar: number){

    setContador(contador-numeroRestar)

  }


  //Lo puedo utilizar, para determinar cuando el componente ha sido cargado
  useEffect(()=>{
      console.log('componente cargado')
      setContador(10)
  }, []);


  return (  
    <>
     Valor del contador : {contador} <br></br>

     <button onClick={sumaContador}>Suma 1 unidad</button> <br />

     <button onClick={()=>restaContador(2)}>Restar Contador</button>


     <h1>Contador de letras</h1>

     <ContadorPalabras></ContadorPalabras>
    </>
  )
}


export default App
