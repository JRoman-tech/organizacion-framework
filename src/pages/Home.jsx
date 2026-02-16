import { FolderTree, Rocket, LayoutGrid } from "lucide-react";

const items = [
  {
    icon: <FolderTree size={20} />,
    title: "Estructura del framework",
    desc: "La organización de carpetas corresponde a React + Vite (src, public, main.jsx, App.jsx).",
  },
  {
    icon: <LayoutGrid size={20} />,
    title: "Archivos organizados",
    desc: "Separación por responsabilidad: pages, components, styles y assets.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Funcional",
    desc: "El proyecto corre correctamente con npm run dev y es desplegable.",
  },
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero">

        <h2 className="title">Organización de carpetas y archivos</h2>
        <p className="subtitle">
          Proyecto ejemplo con estructura limpia, escalable y alineada a React + Vite.
        </p>

        <div className="actions">
          <a className="btn primary" href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            Ver Vite
          </a>
          <a className="btn ghost" href="https://react.dev/" target="_blank" rel="noreferrer">
            Ver React
          </a>
        </div>
      </section>

      <section className="grid">
        {items.map((it) => (
          <article key={it.title} className="card">
            <div className="cardIcon">{it.icon}</div>
            <h3 className="cardTitle">{it.title}</h3>
            <p className="cardDesc">{it.desc}</p>
          </article>
        ))}
      </section>

      <section className="treeCard">
        <div className="treeHeader">
          <FolderTree size={18} />
          <h3>Estructura del proyecto</h3>
        </div>

        <pre className="tree">
{`organizacion-framework/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ styles/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js`}
        </pre>
      </section>
    </main>
  );
}
