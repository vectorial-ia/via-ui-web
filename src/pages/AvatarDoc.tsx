import React, { useState } from "react";
import { Avatar, Button, Input } from "@vectorial-ia/via-ui";
import DocHeader from "../components/DocHeader";
import PropsTable, { PropItem } from "../components/PropsTable";
import SandboxLayout from "../components/SandboxLayout";

export function AvatarDoc() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [shape, setShape] = useState<"circle" | "square">("circle");
  const [status, setStatus] = useState<"online" | "offline" | "none">("online");
  const [name, setName] = useState("Ronal Llapapasca");
  const [src, setSrc] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80");

  const avatarProps: PropItem[] = [
    {
      name: "src",
      type: "string",
      description: "URL de la imagen del avatar. Si falla al cargar, muestra las iniciales."
    },
    {
      name: "name",
      type: "string",
      description: "Nombre para generar las iniciales de respaldo en caso de que falte o falle la imagen."
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultVal: '"md"',
      description: "Tamaño general del avatar (sm: 32px, md: 40px, lg: 56px)."
    },
    {
      name: "shape",
      type: '"circle" | "square"',
      defaultVal: '"circle"',
      description: "Forma del marco del avatar."
    },
    {
      name: "status",
      type: '"online" | "offline" | "none"',
      defaultVal: '"none"',
      description: "Muestra un indicador de estado en la esquina inferior derecha."
    },
    {
      name: "fallbackBg",
      type: "string",
      defaultVal: '"var(--via-primary-light)"',
      description: "Color de fondo cuando se muestran las iniciales de respaldo."
    },
    {
      name: "fallbackColor",
      type: "string",
      defaultVal: '"var(--via-primary-dark)"',
      description: "Color del texto cuando se muestran las iniciales de respaldo."
    }
  ];

  const controls = (
    <>
      <div>
        <Input
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <Input
          label="Imagen (URL)"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
      </div>

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

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Forma (Shape)</label>
        <div className="flex gap-2">
          {(["circle", "square"] as const).map((sh) => (
            <Button
              key={sh}
              onClick={() => setShape(sh)}
              variant={shape === sh ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {sh}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">Estado (Status)</label>
        <div className="flex gap-2">
          {(["online", "offline", "none"] as const).map((st) => (
            <Button
              key={st}
              onClick={() => setStatus(st)}
              variant={status === st ? "primary" : "secondary"}
              size="sm"
              style={{ flexGrow: 1 }}
            >
              {st}
            </Button>
          ))}
        </div>
      </div>
    </>
  );

  const preview = (
    <div className="flex items-center gap-6">
      <Avatar
        src={src || undefined}
        name={name}
        size={size}
        shape={shape}
        status={status}
      />
      <Avatar
        name={name}
        size={size}
        shape={shape}
        status={status}
      />
    </div>
  );

  const codeString = `import { Avatar } from "@vectorial-ia/via-ui";

function Example() {
  return (
    <Avatar
      src="${src}"
      name="${name}"
      size="${size}"
      shape="${shape}"
      status="${status}"
    />
  );
}`;

  return (
    <div className="space-y-10 animate-fadeIn">
      <DocHeader
        category="Componente"
        title="Avatar (Perfil de Usuario)"
        description="Representación gráfica o textual de iniciales para perfiles de usuario, con soportes de estado e imágenes de respaldo."
      />

      <SandboxLayout
        controls={controls}
        preview={preview}
        codeString={codeString}
        minHeight="180px"
      />

      <PropsTable propsList={avatarProps} />
    </div>
  );
}

export default AvatarDoc;
