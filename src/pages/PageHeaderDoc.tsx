import React, { useState } from "react";
import { PageHeader, Button, Input, Select, Badge } from "@vectorial-ia/via-ui";
import { Calendar, Send, History, Activity } from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function PageHeaderDoc() {
  const [title, setTitle] = useState("Vistas de Página");
  const [subtitle, setSubtitle] = useState("Trazabilidad de la navegación de los usuarios en la plataforma");
  const [preTitle, setPreTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [headerSize, setHeaderSize] = useState<"sm" | "md" | "lg">("md");
  const [variant, setVariant] = useState<"default" | "minimal" | "card">("default");
  
  const [showSearch, setShowSearch] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showActions, setShowActions] = useState(true);

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
      name: "preTitle",
      type: "string",
      description: "Etiqueta superior en texto pequeño, útil para categorizar o indicar sub-secciones."
    },
    {
      name: "variant",
      type: '"default' | 'minimal' | 'card"',
      defaultVal: '"default"',
      description: "Estilo estético de la cabecera. 'default' es una tarjeta estándar, 'minimal' no tiene fondo ni bordes, y 'card' es redondeado amplio."
    },
    {
      name: "onBackClick",
      type: "() => void",
      description: "Si se proporciona, renderiza un botón con una flecha hacia atrás a la izquierda del título que ejecuta este callback al hacer clic."
    },
    {
      name: "actions",
      type: "React.ReactNode",
      description: "Slot libre para colocar elementos personalizados en el extremo derecho (ej. botones, selectores)."
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

  // Dummy actions component
  const sampleActions = (
    <>
      <Select
        options={[
          { label: "TODOS LOS USUARIOS", value: "todos" },
          { label: "ADMINISTRADORES", value: "admin" },
          { label: "CLIENTES", value: "client" }
        ]}
        value="todos"
        onChange={() => {}}
        size={headerSize}
        style={{ width: "180px" }}
      />
      <Button
        variant="primary"
        size={headerSize}
        style={{ background: "#0f172a", borderColor: "#0f172a" }} // Dark slate
      >
        <span className="flex items-center gap-1.5 font-bold">
          Actualizar
        </span>
      </Button>
    </>
  );

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
        <Input
          label="Pre Title (Sobre-título)"
          type="text"
          placeholder="Ej: SECCIÓN DE CONTROL"
          value={preTitle}
          onChange={(e) => setPreTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Variant (Variante)</label>
        <div className="flex gap-2">
          {(["default", "minimal", "card"] as const).map((v) => (
            <Button
              key={v}
              onClick={() => setVariant(v)}
              variant={variant === v ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              {v}
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
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Opciones de Renderizado</label>
        <div className="flex flex-col gap-2 mt-1">
          <Button
            onClick={() => setShowSearch(!showSearch)}
            variant={showSearch ? "primary" : "secondary"}
            size="sm"
            style={{ justifyContent: "flex-start" }}
          >
            {showSearch ? "Buscador: Activado" : "Buscador: Desactivado"}
          </Button>
          <Button
            onClick={() => setShowBackButton(!showBackButton)}
            variant={showBackButton ? "primary" : "secondary"}
            size="sm"
            style={{ justifyContent: "flex-start" }}
          >
            {showBackButton ? "Botón Atrás: Activado" : "Botón Atrás: Desactivado"}
          </Button>
          <Button
            onClick={() => setShowActions(!showActions)}
            variant={showActions ? "primary" : "secondary"}
            size="sm"
            style={{ justifyContent: "flex-start" }}
          >
            {showActions ? "Acciones Extras: Activado" : "Acciones Extras: Desactivado"}
          </Button>
        </div>
      </div>
    </>
  );

  const preview = (
    <div className="w-full">
      <PageHeader
        title={title}
        subtitle={subtitle || undefined}
        preTitle={preTitle || undefined}
        variant={variant}
        searchValue={showSearch ? searchValue : undefined}
        onSearchChange={showSearch ? (val) => setSearchValue(val) : undefined}
        onBackClick={showBackButton ? () => alert("Botón Atrás Presionado") : undefined}
        actions={showActions ? sampleActions : undefined}
        size={headerSize}
      />
    </div>
  );

  const codeString = `import { PageHeader, Button, Select } from "@vectorial-ia/via-ui";
import { useState } from "react";

function Example() {
  const [search, setSearch] = useState("");
  return (
    <PageHeader
      title="${title}"
      subtitle="${subtitle}"
      ${preTitle ? `preTitle="${preTitle}"` : ""}
      variant="${variant}"
      size="${headerSize}"
      ${showSearch ? `searchValue={search}
      onSearchChange={(val) => setSearch(val)}` : ""}
      ${showBackButton ? `onBackClick={() => window.history.back()}` : ""}
      ${showActions ? `actions={
        <>
          <Select options={[{label: "TODOS LOS USUARIOS", value: "todos"}]} />
          <Button variant="primary">Actualizar</Button>
        </>
      }` : ""}
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="PageHeader (Encabezado de Página)"
        description="Contenedor superior estructurado para títulos de sección, subtítulos, sobretítulos y un botón opcional de retroceso, con soporte para buscadores e inyección libre de acciones en el lado derecho."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      {/* Screen Match Section (Tractor Header) */}
      <div className="bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <div className="bg-gray-100 dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <PageHeader
            title="TRACTOR PAICO 1"
            preTitle="LOCALIZACIÓN DE ACTIVO"
            variant="card"
            onBackClick={() => alert("Volver al listado de activos")}
            actions={
              <div className="flex flex-wrap items-center gap-3">
                {/* Date Picker 1 */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">DESDE:</span>
                  <div className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-900 text-xs text-gray-600 dark:text-gray-300">
                    <Calendar size={12} className="text-gray-400" />
                    <span>31/07/2026 00:00</span>
                  </div>
                </div>

                {/* Date Picker 2 */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">HASTA:</span>
                  <div className="flex items-center gap-1.5 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-900 text-xs text-gray-600 dark:text-gray-300">
                    <Calendar size={12} className="text-gray-400" />
                    <span>31/07/2026 23:59</span>
                  </div>
                </div>

                {/* Consultar Button (Teal/Emerald Green matching Image 3) */}
                <Button 
                  variant="primary" 
                  size="md"
                  style={{ background: "#10b981", borderColor: "#10b981", color: "#ffffff" }}
                >
                  <span className="flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
                    <Send size={12} />
                    Consultar
                  </span>
                </Button>

                {/* Segmented Button Group */}
                <div className="flex border border-gray-200 dark:border-gray-800 rounded-lg p-0.5 bg-gray-50/50 dark:bg-gray-900">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    style={{ border: "none", background: "#ffffff", color: "#1e293b", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}
                  >
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                      <History size={12} />
                      Trayectoria
                    </span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    style={{ border: "none", background: "transparent", color: "#64748b" }}
                  >
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                      <Activity size={12} />
                      En Vivo
                    </span>
                  </Button>
                </div>
              </div>
            }
          />
        </div>
        <div className="mt-4">
          <p className="text-xs text-gray-500">
            Esta demostración utiliza la prop <code>variant="card"</code>, <code>preTitle="LOCALIZACIÓN DE ACTIVO"</code>, 
            el botón de atrás mediante <code>onBackClick</code>, y un slot de <code>actions</code> dinámico para colocar los datepickers, 
            el botón verde y el control de trayectoria.
          </p>
        </div>
      </div>

      <PropsTable propsList={headerProps} />
    </div>
  );
}

export default PageHeaderDoc;
