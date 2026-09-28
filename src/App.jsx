import { useState } from "react";
import {
  Code2, MonitorSmartphone, Database, Boxes, Smartphone, Monitor, Globe, Palette,
  GraduationCap, Award, ExternalLink, Download, Send, AtSign, Github, Linkedin,
  Share2, BadgeCheck, CheckCircle2, Briefcase, Sparkles, BookOpen,
} from "lucide-react";

/* ====== DATA — edit di sini ====== */
const NAV = ["Tentang", "Keahlian", "Pengalaman", "Pendidikan", "Sertifikasi", "Kontak"];

const STATS = [
  ["2026", "Tahun Aktif"], ["4+", "Proyek Utama"], ["7", "Sertifikasi"], ["100%", "Fokus Pengiriman"],
];

const SKILLS = [
  { icon: MonitorSmartphone, title: "Frontend & Mobile", desc: "Aplikasi mobile lintas platform & web berperforma tinggi dengan sistem type-safe.",
    tags: [["React", 1], ["TypeScript", 1], ["JavaScript"], ["React Native", 1], ["HTML"], ["CSS"]] },
  { icon: Database, title: "Backend & Data", desc: "Basis data real-time, perancangan skema terstruktur, dan integrasi API yang tangguh.",
    tags: [["Supabase", 1], ["Database Integration"], ["Integrasi API", 1], ["Google Sheets / Spreadsheet", 2]] },
  { icon: Boxes, title: "Design & DevOps", desc: "Kontrol versi modern, alur otomatisasi deployment, dan kolaborasi desain tersistem.",
    tags: [["Git"], ["GitHub"], ["Vite", 1], ["Figma", 2], ["Vercel"], ["Netlify"], ["Hostinger"], ["Canva"]] },
];

const PROJECTS = [
  { icon: Smartphone, badge: "Proyek / Freelance • 2026", title: "Founder & Pengembang Aplikasi Mobile — Terasa",
    points: ["Mendirikan dan mengembangkan **Terasa**, aplikasi mobile pembelajaran Islam inovatif.",
             "Menggunakan **React Native** untuk membangun klien native dan merancang pengalaman belajar interaktif."],
    tags: [["React Native", 1], ["Aplikasi Mobile"], ["Pembelajaran Interaktif", 1]] },
  { icon: Monitor, badge: "Proyek • 2026", title: "Pengembang Web & Operator Sistem Kompetisi — Lomba Tembak Panglima TNI",
    points: ["Mengembangkan dan mengoperasikan sistem penilaian peserta, peringkat langsung, dan tampilan videotron berbasis web.",
             "Memanfaatkan React, TypeScript, Supabase, OOP, serta functional Google Sheets untuk alur data kompetisi secara real-time."],
    tags: [["React", 1], ["TypeScript"], ["Supabase"], ["Google Sheets", 2], ["Tampilan Realtime", 1]] },
  { icon: Globe, badge: "Freelance • 2026", title: "Pengembang Web Full-Stack — LPK Karisma Melati",
    points: ["Mengembangkan website untuk organisasi penyalur tenaga kerja perawat dan asisten rumah tangga.",
             "Merancang tata letak frontend menyeluruh, integrasi data backend, dan alur otomatisasi deployment."],
    tags: [["Full-Stack"], ["Pengembangan Web"], ["Deployment", 1], ["Layanan Caregiver"]] },
  { icon: Palette, badge: "Freelance • 2026", title: "Desainer UI / Grafis — LPK Karisma Melati",
    points: ["Merancang sistem antarmuka digital dan materi visual berkualitas tinggi menggunakan Figma.",
             "Memperkuat identitas visual perusahaan, materi pemasaran, dan kehadiran digital secara konsisten."],
    tags: [["Figma", 2], ["UI/UX"], ["Desain Grafis"], ["Identitas Brand", 1]] },
];

