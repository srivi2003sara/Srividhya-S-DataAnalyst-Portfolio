import SectionHeading from '../components/SectionHeading';
import ExperienceItem from '../components/ExperienceItem';
import { experiences } from '../data/portfolio';
export default function Experience() { return <section id="experience" className="section-shell section-block"><SectionHeading eyebrow="WHERE I'VE WORKED" title="Professional experience" description="Experience across data analytics, business intelligence and reporting delivery."/><div className="timeline">{experiences.map(item=><ExperienceItem key={item.company} item={item}/>)}</div></section>; }