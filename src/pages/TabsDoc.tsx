import React, { useState } from "react";
import { Tabs, Button } from "via-ui";
import { Globe, User, Settings } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function TabsDoc() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [variant, setVariant] = useState<"pills" | "underline">("underline");
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const tabItems = [
    { id: "tab1", label: "General", icon: <Globe size={14} /> },
    { id: "tab2", label: "Perfil", icon: <User size={14} /> },
    { id: "tab3", label: "Ajustes", icon: <Settings size={14} /> },
    { id: "tab4", label: "Desactivado", disabled: true }
  ];

  const tabsProps: PropItem[] = [
    {
      name: "items",
      type: "TabItem[]",
      description: "Arreglo de pestañas a mostrar. Estructura: { id: string, label: string, icon?: React.ReactNode, disabled?: boolean }."
    },
    {
      name: "activeId",
      type: "string",
      description: "El id de la pestaña actualmente activa."
    },
    {
      name: "onChange",
      type: "(id: string) => void",
      description: "Callback disparado al cambiar de pestaña activa."
    },
    {
      name: "variant",
      type: '"pills" | "underline"',
      defaultVal: '"underline"',
      description: "Tipo de diseño estético del contenedor y pestañas."
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      defaultVal: '"horizontal"',
      description: "Orientación de apilado del menú de pestañas."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Dimensiones generales del texto e iconos."
    }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Variante (Variant)</label>
        <div className="flex gap-2">
          {(["underline", "pills"] as const).map((v) => (
            <Button
              key={v}
              onClick={() => setVariant(v)}
              variant={variant === v ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {v}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Orientación (Orientation)</label>
        <div className="flex gap-2">
          {(["horizontal", "vertical"] as const).map((o) => (
            <Button
              key={o}
              onClick={() => setOrientation(o)}
              variant={orientation === o ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {o}
            </Button>
          ))}
        </div>
      </div>

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
    </>
  );

  const preview = (
    <div className="w-full flex justify-center py-4">
      <Tabs
        items={tabItems}
        activeId={activeTab}
        onChange={(id) => setActiveTab(id)}
        variant={variant}
        orientation={orientation}
        size={size}
      />
    </div>
  );

  const codeString = `import { Tabs } from "via-ui";
import { Globe, User, Settings } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "tab1", label: "General", icon: <Globe size={14} /> },
  { id: "tab2", label: "Perfil", icon: <User size={14} /> },
  { id: "tab3", label: "Ajustes", icon: <Settings size={14} /> },
  { id: "tab4", label: "Desactivado", disabled: true }
];

function Example() {
  const [active, setActive] = useState("tab1");
  return (
    <Tabs
      items={items}
      activeId={active}
      onChange={(id) => setActive(id)}
      variant="${variant}"
      orientation="${orientation}"
      size="${size}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Tabs (Pestañas)"
        description="Agrupador de navegación por pestañas en un panel para organizar contenidos alternando vistas contextuales."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      <PropsTable propsList={tabsProps} />
    </div>
  );
}

export default TabsDoc;
