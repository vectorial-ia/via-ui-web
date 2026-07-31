import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead, Badge, Button } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function TableDoc() {
  const [striped, setStriped] = useState(false);
  const [hoverable, setHoverable] = useState(true);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const tableProps: PropItem[] = [
    {
      name: "striped",
      type: "boolean",
      defaultVal: "false",
      description: "Habilita el fondo alterno (cebreado) en las filas de la tabla."
    },
    {
      name: "hoverable",
      type: "boolean",
      defaultVal: "true",
      description: "Resalta la fila de la tabla cuando el cursor del mouse pasa sobre ella."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Define el tamaño de celda y espaciado (padding) del texto."
    },
    {
      name: "containerStyle",
      type: "React.CSSProperties",
      description: "Estilos personalizados inline para el contenedor externo de desplazamiento."
    }
  ];

  const sampleData = [
    { id: 101, user: "Juan Pérez", email: "juan.perez@vectorial.ai", action: "PAGE_VIEW", path: "/admin/dashboard", time: "10:32:15" },
    { id: 102, user: "Ana Gómez", email: "ana.gomez@vectorial.ai", action: "CLICK", path: "/admin/interactions", time: "10:33:40" },
    { id: 103, user: "Carlos Ruiz", email: "carlos.ruiz@vectorial.ai", action: "PAGE_VIEW", path: "/admin/settings", time: "10:35:02" },
    { id: 104, user: "Sofía Castro", email: "sofia.castro@vectorial.ai", action: "SUBMIT", path: "/api/v1/update", time: "10:38:12" },
  ];

  const controls = (
    <>
      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Comportamiento</label>
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => setStriped(!striped)}
            variant={striped ? "primary" : "secondary"}
            size="sm"
            style={{ justifyContent: "flex-start" }}
          >
            {striped ? "Striped: Activado" : "Striped: Desactivado"}
          </Button>
          <Button
            onClick={() => setHoverable(!hoverable)}
            variant={hoverable ? "primary" : "secondary"}
            size="sm"
            style={{ justifyContent: "flex-start" }}
          >
            {hoverable ? "Hoverable: Activado" : "Hoverable: Desactivado"}
          </Button>
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Size (Tamaño)</label>
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
    </>
  );

  const preview = (
    <div className="w-full">
      <Table striped={striped} hoverable={hoverable} size={size}>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Acción</TableHead>
            <TableHead>Ruta / Recurso</TableHead>
            <TableHead>Hora</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ fontWeight: 600, color: "#64748b" }}>#{row.id}</TableCell>
              <TableCell>
                <div>
                  <div style={{ fontWeight: 600 }}>{row.user}</div>
                  <div style={{ fontSize: "10px", color: "#64748b" }}>{row.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={row.action === 'PAGE_VIEW' ? 'teal' : 'primary'} size="sm">
                  {row.action}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="code">{row.path}</Badge>
              </TableCell>
              <TableCell style={{ color: "#64748b" }}>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const codeString = `import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead, Badge } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Table striped={${striped}} hoverable={${hoverable}} size="${size}">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Usuario</TableHead>
          <TableHead>Acción</TableHead>
          <TableHead>Ruta / Recurso</TableHead>
          <TableHead>Hora</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#101</TableCell>
          <TableCell>Juan Pérez</TableCell>
          <TableCell>
            <Badge variant="teal" size="sm">PAGE_VIEW</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="code">/admin/dashboard</Badge>
          </TableCell>
          <TableCell>10:32:15</TableCell>
        </TableRow>
        {/* ... */}
      </TableBody>
    </Table>
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Table (Tabla de Datos)"
        description="Una grilla de datos altamente adaptable y de estilo premium con soporte para desplazamiento responsivo, filas alternas y realce dinámico al pasar el cursor."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="260px"
      />

      <PropsTable propsList={tableProps} />
    </div>
  );
}

export default TableDoc;
