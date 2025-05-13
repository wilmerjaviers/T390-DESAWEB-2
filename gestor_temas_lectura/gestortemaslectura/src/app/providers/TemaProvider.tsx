import { Tema } from "../types/Tema";
import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";

export interface TemaProviderProps {
  children: ReactNode;
}

export interface TemaContextType {
  temas: Tema[];
  temasInteresantes: Tema[];
  toggleInteresante: (id: number) => void;
}

const defaultContextValue: TemaContextType = {
  temas: [],
  temasInteresantes: [],
  toggleInteresante: () => {}
};

const TemaContext = createContext<TemaContextType>(defaultContextValue);

export default function TemaProvider({ children }: TemaProviderProps) {
  const [temas, setTemas] = useState<Tema[]>([]);
  
  useEffect(() => {
    const temasPorDefecto: Tema[] = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      titulo: `Tema ${i + 1}`,
      interesante: false
    }));
    setTemas(temasPorDefecto);
  }, []);

  const toggleInteresante = useCallback((id: number) => {
    setTemas(temasPrevios => 
      temasPrevios.map(tema => 
        tema.id === id ? { ...tema, interesante: !tema.interesante } : tema
      )
    );
  }, []);

  const temasInteresantes = useMemo(() => {
    return temas.filter(tema => tema.interesante);
  }, [temas]);

  const contextValue = useMemo<TemaContextType>(() => ({
    temas,
    temasInteresantes,
    toggleInteresante
  }), [temas, temasInteresantes, toggleInteresante]);

  return (
    <TemaContext.Provider value={contextValue}>
      {children}
    </TemaContext.Provider>
  );
}

export const useTema = (): TemaContextType => {
  const context = useContext(TemaContext);
  
  if (context === undefined) {
    throw new Error('useTema debe ser usado dentro de un TemaProvider');
  }
  
  return context;
}