const CERTS = [
  ["Dicoding", "Belajar Membuat Front-end Web untuk Pemula", "Dicoding Indonesia • Manipulasi DOM, web storage, dan antarmuka web interaktif."],
  ["Dicoding", "Spec-Driven Development dengan Kiro", "Dicoding Indonesia • Spesifikasi arsitektural, pengujian API, dan jaminan kualitas sistem."],
  ["Dicoding", "Belajar Dasar Pemrograman JavaScript", "Dicoding Indonesia • Standar ES6+, konsep asynchronous, dan functional programming."],
  ["Eksplor Coding", "Belajar Dasar Web Development", "Eksplor Coding • Fondasi web modern, semantik terstruktur, styling, dan standar aksesibilitas."],
  ["Dicoding", "Belajar Dasar Pemrograman", "Dicoding Indonesia • Logika algoritmik, struktur komputasi, dan optimasi alur eksekusi kode."],
  ["Dicoding", "Belajar Membuat Aplikasi Menggunakan React", "Dicoding Indonesia • Logika algoritmik, struktur komputasi, dan optimasi alur eksekusi kode."],
];

const cls = (t) => (t[1] === 1 ? "tag cyan" : t[1] === 2 ? "tag gold" : "tag");
const rich = (s) => s.split("**").map((p, i) => (i % 2 ? <b key={i}>{p}</b> : p));

const Tags = ({ list }) => (
  <div className="tags">
    {list.map((t) => (
      <span key={t[0]} className={cls(t)}>{t[1] ? <i className="dot" /> : null}{t[0]}</span>
    ))}
  </div>
);

const Eyebrow = ({ icon: Icon, children }) => (
  <div className="eyebrow"><Icon size={14} />{children}</div>
);

