import React, { useState } from "react";
import { Checkbox, Radio, Button, Input, Switch } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function CheckboxDoc() {
  // Checkbox states
  const [chkChecked, setChkChecked] = useState(false);
  const [chkLabel, setChkLabel] = useState("Aceptar Términos");
  const [chkSize, setChkSize] = useState<"sm" | "md" | "lg">("md");
  const [chkDisabled, setChkDisabled] = useState(false);

  // Radio states
  const [radioValue, setRadioValue] = useState("opcion1");
  const [radLabel, setRadLabel] = useState("Opción Primaria");
  const [radSize, setRadSize] = useState<"sm" | "md" | "lg">("md");
  const [radDisabled, setRadDisabled] = useState(false);

  const checkboxProps: PropItem[] = [
    {
      name: "checked",
      type: "boolean",
      description: "Define si el checkbox se encuentra marcado."
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      description: "Callback ejecutado al alternar el estado del checkbox."
    },
    {
      name: "label",
      type: "string",
      description: "Texto de etiqueta opcional a la derecha en mayúsculas."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Tamaño físico y tipográfico del checkbox."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Deshabilita interacciones."
    }
  ];

  const radioProps: PropItem[] = [
    {
      name: "checked",
      type: "boolean",
      description: "Define si el botón de radio se encuentra marcado."
    },
    {
      name: "onChange",
      type: "() => void",
      description: "Callback ejecutado al marcar la opción."
    },
    {
      name: "label",
      type: "string",
      description: "Texto de etiqueta."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Tamaño físico del botón de radio."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Deshabilita interacciones."
    }
  ];

  const checkboxControls = (
    <>
      <div>
        <Input 
          label="Label Checkbox"
          value={chkLabel} 
          onChange={(e) => setChkLabel(e.target.value)}
        />
      </div>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Tamaño</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setChkSize(s)}
              variant={chkSize === s ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado</span>
        <Switch
          checked={chkDisabled}
          onChange={(val) => setChkDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const checkboxPreview = (
    <div className="p-4 flex justify-center">
      <Checkbox
        checked={chkChecked}
        onChange={(val) => setChkChecked(val)}
        label={chkLabel || undefined}
        size={chkSize}
        disabled={chkDisabled}
      />
    </div>
  );

  const radioControls = (
    <>
      <div>
        <Input 
          label="Label Radio"
          value={radLabel} 
          onChange={(e) => setRadLabel(e.target.value)}
        />
      </div>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Tamaño</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setRadSize(s)}
              variant={radSize === s ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado</span>
        <Switch
          checked={radDisabled}
          onChange={(val) => setRadDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const radioPreview = (
    <div className="p-4 flex flex-col gap-3 items-start justify-center">
      <Radio
        checked={radioValue === "opcion1"}
        onChange={() => setRadioValue("opcion1")}
        label={radLabel || undefined}
        size={radSize}
        disabled={radDisabled}
      />
      <Radio
        checked={radioValue === "opcion2"}
        onChange={() => setRadioValue("opcion2")}
        label="Opción Secundaria"
        size={radSize}
        disabled={radDisabled}
      />
    </div>
  );

  return (
    <div className="space-y-12 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Checks & Radios (Selectores de Opción)"
        description="Casillas de verificación y botones de opción estilizados de manera interactiva con colores y tipografía del sistema."
      />

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Checkbox (Casilla de Selección)</h2>
        <SandboxLayout 
          controls={checkboxControls}
          preview={checkboxPreview}
          codeString={`import { Checkbox } from "via-ui";
import { useState } from "react";

function Example() {
  const [checked, setChecked] = useState(${chkChecked});
  return (
    <Checkbox
      checked={checked}
      onChange={(val) => setChecked(val)}
      label="${chkLabel}"
      size="${chkSize}"
      disabled={${chkDisabled}}
    />
  );
}`}
          minHeight="140px"
        />
        <PropsTable propsList={checkboxProps} />
      </div>

      <div className="space-y-4 pt-6">
        <h2 className="text-lg font-bold">Radio (Botón de Selección Única)</h2>
        <SandboxLayout 
          controls={radioControls}
          preview={radioPreview}
          codeString={`import { Radio } from "via-ui";
import { useState } from "react";

function Example() {
  const [selectedValue, setSelectedValue] = useState("opcion1");
  return (
    <Radio
      checked={selectedValue === "opcion1"}
      onChange={() => setSelectedValue("opcion1")}
      label="${radLabel}"
      size="${radSize}"
      disabled={${radDisabled}}
    />
  );
}`}
          minHeight="160px"
        />
        <PropsTable propsList={radioProps} />
      </div>
    </div>
  );
}

export default CheckboxDoc;
