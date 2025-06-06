'use client'
import { sumaValorCategoria } from '@/app/Servicios/api';
import React, { useEffect, useState } from 'react'
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement);

export default function page() {
    const [charData, setCharData] = useState<any>({
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: []
            }
        ]
    });

    useEffect(() => {
        sumaValorCategoria()
            .then(data => {
                const bubbleData = data.map((item: any, index: number) => ({
                    x: index + 1,
                    y: parseFloat(item.Valor_total),
                    r: parseFloat(item.Valor_total) / 1000 // Radio basado en el valor
                }));

                setCharData({
                    datasets: [{
                        label: 'Valor Total por Categoría',
                        data: bubbleData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 205, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ]
                    }]
                })
            })
            .catch((error) => console.log('Ocurrio un error'))
    }, []);

    return (
        <div>
            <Bubble data={charData}></Bubble>
        </div>
    )
}