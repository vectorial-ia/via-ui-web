import React, { useState } from "react";
import { Button, Input, Switch } from "@vectorial-ia/via-ui";
import CopyButton from "../components/CopyButton";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function ButtonDoc() {
  // Button Sandbox States
  const [btnVariant, setBtnVariant] = useState<"primary" | "secondary" | "ghost" | "ghost-active">("primary");
  const [btnSize, setBtnSize] = useState<"sm" | "md" | "lg">("md");
  const [btnIsLoading, setBtnIsLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Guardar Cambios");

  const buttonProps: PropItem[] = [
    {
      name: "variant",
      type: '"primary" | "secondary" | "ghost" | "ghost-active"',
      defaultVal: '"primary"',
      description: "Define el estilo visual del botón, incluyendo el estilo estándar, secundario y variantes translúcidas para navegación."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define la escala física, altura, tamaño de fuente y paddings internos del botón."
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultVal: "false",
      description: "Muestra una animación giratoria de carga y deshabilita la interacción."
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Permite sobreescribir estilos específicos inline."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Deshabilita el botón, impidiendo clics y bajando la opacidad visual."
    }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Variant</label>
        <div className="grid grid-cols-2 gap-2">
          {(["primary", "secondary", "ghost", "ghost-active"] as const).map((v) => (
            <Button
              key={v}
              onClick={() => setBtnVariant(v)}
              variant={btnVariant === v ? "primary" : "secondary"}
              size="sm"
              style={{ textTransform: "capitalize" }}
            >
              {v}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setBtnSize(s)}
              variant={btnSize === s ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {s}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Input
          label="Texto de Etiqueta"
          type="text"
          value={btnText}
          onChange={(e) => setBtnText(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Cargando (`isLoading`)</span>
        <Switch
          checked={btnIsLoading}
          onChange={(val) => setBtnIsLoading(val)}
          size="sm"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado (`disabled`)</span>
        <Switch
          checked={btnDisabled}
          onChange={(val) => setBtnDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const preview = (
    <Button variant={btnVariant} size={btnSize} isLoading={btnIsLoading} disabled={btnDisabled}>
      {btnText}
    </Button>
  );

  const codeString = `import { Button } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Button
      variant="${btnVariant}"
      size="${btnSize}"${btnIsLoading ? "\n      isLoading" : ""}${btnDisabled ? "\n      disabled" : ""}
    >
      ${btnText}
    </Button>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Button (Botón)"
        description="Elemento interactivo estándar para ejecuciones de lógica, envíos de formulario y activaciones contextuales."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="160px"
      />

      {/* Basic Examples */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Ejemplos Básicos</h2>
        <div className="grid gap-6">
          {/* Primary */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Variante Primaria</span>
              <CopyButton text='<Button variant="primary">Continuar</Button>' />
            </div>
            <div className="p-6 flex items-center justify-center bg-white dark:bg-gray-950">
              <Button variant="primary">Continuar</Button>
            </div>
          </div>

          {/* Secondary */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Variante Secundaria</span>
              <CopyButton text='<Button variant="secondary">Cancelar</Button>' />
            </div>
            <div className="p-6 flex items-center justify-center bg-white dark:bg-gray-950">
              <Button variant="secondary">Cancelar</Button>
            </div>
          </div>
        </div>
      </div>

      <PropsTable propsList={buttonProps} />
    </div>
  );
}

export default ButtonDoc;
