import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <Link href='/SumaSalario'>Ir a la grafica salario</Link>  
        <Link href='/CantidadEmpleados'>Ir a la grafica Lineal de empleado-Deparamento </Link>  

          <Link href='/SumaValoresPorCategoria'>Ir a la grafica de Valores por Categoria </Link>  
            <Link href='/ProductosPorMarca'>Ir a la grafica de cantidad de productos por marca y estado</Link>  
              <Link href='/PromPrecioPorSegmento'>Ir a la grafica de Promedio de Precio por Segmento </Link>  
      </main>

    </div>
  );
}
