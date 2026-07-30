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
  RotateCw
} from "lucide-react";
import { Sidebar } from "@vectorial-ia/via-ui";
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

type SectionType =
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
  | "spinner";

interface NavItem {
  id: SectionType;
  label: string;
  icon: React.ReactNode;
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#3b82f6");

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
    "spinner"
  ];

  // Synchronize state with URL hash (e.g. #/button)
  const [activeSection, setActiveSection] = useState<SectionType>(() => {
    const hash = window.location.hash.replace("#/", "");
    if (validSections.includes(hash as SectionType)) {
      return hash as SectionType;
    }
    return "intro";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      if (validSections.includes(hash as SectionType)) {
        setActiveSection(hash as SectionType);
      } else {
        setActiveSection("intro");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (sectionId: SectionType) => {
    window.location.hash = "#/" + sectionId;
  };

  const startGroup: NavItem[] = [
    { id: "intro", label: "Introducción", icon: <BookOpen size={14} /> }
  ];

  const componentsGroup: NavItem[] = [
    { id: "button", label: "Button (Botón)", icon: <Terminal size={14} /> },
    { id: "select", label: "Select (Selector)", icon: <Layers size={14} /> },
    { id: "input", label: "Input (Campo)", icon: <Type size={14} /> },
    { id: "badge", label: "Badge (Etiqueta)", icon: <Tag size={14} /> },
    { id: "page-header", label: "PageHeader (Cabecera)", icon: <Heading size={14} /> },
    { id: "sidebar", label: "Sidebar (Navegación)", icon: <Columns2 size={14} /> },
    { id: "switch", label: "Switch (Interruptor)", icon: <ToggleLeft size={14} /> },
    { id: "card", label: "Card (Tarjeta)", icon: <CreditCard size={14} /> },
    { id: "checkbox", label: "Checks & Radios", icon: <CheckSquare size={14} /> },
    { id: "floating-input", label: "Floating Labels", icon: <FileInput size={14} /> },
    { id: "accordion", label: "Accordion", icon: <ChevronsUpDown size={14} /> },
    { id: "alert", label: "Alerts (Alertas)", icon: <AlertCircle size={14} /> },
    { id: "breadcrumb", label: "Breadcrumb", icon: <Compass size={14} /> },
    { id: "modal", label: "Modal (Pop-up)", icon: <Maximize2 size={14} /> },
    { id: "dropdown", label: "Dropdown Menu", icon: <Menu size={14} /> },
    { id: "offcanvas", label: "Offcanvas Drawer", icon: <PanelRightClose size={14} /> },
    { id: "avatar", label: "Avatar (Perfil)", icon: <User size={14} /> },
    { id: "tabs", label: "Tabs (Pestañas)", icon: <Folder size={14} /> },
    { id: "tooltip", label: "Tooltip (Ayuda)", icon: <HelpCircle size={14} /> },
    { id: "spinner", label: "Spinner (Carga)", icon: <RotateCw size={14} /> },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased font-sans`}>
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
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
                v0.1.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
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

            <span className="hidden sm:inline-block text-xs font-semibold text-gray-400">
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
        {/* Navigation Sidebar */}
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
                  Componentes
                </h5>
                <Sidebar
                  items={componentsGroup}
                  value={activeSection}
                  onChange={(id) => navigateTo(id as SectionType)}
                  size="sm"
                />
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-10 md:px-12 max-w-6xl mx-auto min-h-[calc(100vh-4rem)]">
          {activeSection === "intro" && <Intro />}
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
    </div>
  );
}
