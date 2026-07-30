import React, { useState } from "react";
import { Modal, Button, Input } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function ModalDoc() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Confirmar Operación");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const modalProps: PropItem[] = [
    {
      name: "isOpen",
      type: "boolean",
      description: "Define si la ventana modal está abierta en pantalla."
    },
    {
      name: "onClose",
      type: "() => void",
      description: "Callback disparado al pulsar la X de cierre o hacer clic fuera del modal."
    },
    {
      name: "title",
      type: "string",
      description: "Título superior de la cabecera del modal en formato uppercase."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Afecta el ancho máximo y las proporciones del modal."
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
          Abrir Modal
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
        Lanzar Modal Demo
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title || undefined}
        size={size}
      >
        <div className="space-y-4">
          <p className="text-xs leading-relaxed text-gray-500">
            ¿Está seguro que desea archivar el historial de combustible seleccionado? Esta acción liberará espacio del servidor principal.
          </p>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );

  const codeString = `import { Modal, Button } from "via-ui";
import { useState } from "react";

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="${title}"
        size="${size}"
      >
        <div style={{ padding: "10px 0" }}>
          <p>Contenido principal de la ventana emergente.</p>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "20px" }}>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Confirmar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Modal (Ventana Emergente)"
        description="Ventanas de diálogo contextuales superpuestas sobre el resto del contenido con transiciones de escala y difuminación del fondo."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={modalProps} />
    </div>
  );
}

export default ModalDoc;
