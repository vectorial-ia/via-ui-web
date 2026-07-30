import React, { useState } from "react";
import { Tooltip, Button, Input } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function TooltipDoc() {
  const [position, setPosition] = useState<"top" | "bottom" | "left" | "right">("top");
  const [content, setContent] = useState("Mensaje emergente de ayuda.");

  const tooltipProps: PropItem[] = [
    {
      name: "content",
      type: "React.ReactNode",
      description: "Contenido del tooltip (normalmente texto corto uppercase)."
    },
    {
      name: "position",
      type: '"top" | "bottom" | "left" | "right"',
      defaultVal: '"top"',
      description: "Define en qué lado del elemento secundario debe flotar el tooltip."
    },
    {
      name: "children",
      type: "React.ReactNode",
      description: "Elemento de disparo interactivo al que se le aplicará el hover."
    }
  ];

  const controls = (
    <>
      <div>
        <Input
          label="Contenido del Tooltip"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Posición (Position)</label>
        <div className="grid grid-cols-2 gap-2">
          {(["top", "bottom", "left", "right"] as const).map((p) => (
            <Button
              key={p}
              onClick={() => setPosition(p)}
              variant={position === p ? "primary" : "secondary"}
              size="sm"
              style={{ textTransform: "capitalize" }}
            >
              {p}
            </Button>
          ))}
        </div>
      </div>
    </>
  );

  const preview = (
    <div className="py-10">
      <Tooltip content={content} position={position}>
        <Button variant="primary">Pasa el cursor aquí</Button>
      </Tooltip>
    </div>
  );

  const codeString = `import { Tooltip, Button } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Tooltip content="${content}" position="${position}">
      <Button>Pasa el cursor aquí</Button>
    </Tooltip>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Tooltip (Sugerencias)"
        description="Pequeño mensaje de texto flotante que aparece al pasar el cursor sobre un elemento para dar información contextual adicional."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      <PropsTable propsList={tooltipProps} />
    </div>
  );
}

export default TooltipDoc;
