import React, { useState } from "react";
import { Alert, Button, Input } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function AlertDoc() {
  const [variant, setVariant] = useState<"info" | "success" | "warning" | "error">("info");
  const [title, setTitle] = useState("Aviso del Sistema");
  const [body, setBody] = useState("Se ha registrado una nueva lectura de combustible del tanque principal.");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [isDismissed, setIsDismissed] = useState(false);

  const alertProps: PropItem[] = [
    {
      name: "variant",
      type: '"info" | "success" | "warning" | "error"',
      defaultVal: '"info"',
      description: "Define el color, fondo e icono asociado al tipo de alerta."
    },
    {
      name: "title",
      type: "string",
      description: "Encabezado principal de la alerta en formato uppercase."
    },
    {
      name: "onClose",
      type: "() => void",
      description: "Si se provee, muestra un botón de cierre en el lateral derecho de la alerta."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Espaciado y escala general del texto y del icono."
    }
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Variant</label>
        <div className="grid grid-cols-2 gap-2">
          {(["info", "success", "warning", "error"] as const).map((v) => (
            <Button
              key={v}
              onClick={() => {
                setVariant(v);
                setIsDismissed(false);
              }}
              variant={variant === v ? "primary" : "secondary"}
              size="sm"
              style={{ textTransform: "capitalize" }}
            >
              {v}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Input
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Cuerpo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
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

      {isDismissed && (
        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsDismissed(false)}
          style={{ width: "100%", marginTop: "10px" }}
        >
          Reiniciar Alerta
        </Button>
      )}
    </>
  );

  const preview = (
    <div className="w-full">
      {!isDismissed ? (
        <Alert
          variant={variant}
          title={title || undefined}
          onClose={() => setIsDismissed(true)}
          size={size}
        >
          {body}
        </Alert>
      ) : (
        <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold italic text-center py-4">
          La alerta ha sido descartada.
        </div>
      )}
    </div>
  );

  const codeString = `import { Alert } from "@vectorial-ia/via-ui";
import { useState } from "react";

function Example() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Alert
      variant="${variant}"
      title="${title}"
      size="${size}"
      onClose={() => setVisible(false)}
    >
      ${body}
    </Alert>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Alert (Alerta)"
        description="Banners contextuales premium para destacar notificaciones del sistema, errores críticos o confirmaciones exitosas."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={alertProps} />
    </div>
  );
}

export default AlertDoc;
