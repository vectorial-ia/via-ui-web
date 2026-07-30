import React, { useState } from "react";
import { Input, Button, Switch } from "@vectorial-ia/via-ui";
import { User, Key } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function InputDoc() {
  // Input Sandbox States
  const [inpLabel, setInpLabel] = useState("Nombre de Usuario");
  const [inpPlaceholder, setInpPlaceholder] = useState("Ej. ronal_dev");
  const [inpError, setInpError] = useState("");
  const [inpSize, setInpSize] = useState<"sm" | "md" | "lg">("md");
  const [inpDisabled, setInpDisabled] = useState(false);
  const [inpHasIcon, setInpHasIcon] = useState(true);

  const inputProps: PropItem[] = [
    {
      name: "label",
      type: "string",
      description: "Etiqueta superior que acompaña al campo de texto."
    },
    {
      name: "error",
      type: "string",
      description: "Mensaje de error que se muestra en la parte inferior, resaltando el borde del input en rojo."
    },
    {
      name: "icon",
      type: "React.ReactNode",
      description: "Icono opcional que se muestra del lado izquierdo dentro del input."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño físico, alturas y tamaños de fuente del input."
    },
    {
      name: "disabled",
      type: "boolean",
      defaultVal: "false",
      description: "Deshabilita el campo de texto, impidiendo el foco e interacciones del usuario."
    }
  ];

  const controls = (
    <>
      <div>
        <Input
          label="Label (Etiqueta)"
          type="text"
          value={inpLabel}
          onChange={(e) => setInpLabel(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Placeholder"
          type="text"
          value={inpPlaceholder}
          onChange={(e) => setInpPlaceholder(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Error (Mensaje)"
          type="text"
          value={inpError}
          onChange={(e) => setInpError(e.target.value)}
          placeholder="Ej. El usuario es obligatorio"
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Tamaño (Size)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((s) => (
            <Button
              key={s}
              onClick={() => setInpSize(s)}
              variant={inpSize === s ? "primary" : "secondary"}
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
          checked={inpHasIcon}
          onChange={(val) => setInpHasIcon(val)}
          size="sm"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Deshabilitado (`disabled`)</span>
        <Switch
          checked={inpDisabled}
          onChange={(val) => setInpDisabled(val)}
          size="sm"
        />
      </div>
    </>
  );

  const preview = (
    <div className="w-full max-w-[280px]">
      <Input
        label={inpLabel || undefined}
        placeholder={inpPlaceholder}
        error={inpError || undefined}
        disabled={inpDisabled}
        size={inpSize}
        icon={inpHasIcon ? <User size={13} className="text-gray-400" /> : undefined}
      />
    </div>
  );

  const codeString = `import { Input } from "@vectorial-ia/via-ui";
import { User } from "lucide-react";
import { useState } from "react";

function Example() {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}${inpLabel ? `\n      label="${inpLabel}"` : ""}${inpPlaceholder ? `\n      placeholder="${inpPlaceholder}"` : ""}${inpError ? `\n      error="${inpError}"` : ""}
      size="${inpSize}"${inpDisabled ? "\n      disabled" : ""}${inpHasIcon ? "\n      icon={<User size={13} />}" : ""}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Input (Campo de Texto)"
        description="Campo de entrada de texto optimizado para la recolección de contraseñas, correos, nombres de usuario y más, con soporte para estados interactivos."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      {/* Basic Examples */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Variantes de Entrada</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Email input */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-950 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase">Input de Email</h3>
            <Input label="Correo Electrónico" type="email" placeholder="correo@vectorial.ia" />
          </div>

          {/* Password Input */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-950 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase">Input de Contraseña</h3>
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              icon={<Key size={13} className="text-gray-400" />}
            />
          </div>
        </div>
      </div>

      <PropsTable propsList={inputProps} />
    </div>
  );
}

export default InputDoc;
