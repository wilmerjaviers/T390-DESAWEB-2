'use client'
import { cantidadProductosMarcaEstado } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, ArcElement);

export default function page() {
    const [charData, setCharData] = useState<{
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            backgroundColor: string[]
        }[]
    }>({
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: []
            }
        ]
    });

    useEffect(() => {
        cantidadProductosMarcaEstado()
            .then(data => {
                const dataLabels = data.map((item: any) => `${item.BRAND_CODE}-${item.STATUS}`);
                const dataCantidad = data.map((item: any) => parseInt(item.Total_productos));

                setCharData({
                    labels: dataLabels,
                    datasets: [{
                        label: 'Cantidad de Productos por Marca y Estado',
                        data: dataCantidad,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 205, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(199, 199, 199, 0.6)',
                            'rgba(83, 102, 255, 0.6)'
                        ]
                    }]
                })
            })
            .catch((error) => console.log('Ocurrio un error'))
    }, []);

    return (
        <div>
            <PolarArea data={charData}></PolarArea>
        </div>
    )
}