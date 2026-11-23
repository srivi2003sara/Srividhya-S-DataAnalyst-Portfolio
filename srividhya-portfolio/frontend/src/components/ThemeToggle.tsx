import { Moon, Sun } from 'lucide-react';
type Props = { theme: 'dark' | 'light'; onToggle: () => void };
export default function ThemeToggle({ theme, onToggle }: Props) {
  return <button className="icon-button theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle theme">{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>;
}