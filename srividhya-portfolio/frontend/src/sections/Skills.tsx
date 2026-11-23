import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { skillGroups } from '../data/portfolio';
export default function Skills() { return <section id="skills" className="section-shell section-block"><SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="Tools and capabilities used across analytics, reporting, data preparation and collaboration."/><div className="skills-grid">{skillGroups.map(group=><SkillGroup key={group.title} title={group.title} skills={group.skills}/>)}</div></section>; }