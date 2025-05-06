import React, { useEffect, useState } from 'react'

export default function ContadorPalabras() {

 const [text, setTexto] =useState<string | null>(null);
 const [contadorLetras, setContadorLetras] = useState <number> (0)
 const [textColor, setTextColor] = useState<string>('black');
  


 useEffect(()=>{

    let contador: number = text?.length;
    setContadorLetras(contador);


    if (contador < 10) {
      setTextColor('yellow');
    } else if (contador >= 10 && contador < 50) {
      setTextColor('green');
    } else if (contador >= 50) {
      setTextColor('red');
    }
    
 },[text])

 function manejarTexto(e: any){
    setTexto(e.target.value)
 }

  return (
   <div>
   <textarea 
     name="" 
     id="" 
     rows={15} 
     cols={30} 
     onChange={manejarTexto}
   >
   </textarea>

   <h2 style={{ color: textColor }}>La cantidad de letras es: {contadorLetras}
   </h2>
</div>
)
}
