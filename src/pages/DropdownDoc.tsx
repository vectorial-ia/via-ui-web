import React, { useState } from "react";
import { Dropdown, Button } from "@vectorial-ia/via-ui";
import { Settings, User, LogOut, ChevronDown } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function DropdownDoc() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [align, setAlign] = useState<"left" | "right">("right");
  const [selectedAction, setSelectedAction] = useState("");

  const dropdownProps: PropItem[] = [
    {
      name: "trigger",
      type: "React.ReactNode",
      description: "El elemento de activación (normalmente un botón) sobre el cual se hace clic para abrir el menú."
    },
    {
      name: "items",
      type: "DropdownItem[]",
      description: "Arreglo de opciones del menú dropdown. Estructura: { id: string, label: string, icon?: React.ReactNode, onClick?: () => void }."
    },
    {
      name: "align",
      type: '"left" | "right"',
      defaultVal: '"right"',
      description: "Alineación horizontal del panel desplegable respecto al botón disparador."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Afecta las dimensiones internas de los items y fuentes de texto."
    }
  ];

  const handleItemClick = (label: string) => {
    setSelectedAction(`Acción disparada: ${label}`);
    setTimeout(() => setSelectedAction(""), 3000);
  };

  const menuItems = [
    { id: "profile", label: "Mi Perfil", icon: <User size={13} />, onClick: () => handleItemClick("Mi Perfil") },
    { id: "settings", label: "Ajustes", icon: <Settings size={13} />, onClick: () => handleItemClick("Ajustes") },
    { id: "logout", label: "Cerrar Sesión", icon: <LogOut size={13} />, onClick: () => handleItemClick("Cerrar Sesión") }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Alineación (Align)</label>
        <div className="flex gap-2">
          {(["left", "right"] as const).map((a) => (
            <Button
              key={a}
              onClick={() => setAlign(a)}
              variant={align === a ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              {a}
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

      {selectedAction && (
        <div className="mt-2 text-xs font-mono font-bold text-primary-600">
          {selectedAction}
        </div>
      )}
    </>
  );

  const preview = (
    <div className="p-4 flex items-center justify-center">
      <Dropdown
        trigger={
          <Button variant="secondary" size="md">
            Menú de Usuario <ChevronDown size={14} className="ml-1" />
          </Button>
        }
        items={menuItems}
        align={align}
        size={size}
      />
    </div>
  );

  const codeString = `import { Dropdown, Button } from "@vectorial-ia/via-ui";

const items = [
  { id: "edit", label: "Editar Perfil" },
  { id: "settings", label: "Configuración" },
  { id: "divider", divider: true },
  { id: "logout", label: "Cerrar Sesión", variant: "danger" }
];

function Example() {
  return (
    <Dropdown
      trigger={<Button>Menú...</Button>}
      items={items}
      align="${align}"
      size="${size}"
      onItemClick={(id) => console.log("Clic en:", id)}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Dropdown (Menú Desplegable)"
        description="Menús de contexto emergentes interactivos para ofrecer múltiples acciones rápidas bajo demanda de un activador."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="220px"
      />

      <PropsTable propsList={dropdownProps} />
    </div>
  );
}

export default DropdownDoc;
