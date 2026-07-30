import React, { useState } from "react";
import { Sliders } from "lucide-react";
import { Tabs, Code } from "@vectorial-ia/via-ui";

interface SandboxLayoutProps {
  controls: React.ReactNode;
  preview: React.ReactNode;
  codeString: string;
  minHeight?: string;
}

export function SandboxLayout({ controls, preview, codeString, minHeight = "auto" }: SandboxLayoutProps) {
  const [activeTab, setActiveTab] = useState("preview");

  const sandboxTabs = [
    { id: "preview", label: "Vista Previa" },
    { id: "code", label: "Código" }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-base font-bold flex items-center gap-2">
        <Sliders size={16} className="text-primary-500" />
        Interactúa y Prueba (Sandbox)
      </h2>

      <div className="grid gap-6 md:grid-cols-3 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
        {/* Left Controls */}
        <div className="p-5 bg-gray-50/50 dark:bg-gray-900/30 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 space-y-4">
          {controls}
        </div>

        {/* Right Tabbed Panel */}
        <div className="md:col-span-2 flex flex-col bg-white dark:bg-gray-950" style={{ minHeight }}>
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/10 px-4 py-2 flex items-center justify-between">
            <Tabs
              items={sandboxTabs}
              activeId={activeTab}
              onChange={(id) => setActiveTab(id)}
              variant="pills"
              size="sm"
              style={{ width: "fit-content", background: "transparent" }}
            />
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider hidden sm:inline-block">
              {activeTab === "preview" ? "Entorno Interactivo" : "Código Fuente completo"}
            </span>
          </div>

          {/* Tab Content Box */}
          <div className="flex-grow flex flex-col p-5">
            {activeTab === "preview" ? (
              <div className="flex-grow flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] rounded-lg border border-gray-100 dark:border-gray-900">
                {preview}
              </div>
            ) : (
              <div className="flex-grow flex flex-col justify-start">
                <Code code={codeString} language="tsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SandboxLayout;
