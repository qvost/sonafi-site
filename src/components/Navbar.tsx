import { useState } from 'react';
import { Search, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
const links = [['Our science', 'science'], ['Pipeline', 'pipeline'], ['Stories', 'stories'], ['Our impact', 'impact'], ['Investors', 'investors']];
/** Global navigation retains keyboard access at mobile widths. */
export function Navbar({ onSearch, light, onTheme }: {
    onSearch: () => void;
    light: boolean;
    onTheme: () => void;
}) {
    const [menu, setMenu] = useState(false);
    return <header className="site-header"><a href="#top" aria-label="Sanofi home" className="brand-logo"><img src="/sanofi-logo.svg" alt="Sanofi" width="116" height="34"/></a><nav aria-label="Main navigation" className="desktop-nav">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="header-actions"><a className="stock-widget" href="#investors"><span className="status-dot"/> SAN <strong>€86.20</strong><span className="stock-change">+1.4% <ArrowUpRight size={12}/></span><small>ILLUSTRATIVE</small></a><span className="header-divider"/><button className="icon-button" onClick={onSearch} aria-label="Search medicines and clinical trials"><Search size={19}/><kbd>⌘K</kbd></button><button className="icon-button theme-toggle" onClick={onTheme} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}>{light ? <Moon size={18}/> : <Sun size={18}/>}</button><button className="icon-button mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></div>{menu && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}<ArrowUpRight /></a>)}</nav>}</header>;
}
