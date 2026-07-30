import React, { useState } from "react";
import { Select, Button, Input, Switch } from "via-ui";
import { Globe } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function SelectDoc() {
  // Select Sandbox States
  const [selectValue, setSelectValue] = useState<string>("es");
  const [selectPlaceholder, setSelectPlaceholder] = useState("Seleccionar idioma...");
  const [selectHasIcon, setSelectHasIcon] = useState(true);
  const [selectSize, setSelectSize] = useState<"sm" | "md" | "lg">("md");

  const selectOptions = [
    { id: "es", name: "Español" },
    { id: "en", name: "English" },
    { id: "fr", name: "Français" },
    { id: "pt", name: "Português" },
    { id: "it", name: "Italiano" },
  ];

  const selectProps: PropItem[] = [
    {
      name: "value",
      type: "string | number",
      description: "El id de la opción seleccionada."
    },
    {
      name: "onChange",
      type: "(value: string) => void",
      description: "Función callback ejecutada cuando se hace clic en una opción. Retorna el id de la opción seleccionada como string."
    },
    {
      name: "options",
      type: "SelectOption[]",
      description: 'Colección de objetos para listar. Estructura: { id: string | number; name: string; }.'
    },
    {
      name: "placeholder",
      type: "string",
      defaultVal: '"Seleccionar..."',
      description: "Mensaje mostrado cuando no hay opción seleccionada."
    },
    {
      name: "icon",
      type: "React.ReactNode",
      description: "Icono opcional que se muestra a la izquierda de la opción."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño físico y dimensiones tipográficas del selector."
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Estilos directos para el contenedor exterior."
    }
  ];

  const controls = (
    <>
      <div>
        <Input 
          label="Placeholder"
          type="text" 
          value={selectPlaceholder} 
          onChange={(e) => setSelectPlaceholder(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Tamaño (Size)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setSelectSize(s)}
              variant={selectSize === s ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Mostrar Icono</span>
        <Switch
          checked={selectHasIcon}
          onChange={(val) => setSelectHasIcon(val)}
          size="sm"
        />
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Valor Seleccionado</span>
        <code className="text-xs font-mono font-bold text-primary-600">"{selectValue}"</code>
      </div>
    </>
  );

  const preview = (
    <div className="w-full max-w-[240px]">
      <Select 
        options={selectOptions}
        value={selectValue}
        onChange={(val) => setSelectValue(val)}
        placeholder={selectPlaceholder}
        size={selectSize}
        icon={selectHasIcon ? <Globe size={13} className="text-primary-500" /> : undefined}
      />
    </div>
  );

  const codeString = `import { Select } from "via-ui";
import { Globe } from "lucide-react";
import { useState } from "react";

const options = [
  { id: "es", name: "Español" },
  { id: "en", name: "English" },
  { id: "fr", name: "Français" },
  { id: "pt", name: "Português" },
  { id: "it", name: "Italiano" }
];

function Example() {
  const [value, setValue] = useState("${selectValue}");
  return (
    <Select
      options={options}
      value={value}
      onChange={(val) => setValue(val)}
      placeholder="${selectPlaceholder}"
      size="${selectSize}"${selectHasIcon ? '\n      icon={<Globe size={13} />}' : ''}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Select (Selector)"
        description="Desplegable elegante para elegir una opción única entre múltiples elementos disponibles."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="320px"
      />

      <PropsTable propsList={selectProps} />
    </div>
  );
}

export default SelectDoc;
