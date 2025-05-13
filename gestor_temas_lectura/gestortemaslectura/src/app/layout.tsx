'use client'

import { Suspense } from "react";
import TemaProvider from "../app/providers/TemaProvider";
import '../styles/globals.css';
import BootstrapClient from "../app/components/BootstrapClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <BootstrapClient />
      </head>
      <body>
        <TemaProvider>
          <Suspense fallback={<div>Cargando...</div>}>
            {children}
          </Suspense>
        </TemaProvider>
      </body>
    </html>
  );
}