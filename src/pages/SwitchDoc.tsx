import React, { useState } from "react";
import { Switch, Button, Input } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function SwitchDoc() {
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState("Habilitar GPS");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [labelPosition, setLabelPosition] = useState<"left" | "right">("right");
  const [disabled, setDisabled] = useState(false);

  const switchProps: PropItem[] = [
    {
      name: "checked",
      type: "boolean",
      description: "Define el estado actual (activo / inactivo)."
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      description: "Función callback ejecutada al hacer clic sobre el switch."
    },
    {
      name: "label",
      type: "string",
      description: "Texto de etiqueta opcional."
    },
    {
      name: "labelPosition",
      type: '"left" | "right"',
      defaultVal: '"right"',
      description: "Define la ubicación de la etiqueta respecto al botón deslizante."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Afecta el tamaño del switch y la fuente del texto."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Si es verdadero, el switch no responderá a clics y se mostrará opaco."
    }
  ];

  const controls = (
    <>
      <div>
        <Input 
          label="Etiqueta (Label)"
          value={label} 
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Posición Etiqueta</label>
        <div className="flex gap-2">
          {(["left", "right"] as const).map((pos) => (
            <Button
              key={pos}
              onClick={() => setLabelPosition(pos)}
              variant={labelPosition === pos ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              {pos === "left" ? "Izquierda" : "Derecha"}
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

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado (`disabled`)</span>
        <Switch
          checked={disabled}
          onChange={(val) => setDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const preview = (
    <div className="p-4 flex items-center justify-center">
      <Switch
        checked={checked}
        onChange={(val) => setChecked(val)}
        label={label || undefined}
        labelPosition={labelPosition}
        size={size}
        disabled={disabled}
      />
    </div>
  );

  const codeString = `import { Switch } from "via-ui";
import { useState } from "react";

function Example() {
  const [enabled, setEnabled] = useState(${checked});
  return (
    <Switch
      checked={enabled}
      onChange={(val) => setEnabled(val)}
      label="${label}"
      labelPosition="${labelPosition}"
      size="${size}"
      disabled={${disabled}}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Switch (Interruptor)"
        description="Botón deslizante interactivo utilizado para alternar estados booleanos rápidos."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={switchProps} />
    </div>
  );
}

export default SwitchDoc;
