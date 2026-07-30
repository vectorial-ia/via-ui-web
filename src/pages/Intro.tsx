import React from "react";
import { Sliders, Info } from "lucide-react";
import CopyButton from "../components/CopyButton";
import DocHeader from "../components/DocHeader";

export function Intro() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <DocHeader
        title="Documentación del Sistema"
        description="Librería de componentes UI premium con diseño minimalista, tipografía uppercase estructurada y micro-interacciones de alta fidelidad."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3">
          <h3 className="text-sm font-bold flex items-center gap-2 text-primary-600">
            <Sliders size={16} /> Estilos Inline
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Nuestros componentes encapsulan estilos con CSS directo en JavaScript (`React.CSSProperties`) asegurando portabilidad e independencia de frameworks de utilidades.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3">
          <h3 className="text-sm font-bold flex items-center gap-2 text-primary-600">
            <Info size={16} /> Micro-interacciones
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Efectos de hover suaves, estados de carga nativos y transiciones elegantes integradas directamente en cada componente.
          </p>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Instalación Básica</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Instala la dependencia de componentes de Vectorial UI en tu proyecto React.
        </p>
        <div className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 font-mono text-xs p-4 flex justify-between items-center">
          <span className="text-primary-600 font-bold">npm install @vectorial-ia/via-ui</span>
          <CopyButton text="npm install @vectorial-ia/via-ui" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