export default function App() {
  const [active, setActive] = useState("Tentang");
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="nav">
        <a href="#tentang" className="brand"><span className="logo"><Code2 size={16} /></span>Ikram Madyaning</a>
        <nav className="links">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={active === n ? "on" : ""} onClick={() => setActive(n)}>{n}</a>
          ))}
        </nav>
        <div className="nav-right">
          <a href="#kontak" className="btn primary sm">Hubungi Saya</a>
          <span className="avatar"><img src="/profile.jpg" alt="Foto" /></span>
        </div>
      </header>

      {/* HERO */}
      <section id="tentang" className="hero">
        <div className="hero-text">
          <span className="chip"><i className="dot cyan-dot" />Tersedia untuk Freelance & Proyek</span>
          <h1>Pengembang Web &<br /><span className="grad">Aplikasi Mobile</span> Full‑Stack</h1>
          <p className="kicker">FULL - STACK WEB DEV • VIBE CODER • UI DESIGNER</p>
          <p className="lead">Halo, saya <span className="grad">Ikram madyaning</span>.<br />Saya adalah Seorang Web Developer yang memiliki ketertarikan pada teknologi, desain, dan pengembangan solusi digital. Saya senang mengubah ide menjadi pengalaman digital yang fungsional, menarik, dan mudah digunakan.</p>
          <div className="actions">
            <a href="#kontak" className="btn primary">Hubungi Saya <Send size={14} /></a>
            <a href="#" className="btn ghost"><Download size={14} /> Unduh CV</a>
          </div>
          <div className="stats">
            {STATS.map(([n, l]) => (
              <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>

        <div className="hero-photo">
          <div className="frame">
            <span className="float f1"><Code2 size={12} /> React & TypeScript</span>
            <span className="float f2"><Sparkles size={12} /> AI & Tech Enthusiast</span>
            <span className="float f3"><BookOpen size={12} /> Islamic EdTech (Terasa)</span>
            <div className="photo">
              <img src="/profile.jpg" alt="Ikram M. Qolbu Kamil" />
              <div className="name-card">
                <i className="dot gold-dot" />
                <div><b>Ikram M. Qolbu Kamil</b><small>Ponpes SMA TI HSI-IDN Sukabumi</small></div>
                <BadgeCheck size={18} className="verified" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="section">
        <div className="head">
          <div><Eyebrow icon={Monitor}>KEAHLIAN TEKNIS</Eyebrow><h2>Keahlian & Teknologi Utama</h2></div>
          <p className="side">Solusi terukur yang dibangun dengan presisi, modularitas tinggi, dan alur kerja pengembangan yang cepat.</p>
        </div>
        <div className="grid3">
          {SKILLS.map(({ icon: Icon, title, desc, tags }) => (
            <article className="card" key={title}>
              <span className="icon-box"><Icon size={22} /></span>
              <h3>{title}</h3><p className="muted">{desc}</p><Tags list={tags} />
            </article>
          ))}
        </div>
      </section>

      {/* PENGALAMAN */}
      <section id="pengalaman" className="section">
        <Eyebrow icon={Briefcase}>PORTOFOLIO KARYA</Eyebrow>
        <h2>Proyek Pilihan & Pengalaman Kerja</h2>
        <p className="muted mb">Hasil karya nyata, sistem produksi langsung, dan proyek independen.</p>
        <div className="grid2">
          {PROJECTS.map(({ icon: Icon, badge, title, points, tags }) => (
            <article className="card project" key={title}>
              <div className="row"><span className="badge">{badge}</span><Icon size={18} className="accent" /></div>
              <h3 className="big">{title}</h3>
              <ul>{points.map((p) => <li key={p}>{rich(p)}</li>)}</ul>
              <Tags list={tags} />
            </article>
          ))}
        </div>
      </section>

      {/* PENDIDIKAN */}
      <section id="pendidikan" className="section">
        <div className="card edu">
          <div>
            <Eyebrow icon={GraduationCap}>PENDIDIKAN FORMAL</Eyebrow>
            <h2 className="md">Ponpes SMA TI HSI-IDN Sukabumi</h2>
            <p className="accent sub">Siswa • Indonesia — Fokus Teknologi Informasi & Rekayasa Perangkat Lunak</p>
            <p className="lead">Pembelajaran intensif dalam fundamental rekayasa perangkat lunak, logika komputasi, arsitektur web modern, dan paradigma pengembangan aplikasi full-stack.</p>
          </div>
          <div className="edu-box"><Code2 size={26} className="accent" /><b>Fokus TI & Software</b><small>Angkatan 2026</small></div>
        </div>
      </section>

      {/* SERTIFIKASI */}
      <section id="sertifikasi" className="section">
        <div className="head">
          <div><Eyebrow icon={Award}>KREDENSIAL & KOMPETENSI</Eyebrow><h2>Sertifikasi<br />Profesional</h2></div>
          <div className="side-col">
            <p className="side">Pencapaian tersertifikasi dari platform industri yang membuktikan penguasaan teknik pemrograman modern.</p>
            <a href="#" className="more">Dan yang lain nya →</a>
          </div>
        </div>
        <div className="grid3">
          {CERTS.map(([org, title, desc]) => (
            <article className="card cert" key={title}>
              <div className="row"><span className="done"><CheckCircle2 size={13} /> Selesai 2026</span><small className="muted">{org}</small></div>
              <h3>{title}</h3><p className="muted">{desc}</p>
              <a href="#" className="cert-btn">Lihat Sertifikat <ExternalLink size={12} /></a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="section">
        <div className="card cta">
          <div>
            <small className="eyebrow-text">MARI BERKOLABORASI</small>
            <h2 className="xl">Mari Ciptakan Sesuatu<br />yang Luar Biasa</h2>
            <p className="muted">Punya ide proyek, membutuhkan aplikasi mobile yang tangguh, atau mencari pengembang full-stack berdedikasi? Mari terhubung.</p>
          </div>
          <div className="actions">
            <a href="mailto:email@contoh.com" className="btn primary"><AtSign size={14} /> Kirim Pesan Email</a>
            <a href="#" className="btn ghost"><Share2 size={14} /> Bagikan Portofolio</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div><a href="#tentang" className="brand sm"><Code2 size={14} /> Portofolio</a>
          <small>© 2026 Ikram M. Qolbu Kamil. Dibuat dengan presisi. Seluruh hak cipta dilindungi.</small></div>
        <div className="socials">
          <a href="#"><Github size={14} /> GitHub</a>
          <a href="#"><Linkedin size={14} /> LinkedIn</a>
          <a href="#"><AtSign size={14} /> Email</a>
        </div>
      </footer>
    </div>
  );
}
