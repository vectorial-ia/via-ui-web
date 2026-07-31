import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Layers,
  Sun,
  Moon,
  Terminal,
  Type,
  Tag,
  Heading,
  Columns2,
  ToggleLeft,
  CreditCard,
  CheckSquare,
  FileInput,
  ChevronsUpDown,
  AlertCircle,
  Compass,
  Maximize2,
  Menu,
  PanelRightClose,
  User,
  Folder,
  HelpCircle,
  RotateCw,
  Table as TableIcon,
  Keyboard as KeyboardIcon,
  Search,
  Command,
  CornerDownLeft
} from "lucide-react";
import { Sidebar, Kbd } from "@vectorial-ia/via-ui";
import Intro from "./pages/Intro";
import ButtonDoc from "./pages/ButtonDoc";
import SelectDoc from "./pages/SelectDoc";
import InputDoc from "./pages/InputDoc";
import BadgeDoc from "./pages/BadgeDoc";
import PageHeaderDoc from "./pages/PageHeaderDoc";
import SidebarDoc from "./pages/SidebarDoc";
import SwitchDoc from "./pages/SwitchDoc";
import CardDoc from "./pages/CardDoc";
import CheckboxDoc from "./pages/CheckboxDoc";
import FloatingInputDoc from "./pages/FloatingInputDoc";
import AccordionDoc from "./pages/AccordionDoc";
import AlertDoc from "./pages/AlertDoc";
import BreadcrumbDoc from "./pages/BreadcrumbDoc";
import ModalDoc from "./pages/ModalDoc";
import DropdownDoc from "./pages/DropdownDoc";
import OffcanvasDoc from "./pages/OffcanvasDoc";
import AvatarDoc from "./pages/AvatarDoc";
import TabsDoc from "./pages/TabsDoc";
import TooltipDoc from "./pages/TooltipDoc";
import SpinnerDoc from "./pages/SpinnerDoc";
import TableDoc from "./pages/TableDoc";
import KbdDoc from "./pages/KbdDoc";
import IntroDoc from "./pages/IntroDoc";

type SectionType =
  | "landing"
  | "intro"
  | "button"
  | "select"
  | "input"
  | "badge"
  | "page-header"
  | "sidebar"
  | "switch"
  | "card"
  | "checkbox"
  | "floating-input"
  | "accordion"
  | "alert"
  | "breadcrumb"
  | "modal"
  | "dropdown"
  | "offcanvas"
  | "avatar"
  | "tabs"
  | "tooltip"
  | "spinner"
  | "table"
  | "kbd";

interface NavItem {
  id: SectionType;
  label: string;
  icon: React.ReactNode;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#10b981");

