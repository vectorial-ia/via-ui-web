import React, { useState } from "react";
import { FloatingInput, Button, Input, Switch } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function FloatingInputDoc() {
  const [label, setLabel] = useState("Nombre Completo");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [disabled, setDisabled] = useState(false);

  const floatProps: PropItem[] = [
    {
      name: "label",
      type: "string",
      description: "La etiqueta flotante que acompaña al input. Se anima hacia arriba al enfocar o escribir."
    },
    {
      name: "error",
      type: "string",
      description: "Mensaje de error. Colorea el borde y la etiqueta en rojo si está presente."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño general, altura y espaciados internos del input."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Inhabilita la edición del campo de texto."
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
        <Input
          label="Mensaje de Error"
          value={error}
          onChange={(e) => setError(e.target.value)}
          placeholder="Ej. El campo es obligatorio"
        />
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
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado</span>
        <Switch
          checked={disabled}
          onChange={(val) => setDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const preview = (
    <div className="w-full max-w-[280px]">
      <FloatingInput
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={error || undefined}
        size={size}
        disabled={disabled}
      />
    </div>
  );

  const codeString = `import { FloatingInput } from "@vectorial-ia/via-ui";
import { useState } from "react";

function Example() {
  const [value, setValue] = useState("");
  return (
    <FloatingInput
      label="${label}"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size="${size}"${error ? `\n      error="${error}"` : ""}${disabled ? "\n      disabled" : ""}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Floating Labels (Entradas Flotantes)"
        description="Campos de entrada de texto donde la etiqueta se desplaza de manera fluida y reduce su escala al activarse o contener texto."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="160px"
      />

      <PropsTable propsList={floatProps} />
    </div>
  );
}

export default FloatingInputDoc;
