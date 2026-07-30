import React, { useState } from "react";
import { Offcanvas, Button, Input } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function OffcanvasDoc() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Configuraciones del Dispositivo");
  const [placement, setPlacement] = useState<"left" | "right" | "top" | "bottom">("right");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const canvasProps: PropItem[] = [
    {
      name: "isOpen",
      type: "boolean",
      description: "Define si el panel Offcanvas está visible."
    },
    {
      name: "onClose",
      type: "() => void",
      description: "Callback ejecutado al pulsar el botón de cerrar o hacer clic fuera del panel."
    },
    {
      name: "placement",
      type: '"left" | "right" | "top" | "bottom"',
      defaultVal: '"right"',
      description: "El lateral o borde de la pantalla por el cual se desliza el panel hacia adentro."
    },
    {
      name: "title",
      type: "string",
      description: "El título de la cabecera en mayúscula de alta fidelidad."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el grosor o ancho del panel según su posición."
    }
  ];

  const controls = (
    <>
      <div>
        <Input 
          label="Título (Header)"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Posición (Placement)</label>
        <div className="grid grid-cols-2 gap-2">
          {(["left", "right", "top", "bottom"] as const).map((p) => (
            <Button
              key={p}
              onClick={() => setPlacement(p)}
              variant={placement === p ? "primary" : "secondary"}
              size="sm"
              style={{ textTransform: "capitalize" }}
            >
              {p}
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

      <div className="pt-2">
        <Button 
          variant="primary" 
          size="md" 
          onClick={() => setIsOpen(true)}
          style={{ width: "100%" }}
        >
          Deslizar Panel
        </Button>
      </div>
    </>
  );

  const preview = (
    <div className="p-4 flex items-center justify-center">
      <Button 
        variant="primary" 
        size="md" 
        onClick={() => setIsOpen(true)}
      >
        Lanzar Offcanvas Demo
      </Button>

      <Offcanvas
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title || undefined}
        placement={placement}
        size={size}
      >
        <div className="space-y-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            Aquí puedes realizar configuraciones avanzadas del hardware IoT. Modificaciones en el intervalo de transmisión pueden impactar el consumo de batería.
          </p>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Lectura actual</label>
            <span className="text-xs font-mono font-bold text-primary-600 bg-primary-50 px-2 py-1.5 rounded-md border border-primary-100 self-start">
              TX_INTERVAL = 10s
            </span>
          </div>
        </div>
      </Offcanvas>
    </div>
  );

  const codeString = `import { Offcanvas, Button } from "via-ui";
import { useState } from "react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Panel</Button>
      
      <Offcanvas
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        placement="${placement}"
        title="${title}"
        size="${size}"
      >
        <div style={{ padding: "16px 0" }}>
          <p>Este es el panel lateral deslizable (Offcanvas) con soporte de orientación.</p>
        </div>
      </Offcanvas>
    </>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Offcanvas (Panel Deslizable)"
        description="Contenedores laterales superpuestos que se deslizan desde los bordes de la ventana de visualización del usuario."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={canvasProps} />
    </div>
  );
}

export default OffcanvasDoc;