  // Command Palette States
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const hexToRgb = (hex: string) => {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 16, g: 185, b: 129 };
    };

    const root = document.documentElement;
    root.style.setProperty("--via-primary", primaryColor);

    const rgb = hexToRgb(primaryColor);
    const darkR = Math.max(0, Math.floor(rgb.r * 0.85));
    const darkG = Math.max(0, Math.floor(rgb.g * 0.85));
    const darkB = Math.max(0, Math.floor(rgb.b * 0.85));
    root.style.setProperty("--via-primary-dark", `rgb(${darkR}, ${darkG}, ${darkB})`);
    root.style.setProperty("--via-primary-light", `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.06)`);
    root.style.setProperty("--via-primary-border", `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)`);
  }, [primaryColor]);

  const validSections: SectionType[] = [
    "landing",
    "intro",
    "button",
    "select",
    "input",
    "badge",
    "page-header",
    "sidebar",
    "switch",
    "card",
    "checkbox",
    "floating-input",
    "accordion",
    "alert",
    "breadcrumb",
    "modal",
    "dropdown",
    "offcanvas",
    "avatar",
    "tabs",
    "tooltip",
    "spinner",
    "table",
    "kbd"
  ];

  // Synchronize state with URL hash (e.g. #/button)
  const [activeSection, setActiveSection] = useState<SectionType>(() => {
    const hash = window.location.hash.replace("#/", "");
    if (hash === "" || hash === "landing") {
      return "landing";
    }
    if (validSections.includes(hash as SectionType)) {
      return hash as SectionType;
    }
    return "landing";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      if (hash === "" || hash === "landing") {
        setActiveSection("landing");
      } else if (validSections.includes(hash as SectionType)) {
        setActiveSection(hash as SectionType);
      } else {
        setActiveSection("landing");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (sectionId: SectionType) => {
    window.location.hash = "#/" + sectionId;
  };

  // 1. Comenzando
  const startGroup: NavItem[] = [
    { id: "intro", label: "Introducción", icon: <BookOpen size={14} /> }
  ];

  // 2. Formularios & Botones
  const formsGroup: NavItem[] = [
    { id: "button", label: "Button (Botón)", icon: <Terminal size={14} /> },
    { id: "input", label: "Input (Campo)", icon: <Type size={14} /> },
    { id: "select", label: "Select (Selector)", icon: <Layers size={14} /> },
    { id: "checkbox", label: "Checks & Radios", icon: <CheckSquare size={14} /> },
    { id: "floating-input", label: "Floating Labels", icon: <FileInput size={14} /> },
    { id: "switch", label: "Switch (Interruptor)", icon: <ToggleLeft size={14} /> },
  ];

  // 3. Navegación
  const navigationGroup: NavItem[] = [
    { id: "sidebar", label: "Sidebar (Navegación)", icon: <Columns2 size={14} /> },
    { id: "breadcrumb", label: "Breadcrumb", icon: <Compass size={14} /> },
    { id: "page-header", label: "PageHeader (Cabecera)", icon: <Heading size={14} /> },
    { id: "tabs", label: "Tabs (Pestañas)", icon: <Folder size={14} /> },
  ];

  // 4. Estructura & Contenedores
  const layoutGroup: NavItem[] = [
    { id: "card", label: "Card (Tarjeta)", icon: <CreditCard size={14} /> },
    { id: "accordion", label: "Accordion", icon: <ChevronsUpDown size={14} /> },
    { id: "modal", label: "Modal (Pop-up)", icon: <Maximize2 size={14} /> },
    { id: "offcanvas", label: "Offcanvas Drawer", icon: <PanelRightClose size={14} /> },
    { id: "dropdown", label: "Dropdown Menu", icon: <Menu size={14} /> },
  ];

  // 5. Datos & Visualización
  const dataGroup: NavItem[] = [
    { id: "table", label: "Table (Tabla)", icon: <TableIcon size={14} /> },
    { id: "badge", label: "Badge (Etiqueta)", icon: <Tag size={14} /> },
    { id: "avatar", label: "Avatar (Perfil)", icon: <User size={14} /> },
  ];

  // 6. Utilidades & Feedback
  const feedbackGroup: NavItem[] = [
    { id: "alert", label: "Alerts (Alertas)", icon: <AlertCircle size={14} /> },
    { id: "tooltip", label: "Tooltip (Ayuda)", icon: <HelpCircle size={14} /> },
    { id: "spinner", label: "Spinner (Carga)", icon: <RotateCw size={14} /> },
    { id: "kbd", label: "Kbd (Teclado)", icon: <KeyboardIcon size={14} /> },
  ];

  // Flat list of searchable components
  const searchableItems: { id: SectionType; label: string; category: string }[] = [
    { id: "landing", label: "Inicio / Landing Page", category: "Comenzando" },
    { id: "intro", label: "Introducción", category: "Comenzando" },
    { id: "button", label: "Button (Botón)", category: "Formularios & Botones" },
    { id: "input", label: "Input (Campo de Texto)", category: "Formularios & Botones" },
    { id: "select", label: "Select (Selector)", category: "Formularios & Botones" },
    { id: "checkbox", label: "Checkbox & Radios", category: "Formularios & Botones" },
    { id: "floating-input", label: "Floating Labels (Etiquetas Flotantes)", category: "Formularios & Botones" },
    { id: "switch", label: "Switch (Interruptor)", category: "Formularios & Botones" },
    { id: "sidebar", label: "Sidebar (Menú Lateral)", category: "Navegación" },
    { id: "breadcrumb", label: "Breadcrumb (Miga de Pan)", category: "Navegación" },
    { id: "page-header", label: "PageHeader (Cabecera)", category: "Navegación" },
    { id: "tabs", label: "Tabs (Pestañas)", category: "Navegación" },
    { id: "card", label: "Card (Tarjeta)", category: "Estructura & Contenedores" },
    { id: "accordion", label: "Accordion (Acordeón)", category: "Estructura & Contenedores" },
    { id: "modal", label: "Modal (Pop-up)", category: "Estructura & Contenedores" },
    { id: "offcanvas", label: "Offcanvas (Panel Deslizable)", category: "Estructura & Contenedores" },
    { id: "dropdown", label: "Dropdown Menu (Desplegable)", category: "Estructura & Contenedores" },
    { id: "table", label: "Table (Tabla de Datos)", category: "Datos & Visualización" },
    { id: "badge", label: "Badge (Etiqueta)", category: "Datos & Visualización" },
    { id: "avatar", label: "Avatar (Perfil)", category: "Datos & Visualización" },
    { id: "alert", label: "Alerts (Alertas)", category: "Utilidades & Feedback" },
    { id: "tooltip", label: "Tooltip (Información de Ayuda)", category: "Utilidades & Feedback" },
    { id: "spinner", label: "Spinner (Carga)", category: "Utilidades & Feedback" },
    { id: "kbd", label: "Kbd (Indicador de Teclado)", category: "Utilidades & Feedback" },
  ];

  const filteredItems = searchableItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Keyboard layout listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        setSearchQuery("");
      }
      
      // Open palette: Slash '/' (if not inside an input/textarea)
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
        setSearchQuery("");
      }

      // Inside Palette Controls
      if (isCommandPaletteOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          setIsCommandPaletteOpen(false);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex(prev => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex(prev => (filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filteredItems.length > 0 && filteredItems[selectedIndex]) {
            navigateTo(filteredItems[selectedIndex].id as SectionType);
            setIsCommandPaletteOpen(false);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCommandPaletteOpen, filteredItems, selectedIndex]);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased font-sans`}>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => window.location.hash = "#/"}
              title="Ir al Inicio"
            >
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                @vectorial-ia/via-ui
              </span>
              <span
                style={{
                  background: 'var(--via-primary-light, rgba(16, 185, 129, 0.06))',
                  color: 'var(--via-primary-dark, #059669)',
                  borderColor: 'var(--via-primary-border, rgba(16, 185, 129, 0.15))'
                }}
                className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase border"
              >
                v0.1.1
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search KBD Trigger Button */}
            <button
              onClick={() => {
                setIsCommandPaletteOpen(true);
                setSearchQuery("");
              }}
              className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-lg px-3 py-1.5 bg-gray-50/50 dark:bg-gray-900/30 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 w-36 sm:w-48 md:w-56 justify-between cursor-pointer transition-all"
            >
              <div className="flex items-center gap-1.5">
                <Search size={13} />
                <span className="hidden sm:inline">Buscar...</span>
                <span className="sm:hidden">Buscar</span>
              </div>
              <div className="flex items-center gap-1">
                <Kbd size="sm">Ctrl</Kbd>
                <Kbd size="sm">K</Kbd>
              </div>
            </button>

            {/* Color Selector */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 rounded-lg px-2.5 py-1.5 bg-gray-50/50 dark:bg-gray-900/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1 hidden md:inline-block">Color:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { name: "Esmeralda", value: "#10b981" },
                  { name: "Océano", value: "#3b82f6" },
                  { name: "Amatista", value: "#8b5cf6" },
                  { name: "Ámbar", value: "#f59e0b" },
                  { name: "Rosa", value: "#f43f5e" }
                ].map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setPrimaryColor(color.value)}
                    style={{ background: color.value }}
                    className={`w-4 h-4 rounded-full border cursor-pointer transition-transform ${primaryColor === color.value ? "scale-125 border-gray-900 dark:border-white shadow-sm" : "border-transparent opacity-80 hover:opacity-100 hover:scale-110"}`}
                    title={color.name}
                  />
                ))}

                {/* Custom Color Input Picker */}
                <div className="relative w-4 h-4 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer bg-white">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="absolute inset-0 w-full h-full p-0 border-0 cursor-pointer opacity-0 scale-150"
                    title="Color personalizado"
                  />
                  <span className="text-[8px] font-extrabold text-gray-500 pointer-events-none">+</span>
                </div>
              </div>
            </div>

            <span className="hidden lg:inline-block text-xs font-semibold text-gray-400">
              VECTORIAL IA
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-600" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Navigation Sidebar with Categorized Groups - Hidden on Landing Page */}
        {activeSection !== "landing" && (
          <aside className="w-64 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 shrink-0">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6">
              <nav className="space-y-6">
                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Comenzando
                  </h5>
                  <Sidebar
                    items={startGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>

                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Formularios & Botones
                  </h5>
                  <Sidebar
                    items={formsGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>

                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Navegación
                  </h5>
                  <Sidebar
                    items={navigationGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>

                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Estructura & Contenedores
                  </h5>
                  <Sidebar
                    items={layoutGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>

                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Datos & Visualización
                  </h5>
                  <Sidebar
                    items={dataGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>

                <div>
                  <h5 className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Utilidades & Feedback
                  </h5>
                  <Sidebar
                    items={feedbackGroup}
                    value={activeSection}
                    onChange={(id) => navigateTo(id as SectionType)}
                    size="sm"
                  />
                </div>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 px-6 py-10 md:px-12 ${activeSection === "landing" ? "max-w-7xl" : "max-w-6xl"} mx-auto min-h-[calc(100vh-4rem)] w-full`}>
          {activeSection === "landing" && <Intro />}
          {activeSection === "intro" && <IntroDoc />}
          {activeSection === "button" && <ButtonDoc />}
          {activeSection === "select" && <SelectDoc />}
          {activeSection === "input" && <InputDoc />}
          {activeSection === "badge" && <BadgeDoc />}
          {activeSection === "page-header" && <PageHeaderDoc />}
          {activeSection === "sidebar" && <SidebarDoc />}
          {activeSection === "switch" && <SwitchDoc />}
          {activeSection === "card" && <CardDoc />}
          {activeSection === "checkbox" && <CheckboxDoc />}
          {activeSection === "floating-input" && <FloatingInputDoc />}
          {activeSection === "accordion" && <AccordionDoc />}
          {activeSection === "alert" && <AlertDoc />}
          {activeSection === "breadcrumb" && <BreadcrumbDoc />}
          {activeSection === "modal" && <ModalDoc />}
          {activeSection === "dropdown" && <DropdownDoc />}
          {activeSection === "offcanvas" && <OffcanvasDoc />}
          {activeSection === "avatar" && <AvatarDoc />}
          {activeSection === "tabs" && <TabsDoc />}
          {activeSection === "tooltip" && <TooltipDoc />}
          {activeSection === "spinner" && <SpinnerDoc />}
          {activeSection === "table" && <TableDoc />}
          {activeSection === "kbd" && <KbdDoc />}
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-6 text-center text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>
            Desarrollado para <strong>VECTORIAL IA</strong>. Entorno de pruebas interactivo.
          </span>
          <div className="flex gap-4">
            <span className="hover:text-primary-500 transition-colors cursor-pointer">Términos</span>
            <span className="hover:text-primary-500 transition-colors cursor-pointer">Privacidad</span>
          </div>
        </div>
      </footer>

      {/* KBD Command Palette Search Modal */}
      {isCommandPaletteOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setIsCommandPaletteOpen(false)}
        >
          <div 
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 border-b border-gray-200 dark:border-gray-800 h-14 shrink-0">
              <Command size={18} className="text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                autoFocus
                placeholder="Escribe para buscar un componente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-full bg-transparent border-none outline-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <Kbd size="sm">Esc</Kbd>
            </div>

            {/* List Results */}
            <div className="max-h-[320px] overflow-y-auto py-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigateTo(item.id);
                        setIsCommandPaletteOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                        isSelected 
                          ? "bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white" 
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{item.label}</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gray-200/50 dark:bg-gray-800 text-gray-400 dark:text-gray-500">
                          {item.category}
                        </span>
                      </div>
                      
                      {isSelected && (
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <span>Ir a</span>
                          <CornerDownLeft size={10} />
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-sm text-gray-400 dark:text-gray-500">
                  No se encontraron resultados para <strong className="text-gray-600 dark:text-gray-300">"{searchQuery}"</strong>
                </div>
              )}
            </div>

            {/* Footer guide */}
            <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 py-3 bg-gray-50/50 dark:bg-gray-900/30 text-[10px] text-gray-400 dark:text-gray-500 font-medium shrink-0 select-none">
              <div className="flex items-center gap-1.5">
                <span>Navegar</span>
                <Kbd size="sm">↑</Kbd>
                <Kbd size="sm">↓</Kbd>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Seleccionar</span>
                <Kbd size="sm">Enter ↵</Kbd>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Abrir</span>
                <Kbd size="sm">/</Kbd>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
