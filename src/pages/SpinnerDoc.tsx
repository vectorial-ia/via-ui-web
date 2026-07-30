import React, { useState } from "react";
import { Spinner, Button } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function SpinnerDoc() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [color, setColor] = useState<"primary" | "secondary" | "white">("primary");

  const spinnerProps: PropItem[] = [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño del spinner de carga (sm: 16px, md: 24px, lg: 40px)."
    },
    {
      name: "color",
      type: '"primary" | "secondary" | "white"',
      defaultVal: '"primary"',
      description: "Define el color principal de la pista activa."
    }
  ];

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

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Color (Color)</label>
        <div className="flex gap-2">
          {(["primary", "secondary", "white"] as const).map((c) => (
            <Button
              key={c}
              onClick={() => setColor(c)}
              variant={color === c ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>
    </>
  );

  const preview = (
    <div className={`p-8 rounded-lg flex items-center justify-center ${color === 'white' ? 'bg-slate-900' : 'bg-transparent'}`}>
      <Spinner size={size} color={color} />
    </div>
  );

  const codeString = `import { Spinner } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Spinner
      size="${size}"
      color="${color}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Spinner (Indicador de Carga)"
        description="Componente visual animado con rotación constante utilizado para notificar que un proceso se encuentra en ejecución."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={spinnerProps} />
    </div>
  );
}

export default SpinnerDoc;
