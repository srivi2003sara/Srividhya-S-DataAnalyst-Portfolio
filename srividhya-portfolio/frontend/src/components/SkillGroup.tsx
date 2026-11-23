import { Database, LineChart, Cloud, Code2, Wrench, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
const icons: Record<string, LucideIcon> = { 'Business Intelligence & Reporting': LineChart, 'Data & Analytics': Database, 'Data Engineering & Cloud': Cloud, 'Databases': Database, 'Tools & Collaboration': Wrench, 'Additional Knowledge': Sparkles };
export default function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  const Icon = icons[title] || Code2;
  return <article className="skill-card"><div className="skill-card-title"><span className="skill-icon"><Icon size={18}/></span><h3>{title}</h3></div><div className="tag-list">{skills.map(skill=><span key={skill}>{skill}</span>)}</div></article>;
}