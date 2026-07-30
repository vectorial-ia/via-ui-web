import React from "react";

export interface PropItem {
  name: string;
  type: string;
  defaultVal?: string;
  description: string;
}

interface PropsTableProps {
  propsList: PropItem[];
}

export function PropsTable({ propsList }: PropsTableProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Documentación de Propiedades (API)</h2>
      <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-[10px] uppercase font-bold text-gray-400">
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Predeterminado</th>
              <th className="px-4 py-3">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {propsList.map((item) => (
              <tr key={item.name}>
                <td className="px-4 py-3 font-mono text-primary-600 font-semibold">{item.name}</td>
                <td className="px-4 py-3 font-mono text-gray-500">{item.type}</td>
                <td className="px-4 py-3 font-mono text-gray-500">{item.defaultVal || "-"}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PropsTable;
