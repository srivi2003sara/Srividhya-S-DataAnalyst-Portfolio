import { BriefcaseBusiness, Code2, GraduationCap, House, Mail, UserRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
type Props = { theme: 'dark' | 'light'; onToggle: () => void };
const links: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'home', label: 'Home', icon: House }, { id: 'about', label: 'About', icon: UserRound },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness }, { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap }, { id: 'contact', label: 'Contact', icon: Mail }
];
export default function Sidebar({ theme, onToggle }: Props) {
  return <aside className="sidebar">
    <a className="brand-mark" href="#home" aria-label="Srividhya home">S<span>.</span></a>
    <nav className="side-nav" aria-label="Main navigation">{links.map(({id,label,icon:Icon},i) => <a key={id} href={`#${id}`} className={i===0?'nav-icon active':'nav-icon'} aria-label={label} title={label}><Icon size={19}/></a>)}</nav>
    <div className="sidebar-bottom"><ThemeToggle theme={theme} onToggle={onToggle}/><a className="sidebar-linkedin" href="https://www.linkedin.com/in/srividhya-s-b62541212/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div>
  </aside>;
}