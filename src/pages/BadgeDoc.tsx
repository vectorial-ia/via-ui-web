import React, { useState } from "react";
import { Badge, Button, Input } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function BadgeDoc() {
  // Badge Sandbox States
  const [bdgVariant, setBdgVariant] = useState<"primary" | "secondary" | "outline" | "teal" | "code" | "success" | "warning" | "danger" | "info">("primary");
  const [bdgSize, setBdgSize] = useState<"sm" | "md" | "lg">("md");
  const [bdgText, setBdgText] = useState("Activo");

  const badgeProps: PropItem[] = [
    {
      name: "variant",
      type: '"primary" | "secondary" | "outline" | "teal" | ' +
            '"code" | "success" | "warning" | "danger" | "info"',
      defaultVal: '"primary"',
      description: "Define el color y estilo del Badge. 'teal' y 'code' coinciden con los diseños de la imagen."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño físico, paddings e indicador de texto del Badge."
    }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Variant</label>
        <div className="grid grid-cols-2 gap-2">
          {(["primary", "secondary", "outline", "teal", "code", "success", "warning", "danger", "info"] as const).map((variant) => (
            <Button
              key={variant}
              onClick={() => setBdgVariant(variant)}
              variant={bdgVariant === variant ? "primary" : "secondary"}
              size="sm"
              style={{ width: "100%", justifyContent: "flex-start", textTransform: "capitalize" }}
            >
              {variant}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size (Tamaño)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button
              key={size}
              onClick={() => setBdgSize(size)}
              variant={bdgSize === size ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Input
          label="Texto"
          type="text"
          value={bdgText}
          onChange={(e) => setBdgText(e.target.value)}
        />
      </div>
    </>
  );

  const preview = (
    <Badge variant={bdgVariant} size={bdgSize}>
      {bdgText}
    </Badge>
  );

  const codeString = `import { Badge } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Badge variant="${bdgVariant}" size="${bdgSize}">
      ${bdgText}
    </Badge>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Badge (Etiqueta)"
        description="Etiqueta pequeña compacta con bordes redondeados tipo píldora para estados, categorías o números identificadores."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      {/* Screenshot Match Section */}
      <div className="bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
          Estilos Coincidentes con la Imagen
        </h4>
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Estilo Celesta/Cian (PAGE_VIEW)</span>
            <div className="bg-white dark:bg-gray-950 p-4 border border-gray-100 dark:border-gray-800 rounded-lg flex items-center justify-center">
              <Badge variant="teal">PAGE_VIEW</Badge>
            </div>
            <code className="text-[10px] text-gray-500 font-mono">{'<Badge variant="teal">PAGE_VIEW</Badge>'}</code>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Estilo Código Monospace</span>
            <div className="bg-white dark:bg-gray-950 p-4 border border-gray-100 dark:border-gray-800 rounded-lg flex items-center justify-center">
              <Badge variant="code">/admin/interactions</Badge>
            </div>
            <code className="text-[10px] text-gray-500 font-mono">{'<Badge variant="code">/admin/interactions</Badge>'}</code>
          </div>
        </div>
      </div>

      <PropsTable propsList={badgeProps} />
    </div>
  );
}

export default BadgeDoc;
