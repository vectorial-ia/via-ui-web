import React, { useState } from "react";
import { PageHeader, Button, Input } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function PageHeaderDoc() {
  const [title, setTitle] = useState("Horas de Trabajo");
  const [subtitle, setSubtitle] = useState("Control detallado de tiempos de operación por activo.");
  const [searchValue, setSearchValue] = useState("");
  const [headerSize, setHeaderSize] = useState<"sm" | "md" | "lg">("md");

  const headerProps: PropItem[] = [
    {
      name: "title",
      type: "string",
      description: "Título principal mostrado en el lado izquierdo del encabezado."
    },
    {
      name: "subtitle",
      type: "string",
      description: "Descripción o subtítulo secundario del encabezado en texto silenciado."
    },
    {
      name: "searchValue",
      type: "string",
      description: "Valor enlazado para el campo de búsqueda."
    },
    {
      name: "onSearchChange",
      type: "(value: string) => void",
      description: "Función callback ejecutada al escribir en el campo de búsqueda. Si se omite, el campo de búsqueda no se renderiza."
    },
    {
      name: "searchPlaceholder",
      type: "string",
      defaultVal: '"Buscar..."',
      description: "Texto de marcador de posición para el input de búsqueda."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Dimensiones y espaciados generales del contenedor y tipografía."
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el contenedor."
    }
  ];

  const controls = (
    <>
      <div>
        <Input
          label="Title (Título)"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Subtitle (Subtítulo)"
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size (Tamaño)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button
              key={size}
              onClick={() => setHeaderSize(size)}
              variant={headerSize === size ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Búsqueda Actual</span>
        <code className="text-xs font-mono font-bold text-primary-600">
          {searchValue ? `"${searchValue}"` : "Vacio"}
        </code>
      </div>
    </>
  );

  const preview = (
    <div className="w-full">
      <PageHeader
        title={title}
        subtitle={subtitle || undefined}
        searchValue={searchValue}
        onSearchChange={(val) => setSearchValue(val)}
        searchPlaceholder="Buscar equipo..."
        size={headerSize}
      />
    </div>
  );

  const codeString = `import { PageHeader } from "@vectorial-ia/via-ui";
import { useState } from "react";

function Example() {
  const [search, setSearch] = useState("");
  return (
    <PageHeader
      title="${title}"
      subtitle="${subtitle}"
      searchValue={search}
      onSearchChange={(val) => setSearch(val)}
      searchPlaceholder="Buscar equipo..."
      size="${headerSize}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="PageHeader (Encabezado de Página)"
        description="Contenedor superior estructurado para títulos de sección y subtítulos que integra un buscador dinámico en el lado derecho."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="140px"
      />

      <PropsTable propsList={headerProps} />
    </div>
  );
}

export default PageHeaderDoc;
