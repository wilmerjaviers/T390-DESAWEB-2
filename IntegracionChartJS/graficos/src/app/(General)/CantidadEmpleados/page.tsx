'use client'
import { conteoPuestoDeptos } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement);


export default function page() {

     const [charData, setCharData] = useState({
          labels: [],
          datasets: [
              {
                  label: '',
                  data: [],
                  borderColor: '',
                  fill:false
              }
          ]
      });

      useEffect(()=>{
          conteoPuestoDeptos()
          .then(data =>{
             const dataLabels = data.map((item: any) => `${item.DEPARTMENT_ID}-${item.JOB_ID}`);
             const dataSalario = data.map((item: any) => parseInt(item.total_empleados));

                setCharData({
                    labels: dataLabels,
                    datasets: [{
                        label: 'Crecimiento Puestos de trabajo por departamento',
                        data: dataSalario,
                        borderColor: 'rgba(158, 103, 20, 0.6)',
                        fill:true
                    }

                    ]
                })
          })
          .catch((error)=> console.log('ocurrio unerror'))
      },[])

  return (
    <div>
      <Line data={charData}>

      </Line>
    </div>
  )
}
