import React, { useState } from "react";
import { 
  Sliders, 
  Info, 
  Terminal, 
  MousePointerClick, 
  Search, 
  Sparkles, 
  ArrowRight, 
  Code,
  SlidersHorizontal,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
  Play
} from "lucide-react";
import { 
  Button, 
  Badge, 
  Card, 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableCell, 
  TableHead, 
  Kbd, 
  Avatar, 
  Select,
  Switch,
  Tabs,
  Alert,
  Accordion
} from "@vectorial-ia/via-ui";
import CopyButton from "../components/CopyButton";

export function Intro() {
  // States for active interactive previews
  const [switchVal, setSwitchVal] = useState(true);
  const [selectVal, setSelectVal] = useState("todos");
  const [tabVal, setTabVal] = useState("tab1");
  const [accordionVal, setAccordionVal] = useState(false);

  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      {/* 1. Radix-style Hero Section */}
      <div className="text-left pt-6 space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-extrabold uppercase tracking-wider animate-pulse">
          <Sparkles size={10} />
          <span>Librería de Componentes UI v0.1.1</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
          Componentes estructurados. <br />
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Interfaces premium.
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-2xl">
          Una biblioteca de componentes minimalista con alto nivel de pulido visual, micro-interacciones fluidas y estilos inline portables diseñados a la medida para proyectos de <strong>Vectorial IA</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              window.location.hash = "#/intro";
            }}
          >
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs">
              Ver Documentación
              <ArrowRight size={14} />
            </span>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              window.open("https://github.com", "_blank");
            }}
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs">
              GitHub
            </span>
          </Button>
        </div>
      </div>

      {/* Installation block */}
      <div className="max-w-xl space-y-2 text-left">
        <label className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
          Comando de instalación
        </label>
        <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/60 backdrop-blur font-mono text-xs p-4 flex justify-between items-center shadow-inner">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">npm install @vectorial-ia/via-ui</span>
          <CopyButton text="npm install @vectorial-ia/via-ui" />
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      {/* 2. Component Primitives Grid - Radix UI Style */}
      <div className="space-y-6">
        <div className="flex flex-col gap-1 text-left">
          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Componentes Primitivos</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Explora las interacciones rápidas y el acabado estético de cada componente básico en este catálogo visual.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Switch */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Switch</span>
            <div className="py-8 flex flex-col items-center justify-center gap-2">
              <Switch checked={switchVal} onChange={setSwitchVal} />
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase mt-1">
                {switchVal ? "Estado: Activo" : "Estado: Inactivo"}
              </span>
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Switch checked={value} />"}</code>
          </div>

          {/* Card 2: Select */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Select</span>
            <div className="py-7 flex items-center justify-center">
              <Select
                options={[
                  { id: "todos", name: "Todos" },
                  { id: "admin", name: "Admin" },
                  { id: "client", name: "Cliente" }
                ]}
                value={selectVal}
                onChange={setSelectVal}
                size="sm"
                style={{ width: "130px" }}
              />
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Select value={val} />"}</code>
          </div>

          {/* Card 3: Badges */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Badges</span>
            <div className="py-7 flex flex-wrap gap-2 items-center justify-center">
              <Badge variant="teal" size="sm">PAGE_VIEW</Badge>
              <Badge variant="code" size="sm">/interactions</Badge>
              <Badge variant="primary" size="sm">ACTIVE</Badge>
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Badge variant=\"teal\">"}</code>
          </div>

          {/* Card 4: Kbd */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Kbd</span>
            <div className="py-9 flex items-center justify-center gap-1">
              <Kbd size="sm">Ctrl</Kbd>
              <span className="text-gray-400 text-[10px]">+</span>
              <Kbd size="sm">K</Kbd>
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Kbd>Ctrl</Kbd>"}</code>
          </div>

          {/* Card 5: Avatars */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avatar</span>
            <div className="py-7 flex -space-x-2 items-center justify-center">
              <Avatar name="Carlos Mendoza" size="md" status="online" />
              <Avatar name="Ana Gómez" size="md" status="online" />
              <Avatar name="Sofia Castro" size="md" status="offline" />
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Avatar size=\"md\" />"}</code>
          </div>

          {/* Card 6: Alert */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Alert</span>
            <div className="py-6 flex items-center justify-center w-full">
              <Alert variant="warning" size="sm">
                Conexión inestable
              </Alert>
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Alert variant=\"warning\" />"}</code>
          </div>

          {/* Card 7: Tabs */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tabs</span>
            <div className="py-7 flex items-center justify-center">
              <Tabs
                items={[
                  { id: "tab1", label: "T1" },
                  { id: "tab2", label: "T2" }
                ]}
                activeId={tabVal}
                onChange={setTabVal}
                variant="pills"
                size="sm"
              />
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Tabs variant=\"pills\" />"}</code>
          </div>

          {/* Card 8: Accordion */}
          <div className="flex flex-col justify-between border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white dark:bg-gray-950/50 hover:shadow-md transition-all">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Accordion</span>
            <div className="py-6 flex items-center justify-center w-full">
              <button 
                onClick={() => setAccordionVal(!accordionVal)}
                className="w-full text-left text-xs font-bold bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg p-2 flex justify-between items-center cursor-pointer select-none"
              >
                <span>VER DETALLE</span>
                <span className="text-gray-400 font-extrabold">{accordionVal ? "▲" : "▼"}</span>
              </button>
            </div>
            <code className="text-[9px] font-mono text-gray-400 text-center">{"<Accordion items={...} />"}</code>
          </div>

        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      {/* 3. Telemetry Table Showcase - Real World Dashboard Element */}
      <div className="space-y-6 text-left">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Caso de Uso Real: Monitoreo de Activos</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Una simulación de telemetría de activos pesados construida empleando los componentes <code>Table</code>, <code>Badge</code>, y <code>Avatar</code>.
          </p>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 bg-white dark:bg-gray-950 shadow-sm space-y-4">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Consola de Geoposicionamiento
              </span>
            </div>
            <Badge variant="teal" size="sm">Telemetría Online</Badge>
          </div>

          <Table striped hoverable size="sm">
            <TableHeader>
              <TableRow>
                <TableHead>Operador</TableHead>
                <TableHead>Acción</TableHead>
                <TableHead>Ruta Relativa</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }} className="flex items-center gap-2">
                  <Avatar name="Carlos Mendoza" size="sm" />
                  <span>Carlos Mendoza</span>
                </TableCell>
                <TableCell><Badge variant="teal" size="sm">PAGE_VIEW</Badge></TableCell>
                <TableCell><Badge variant="code">/admin/interactions</Badge></TableCell>
                <TableCell style={{ color: "#64748b" }}>15:24:02</TableCell>
                <TableCell><Badge variant="success" size="sm">OK</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }} className="flex items-center gap-2">
                  <Avatar name="Ana Gómez" size="sm" />
                  <span>Ana Gómez</span>
                </TableCell>
                <TableCell><Badge variant="primary" size="sm">POST_REQ</Badge></TableCell>
                <TableCell><Badge variant="code">/api/v1/telemetry</Badge></TableCell>
                <TableCell style={{ color: "#64748b" }}>15:25:31</TableCell>
                <TableCell><Badge variant="success" size="sm">OK</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }} className="flex items-center gap-2">
                  <Avatar name="Sofia Castro" size="sm" />
                  <span>Sofia Castro</span>
                </TableCell>
                <TableCell><Badge variant="danger" size="sm">ERROR_ALRT</Badge></TableCell>
                <TableCell><Badge variant="code">/api/v1/battery/critical</Badge></TableCell>
                <TableCell style={{ color: "#64748b" }}>15:28:15</TableCell>
                <TableCell><Badge variant="danger" size="sm">FAILED</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      {/* 4. Quick Code Preview Section - Radix Style */}
      <div className="grid gap-8 md:grid-cols-2 items-center text-left">
        <div className="space-y-4">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <Code size={16} />
          </div>
          <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">API Limpia e Intuitiva</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            Todos nuestros componentes se estructuran mediante el patrón de componentes compuestos y propiedades nativas de HTML, garantizando facilidad de lectura y un desarrollo robusto libre de complicaciones.
          </p>
        </div>

        <div className="bg-gray-900 dark:bg-black border border-gray-800 rounded-xl p-5 font-mono text-[10px] text-gray-300 shadow-2xl relative overflow-x-auto leading-relaxed">
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
          </div>
          <p className="text-emerald-500">// Ejemplo de uso</p>
          <p className="text-teal-400">import <span className="text-slate-200">{"{ Table, Badge }"}</span> from <span className="text-emerald-400">"@vectorial-ia/via-ui"</span>;</p>
          <br />
          <p>{"function Dashboard() {"}</p>
          <p className="pl-4">{"return ("}</p>
          <p className="pl-8 text-teal-400">{"<Table hoverable>"}</p>
          <p className="pl-12 text-teal-400">{"<TableRow>"}</p>
          <p className="pl-16">{"<TableCell>Tractor Paico 1</TableCell>"}</p>
          <p className="pl-16 text-teal-400">{"<TableCell>"}</p>
          <p className="pl-20 text-teal-400">{"<Badge variant=\"teal\">PAGE_VIEW</Badge>"}</p>
          <p className="pl-16 text-teal-400">{"</TableCell>"}</p>
          <p className="pl-12 text-teal-400">{"</TableRow>"}</p>
          <p className="pl-8 text-teal-400">{"</Table>"}</p>
          <p className="pl-4">{");"}</p>
          <p>{"}"}</p>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800" />

      {/* 5. Features Grid */}
      <div className="space-y-6 text-left">
        <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Principios de Diseño</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Sliders size={16} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Estilos Inline</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Componentes encapsulados con estilos en JavaScript (`CSSProperties`), asegurando total independencia de cargadores externos de CSS.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <MousePointerClick size={16} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Micro-interacciones</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Efectos hover reactivos, animaciones de carga nativas y selectores desplegables optimizados con transiciones elegantes.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Search size={16} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Command Palette</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Navegación ultrarrápida activada con <Kbd size="sm">Ctrl</Kbd> <Kbd size="sm">K</Kbd> para filtrar y acceder a cualquier componente mediante teclado.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-3 bg-white dark:bg-gray-950/40">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Terminal size={16} />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">TypeScript Estricto</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Tipado estricto completo para autocompletado y robustez en proyectos React 19 y Next.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
