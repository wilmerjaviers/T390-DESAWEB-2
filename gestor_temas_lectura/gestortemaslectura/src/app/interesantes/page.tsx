'use client'

import Link from 'next/link';
import { useTema } from '../../app/providers/TemaProvider';

export default function TemasInteresantesPage() {
  const { temasInteresantes } = useTema();

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h1 className="text-center mb-4">Pantalla Interesantes</h1>
        
        <div className="list-group mb-4">
          {temasInteresantes.length > 0 ? (
            temasInteresantes.map(tema => (
              <div key={tema.id} className="list-group-item mb-2">
                <div className="bg-warning" style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: '4px',
                  width: '100%'
                }}>
                  {tema.titulo}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-3">
              No hay temas marcados como interesantes.
            </div>
          )}
        </div>

        <div className="text-center">
          <Link href="/" className="btn btn-info">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}