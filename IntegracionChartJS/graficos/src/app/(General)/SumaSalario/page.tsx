'use client'
import { sumaSalarioDepartamento } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {

    const [charData, setCharData] = useState({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: ''
            }
        ]
    });


    useEffect(() => {
        sumaSalarioDepartamento()
            .then(data => {

                const dataLabels = data.map((item: any) => item.DEPARTMENT_ID);
                const dataSalario = data.map((item: any) => parseInt(item.Salario_total));

                setCharData({
                    labels: dataLabels,
                    datasets: [{
                        label: 'Comparacion Salario por Departamento',
                        data: dataSalario,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    }

                    ]
                })

            })
            .catch((error) => console.log('Ocurrio un error'))
    }, []);


    return (
        <div>

            <Bar data={charData}></Bar>
        </div>
    )
}
