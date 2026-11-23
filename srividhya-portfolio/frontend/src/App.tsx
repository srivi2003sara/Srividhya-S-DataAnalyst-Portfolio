import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Competencies from './sections/Competencies';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';
export default function App() {
  const [theme,setTheme] = useState<'dark'|'light'>(() => (localStorage.getItem('portfolio-theme') as 'dark'|'light') || 'dark');
  const [menuOpen,setMenuOpen] = useState(false);
  useEffect(()=>{document.documentElement.dataset.theme=theme; localStorage.setItem('portfolio-theme',theme);},[theme]);
  const toggle=()=>setTheme(current=>current==='dark'?'light':'dark');
  return <div className="app-shell"><Sidebar theme={theme} onToggle={toggle}/><header className="mobile-header"><a className="brand-mark" href="#home">S<span>.</span></a><div><ThemeToggle theme={theme} onToggle={toggle}/><button className="icon-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X size={20}/>:<Menu size={20}/>}</button></div>{menuOpen&&<nav className="mobile-menu">{['home','about','experience','projects','skills','education','contact'].map(id=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}>{id[0].toUpperCase()+id.slice(1)}</a>)}</nav>}</header><main className="main-content"><div className="topbar"><span className="topbar-label">PORTFOLIO <i/> DATA ANALYTICS</span><div className="topbar-right"><span>BASED IN INDIA</span><ThemeToggle theme={theme} onToggle={toggle}/></div></div><Hero/><About/><Experience/><Projects/><Skills/><Education/><Competencies/><Contact/><Footer/></main></div>;
}