import React, { useState } from "react";
import { Card, Button, Input } from "@vectorial-ia/via-ui";
import { Clock, Droplet, Bell } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function CardDoc() {
  const [cardTitle, setCardTitle] = useState("Total Horas Trabajo");
  const [cardSubtitle, setCardSubtitle] = useState("2 h 47 min");
  const [cardLayout, setCardLayout] = useState<"vertical" | "horizontal">("vertical");
  const [cardSize, setCardSize] = useState<"sm" | "md" | "lg">("md");

  const cardProps: PropItem[] = [
    {
      name: "title",
      type: "string | React.ReactNode",
      description: "El título o etiqueta superior de la tarjeta."
    },
    {
      name: "subtitle",
      type: "string | React.ReactNode",
      description: "El valor o contenido numérico/descriptivo principal."
    },
    {
      name: "icon",
      type: "React.ReactNode",
      description: "Elemento de icono renderizado."
    },
    {
      name: "iconColor",
      type: "string",
      defaultVal: '"#10b981"',
      description: "Color principal para el icono."
    },
    {
      name: "iconBgColor",
      type: "string",
      defaultVal: '"rgba(16, 185, 129, 0.05)"',
      description: "Color de fondo del contenedor circular del icono."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Paddings internos y tamaño del texto."
    },
    {
      name: "layout",
      type: '"vertical" | "horizontal"',
      defaultVal: '"vertical"',
      description: "Alineación y ordenamiento del icono respecto a los textos."
    }
  ];

  const controls = (
    <>
      <div>
        <Input
          label="Título"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Subtítulo / Valor"
          value={cardSubtitle}
          onChange={(e) => setCardSubtitle(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Diseño (Layout)</label>
        <div className="flex gap-2">
          {(["vertical", "horizontal"] as const).map((l) => (
            <Button
              key={l}
              onClick={() => setCardLayout(l)}
              variant={cardLayout === l ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              {l}
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
              onClick={() => setCardSize(s)}
              variant={cardSize === s ? "primary" : "secondary"}
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
    <div className="w-full max-w-[280px]">
      <Card
        title={cardTitle}
        subtitle={cardSubtitle}
        icon={<Clock size={16} />}
        size={cardSize}
        layout={cardLayout}
      />
    </div>
  );

  const codeString = `import { Card } from "@vectorial-ia/via-ui";
import { Clock } from "lucide-react";

function Example() {
  return (
    <Card
      title="${cardTitle}"
      subtitle="${cardSubtitle}"
      icon={<Clock size={16} />}
      size="${cardSize}"
      layout="${cardLayout}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Card (Tarjeta)"
        description="Contenedores estructurados con soporte de iconos y estados métricos para tableros de control y analíticas."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      {/* Grid examples matching the actual telemetry images */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Métricas de Telemetría</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="TOTAL HORAS TRABAJO" subtitle="2 h 47 min" />
          <Card title="TOTAL HORAS TRANSPORTE" subtitle="22 min" />
          <Card title="TOTAL HORAS RALENTÍ" subtitle="39 min" />
          <Card title="TOTAL HORAS ACUMULADAS" subtitle="3 h 47 min" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold">Notificaciones y Alertas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="TOTAL ALERTAS"
            subtitle="1"
            icon={<Bell size={15} />}
            iconColor="#4b5563"
            iconBgColor="#f3f4f6"
            layout="horizontal"
          />
          <Card
            title="CRÍTICAS"
            subtitle="1"
            icon={<Bell size={15} />}
            iconColor="#ef4444"
            iconBgColor="rgba(239, 68, 68, 0.05)"
            layout="horizontal"
          />
          <Card
            title="ADVERTENCIAS"
            subtitle="0"
            icon={<Bell size={15} />}
            iconColor="#f59e0b"
            iconBgColor="rgba(245, 158, 11, 0.05)"
            layout="horizontal"
          />
          <Card
            title="POR RECONOCER"
            subtitle="0"
            icon={<Clock size={15} />}
            iconColor="#3b82f6"
            iconBgColor="rgba(59, 130, 246, 0.05)"
            layout="horizontal"
          />
        </div>
      </div>

      <PropsTable propsList={cardProps} />
    </div>
  );
}

export default CardDoc;
