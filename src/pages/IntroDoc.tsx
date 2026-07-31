import React from "react";
import { Sliders, Info, Terminal, BookOpen } from "lucide-react";
import CopyButton from "../components/CopyButton";
import DocHeader from "../components/DocHeader";
import { Kbd } from "@vectorial-ia/via-ui";

export function IntroDoc() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <DocHeader
        category="Guía"
        title="Documentación del Sistema"
        description="Librería de componentes UI premium con diseño minimalista, tipografía uppercase estructurada y micro-interacciones de alta fidelidad."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
          <h3 className="text-sm font-bold flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <Sliders size={16} /> Estilos Inline Portables
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Nuestros componentes encapsulan estilos con CSS directo en React (`CSSProperties`) asegurando portabilidad e independencia total de frameworks de utilidades o cargadores externos.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
          <h3 className="text-sm font-bold flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <Info size={16} /> Micro-interacciones
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Efectos de hover suaves, estados de carga nativos y transiciones elegantes integradas de forma reactiva y directa en cada componente.
          </p>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      {/* Shortcuts Guide */}
      <div className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-950/40">
        <h3 className="text-sm font-bold flex items-center gap-2">
          <BookOpen size={16} /> Atajos del Playground
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Usa los atajos de teclado globales para navegar rápidamente por la documentación en este entorno:
        </p>
        <div className="flex flex-col gap-2.5 pt-2 max-w-md">
          <div className="flex justify-between items-center text-xs border-b border-gray-100 dark:border-gray-900 pb-2">
            <span className="text-gray-500 font-medium">Abrir paleta de comandos / Buscar</span>
            <div className="flex items-center gap-1">
              <Kbd size="sm">Ctrl</Kbd>
              <span className="text-gray-400 text-[9px]">+</span>
              <Kbd size="sm">K</Kbd>
              <span className="text-gray-400 text-xs px-1">o</span>
              <Kbd size="sm">/</Kbd>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-gray-100 dark:border-gray-900 pb-2">
            <span className="text-gray-500 font-medium">Navegar por resultados</span>
            <div className="flex items-center gap-1">
              <Kbd size="sm">↑</Kbd>
              <Kbd size="sm">↓</Kbd>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500 font-medium">Ir al componente</span>
            <Kbd size="sm">Enter ↵</Kbd>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Instalación Básica</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Instala la dependencia de componentes de Vectorial UI en tu proyecto React.
        </p>
        <div className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/60 font-mono text-xs p-4 flex justify-between items-center">
          <span className="text-primary-600 dark:text-primary-400 font-bold">npm install @vectorial-ia/via-ui</span>
          <CopyButton text="npm install @vectorial-ia/via-ui" />
        </div>
      </div>
    </div>
  );
}

export default IntroDoc;
