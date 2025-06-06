'use client'
import { promedioPrecioSegmento } from '@/app/Servicios/api';
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
        promedioPrecioSegmento()
            .then(data => {
                const dataLabels = data.map((item: any) => item.PRODUCT_SEGMENT_CODE);
                const dataPrecios = data.map((item: any) => parseFloat(item.Precio_promedio));

                setCharData({
                    labels: dataLabels,
                    datasets: [{
                        label: 'Precio Promedio por Segmento',
                        data: dataPrecios,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    }]
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