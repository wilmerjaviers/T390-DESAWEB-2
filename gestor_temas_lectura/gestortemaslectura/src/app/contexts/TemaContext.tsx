'use client'

import { createContext } from "react";
import { Tema } from "../types/Tema";

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

export const TemaContext = createContext<TemaContextType>(defaultContextValue);
