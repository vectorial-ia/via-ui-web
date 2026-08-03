import React, { useState } from "react";
import { Sidebar, Button } from "@vectorial-ia/via-ui";
import {
  LayoutDashboard,
  Truck,
  Clock,
  MapPin,
  Droplet,
  ClipboardList,
  Bell,
  Wrench,
  Search,
  Cpu,
  Settings
} from "lucide-react";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function SidebarDoc() {
  const [activeItem, setActiveItem] = useState("combustible");
  const [sidebarSize, setSidebarSize] = useState<"sm" | "md" | "lg">("md");

  const sidebarProps: PropItem[] = [
    {
      name: "items",
      type: "SidebarOption[]",
      description: "Lista de opciones de menú. Cada opción contiene id, label e icon opcional."
    },
    {
      name: "value",
      type: "string",
      description: "El id del elemento activo seleccionado."
    },
    {
      name: "onChange",
      type: "(id: string) => void",
      description: "Función callback disparada cuando se pulsa un elemento en el menú."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Dimensiones generales, paddings, alturas y tamaños de fuente."
    },
    {
      name: "style",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el contenedor principal de la sidebar."
    },
    {
      name: "isOpen",
      type: "boolean",
      description: "Define si la sidebar está expandida (solo en modo móvil, < 768px)."
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      description: "Función callback disparada al cambiar el estado de expansión de la sidebar."
    },
    {
      name: "defaultOpen",
      type: "boolean",
      defaultVal: "false",
      description: "Estado de expansión inicial de la sidebar en móviles."
    },
    {
      name: "toggleButtonStyle",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el botón de alternancia móvil."
    },
    {
      name: "backdropStyle",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el overlay backdrop móvil."
    },
    {
      name: "mobilePanelStyle",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el panel lateral de la sidebar en móvil."
    }
  ];

  const sidebarOptions = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={14} /> },
    { id: "maquinarias", label: "Maquinarias", icon: <Truck size={14} /> },
    { id: "horas", label: "Horas de Trabajo", icon: <Clock size={14} /> },
    { id: "ubicacion", label: "Ubicación", icon: <MapPin size={14} /> },
    { id: "combustible", label: "Combustible", icon: <Droplet size={14} /> },
    { id: "reportes", label: "Reportes", icon: <ClipboardList size={14} /> },
    { id: "alertas", label: "Alertas", icon: <Bell size={14} /> },
    { id: "mantenimiento", label: "Mantenimiento", icon: <Wrench size={14} /> },
    { id: "sunat", label: "Consulta SUNAT", icon: <Search size={14} /> },
    { id: "iot", label: "Estación IoT", icon: <Cpu size={14} /> },
    { id: "configuracion", label: "Configuración", icon: <Settings size={14} /> },
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size (Tamaño)</label>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button
              key={size}
              onClick={() => setSidebarSize(size)}
              variant={sidebarSize === size ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Activo</span>
        <code className="text-xs font-mono font-bold text-primary-600 capitalize">
          "{activeItem}"
        </code>
      </div>

      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-lg">
        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">💡 Modo Móvil (&lt; 768px)</span>
        <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
          Reduce el ancho de tu pantalla a menos de 768px (o activa el modo móvil en las Herramientas de Desarrollador) para ver el botón flotante de menú, el backdrop blur y el sidebar en modo cajón (drawer).
        </p>
      </div>
    </>
  );

  const preview = (
    <div className="w-full max-w-[240px] border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-950">
      <Sidebar
        items={sidebarOptions}
        value={activeItem}
        onChange={(id) => setActiveItem(id)}
        size={sidebarSize}
      />
    </div>
  );

  const codeString = `import { Sidebar } from "@vectorial-ia/via-ui";
import { Terminal, Settings, User } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "dashboard", label: "Consola", icon: <Terminal size={14} /> },
  { id: "profile", label: "Mi Perfil", icon: <User size={14} /> },
  { id: "settings", label: "Ajustes", icon: <Settings size={14} /> }
];

function Example() {
  const [active, setActive] = useState("${activeItem}");
  return (
    <Sidebar
      items={items}
      value={active}
      onChange={(id) => setActive(id)}
      size="${sidebarSize}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Sidebar (Navegación Lateral)"
        description="Menú vertical estructurado para navegación interna, con íconos personalizados, animaciones de hover y marcación del elemento activo."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="480px"
      />

      <PropsTable propsList={sidebarProps} />
    </div>
  );
}

export default SidebarDoc;
