import React, { useState } from "react";
import { Accordion, Button, Switch } from "via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function AccordionDoc() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [allowMultiple, setAllowMultiple] = useState(false);

  const accordionItems = [
    {
      id: "item1",
      title: "1. ¿Cómo configuro las alarmas de velocidad?",
      content: "Puedes definir los límites de velocidad desde el menú de Configuración de Activos. El sistema enviará notificaciones inmediatas vía correo y alertas emergentes en tiempo real en la barra lateral."
    },
    {
      id: "item2",
      title: "2. ¿Cada cuánto tiempo se actualiza la telemetría GPS?",
      content: "Los dispositivos IoT a bordo envían reportes de ubicación y velocidad cada 10 segundos cuando el motor está encendido, y cada 5 minutos en estado de ralentí prolongado."
    },
    {
      id: "item3",
      title: "3. ¿Dónde consulto las horas de ralentí acumuladas?",
      content: "El tiempo de ralentí (motor encendido sin movimiento) se consolida en tiempo real y puede visualizarse en el panel principal utilizando nuestras tarjetas de telemetría de activos."
    }
  ];

  const accordionProps: PropItem[] = [
    {
      name: "items",
      type: "AccordionItemData[]",
      description: "Arreglo de elementos a listar. Estructura: { id: string, title: string, content: React.ReactNode }."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Controla el relleno interno y los tamaños tipográficos del acordeón."
    },
    {
      name: "allowMultiple",
      type: "boolean",
      defaultVal: "false",
      description: "Si es verdadero, permite expandir múltiples elementos simultáneamente."
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

      <div className="flex items-center justify-between pt-2">
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Expandir Múltiples (`allowMultiple`)</span>
        <Switch
          checked={allowMultiple}
          onChange={(val) => setAllowMultiple(val)}
          size="sm"
        />
      </div>
    </>
  );

  const preview = (
    <div className="w-full">
      <Accordion
        items={accordionItems}
        size={size}
        allowMultiple={allowMultiple}
      />
    </div>
  );

  const codeString = `import { Accordion } from "via-ui";

const items = [
  {
    id: "item1",
    title: "1. ¿Cómo configuro las alarmas de velocidad?",
    content: "Puedes definir los límites de velocidad desde el menú de Configuración de Activos. El sistema enviará notificaciones inmediatas..."
  },
  {
    id: "item2",
    title: "2. ¿Cada cuánto tiempo se actualiza la telemetría GPS?",
    content: "Los dispositivos IoT a bordo envían reportes de ubicación y velocidad cada 10 segundos..."
  },
  {
    id: "item3",
    title: "3. ¿Dónde consulto las horas de ralentí acumuladas?",
    content: "El tiempo de ralentí (motor encendido sin movimiento) se consolida en tiempo real..."
  }
];

function Example() {
  return (
    <Accordion
      items={items}
      size="${size}"
      allowMultiple={${allowMultiple}}
    />
  );
}`;


  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader 
        category="Componente"
        title="Accordion (Acordeón)"
        description="Contenedores colapsables apilados verticalmente para gestionar la visualización progresiva de secciones de información densa."
      />

      <SandboxLayout 
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="260px"
      />

      <PropsTable propsList={accordionProps} />
    </div>
  );
}

export default AccordionDoc;
