import React, { useState } from "react";
import { Breadcrumb, Button } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function BreadcrumbDoc() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [navigationLog, setNavigationLog] = useState<string>("");

  const breadcrumbItems = [
    { label: "Inicio", href: "/inicio" },
    { label: "Monitoreo", href: "/monitoreo" },
    { label: "Activos", href: "/activos" },
    { label: "Detalle GPS" } // last active item
  ];

  const breadcrumbProps: PropItem[] = [
    {
      name: "items",
      type: "BreadcrumbItem[]",
      description: "Arreglo de elementos representados. Estructura: { label: string, href?: string }."
    },
    {
      name: "onNavigate",
      type: "(href: string) => void",
      description: "Callback ejecutado al hacer clic sobre una ruta intermedia."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Afecta el tamaño tipográfico de las migas de pan."
    },
    {
      name: "separator",
      type: "React.ReactNode",
      description: "Icono de separación alternativo entre elementos."
    }
  ];

  const handleNavigate = (href: string) => {
    setNavigationLog(`Navegar a: ${href}`);
    setTimeout(() => setNavigationLog(""), 3000);
  };

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Tamaño (Size)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setSize(s)}
              variant={size === s ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>

      {navigationLog && (
        <div className="mt-2 text-xs font-mono font-bold text-primary-600">
          {navigationLog}
        </div>
      )}
    </>
  );

  const preview = (
    <div className="p-4 bg-gray-50 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
      <Breadcrumb
        items={breadcrumbItems}
        size={size}
        onNavigate={handleNavigate}
      />
    </div>
  );

  const codeString = `import { Breadcrumb } from "via-ui";

const items = [
  { label: "Inicio", href: "/inicio" },
  { label: "Monitoreo", href: "/monitoreo" },
  { label: "Activos", href: "/activos" },
  { label: "Detalle GPS" }
];

function Example() {
  return (
    <Breadcrumb
      items={items}
      size="${size}"
      onNavigate={(href) => console.log("Navegar a:", href)}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Breadcrumb (Migas de Pan)"
        description="Trail estructurado de enlaces interactivos con tipografía uppercase para rastrear y navegar jerarquías del sistema."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={breadcrumbProps} />
    </div>
  );
}

export default BreadcrumbDoc;
