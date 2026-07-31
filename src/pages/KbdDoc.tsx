import React, { useState } from "react";
import { Kbd, Button } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function KbdDoc() {
  const [size, setSize] = useState<"sm" | "md">("md");

  const kbdProps: PropItem[] = [
    {
      name: "size",
      type: '"sm" | "md"',
      defaultVal: '"md"',
      description: "Define el tamaño de la tecla (sm para texto compacto, md estándar)."
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Texto o símbolo de la tecla a renderizar (ej. Ctrl, Shift, K)."
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline."
    }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size (Tamaño)</label>
        <div className="flex gap-2">
          {(["sm", "md"] as const).map((s) => (
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
    <div className="flex flex-col gap-4 items-start">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Abrir paleta de comandos:</span>
        <Kbd size={size}>Ctrl</Kbd>
        <span className="text-gray-400 text-xs">+</span>
        <Kbd size={size}>K</Kbd>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Guardar documento:</span>
        <Kbd size={size}>⌘</Kbd>
        <span className="text-gray-400 text-xs">+</span>
        <Kbd size={size}>S</Kbd>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Buscar en la página:</span>
        <Kbd size={size}>/</Kbd>
      </div>
    </div>
  );

  const codeString = `import { Kbd } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <div className="flex items-center gap-1.5">
      <Kbd size="${size}">Ctrl</Kbd>
      <span>+</span>
      <Kbd size="${size}">K</Kbd>
    </div>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Kbd (Keyboard Key)"
        description="El componente Kbd se utiliza para representar entradas del teclado físico con un estilo visual 3D limpio y realista."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={kbdProps} />
    </div>
  );
}

export default KbdDoc;
