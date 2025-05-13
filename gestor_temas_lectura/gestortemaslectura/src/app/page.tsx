'use client'

import Link from 'next/link';
import { useTema } from '../app/providers/TemaProvider';

export default function HomePage() {
  const { temas, toggleInteresante } = useTema();

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h1 className="text-center mb-4">Pantalla Principal</h1>
        
        <div className="list-group mb-4">
          {temas.map(tema => (
            <div key={tema.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className={`tema-titulo ${tema.interesante ? 'bg-warning p-2' : ''}`}>
                {tema.titulo}
              </div>
              <button 
                className={`btn ${tema.interesante ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => toggleInteresante(tema.id)}
              >
                Interesante
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/interesantes" className="btn btn-info">
            Visualizar temas interesantes
          </Link>
        </div>
      </div>
    </div>
  );
}