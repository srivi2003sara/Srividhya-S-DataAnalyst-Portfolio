import { MapPin } from 'lucide-react';
type Experience = { company: string; role: string; location: string; period: string; points: string[] };
export default function ExperienceItem({ item }: { item: Experience }) {
  return <article className="experience-item"><div className="timeline-dot"/><div className="experience-meta"><span>{item.period}</span><span className="location"><MapPin size={13}/>{item.location}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul></article>;
}