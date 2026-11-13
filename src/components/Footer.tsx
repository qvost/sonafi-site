import { useRef } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Globe2, ArrowUp, Play, Mail } from 'lucide-react';
import { officialSite } from '../sanofi-content';
import { FooterBrandModel } from './FooterBrandModel';

const footerGroups = [
    { title: 'Discover Sanofi', links: [['Our company', '/en/our-company'], ['Our science', '/en/our-science'], ['Our pipeline', '/en/our-science/our-pipeline'], ['Careers', 'https://jobs.sanofi.com']] },
    { title: 'Here for you', links: [['Patients', '/en/patients'], ['Healthcare professionals', '/en/patients/taking-medicines-safely'], ['Researchers & partners', '/en/partnering'], ['Investors', '/en/investors']] },
    { title: 'Stay connected', links: [['Media room', '/en/media-room'], ['Contact us', '/en/contact'], ['Report a side effect', '/en/contact']] },
];

// Public contact details verified at https://github.com/qvost on 2026-11-13.
const creator = {
    name: 'Siddid Pandey',
    email: 'qvostwon@gmail.com',
    github: 'https://github.com/qvost',
    linkedin: 'https://linkedin.com/in/qvost',
};

/** Footer links remain stationary while the decorative brand model follows native scroll. */
export function Footer({ onCountries, onAbout }: {
    onCountries: () => void;
    onAbout: () => void;
}) {
    const footer = useRef<HTMLElement>(null);
    const reducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: footer, offset: ['start end', 'end end'] });
    const modelY = useTransform(scrollYProgress, [0, 0.8], [34, -20]);
    const modelRotateX = useTransform(scrollYProgress, [0, 0.8], [14, -8]);
    const modelRotateY = useTransform(scrollYProgress, [0, 0.8], [-22, 16]);
    const modelRotateZ = useTransform(scrollYProgress, [0, 0.8], [-5, 3]);

    return (
        <footer ref={footer} className="site-footer" aria-labelledby="footer-title">
            <div className="section-shell">
                <div className="footer-head">
                    <h2 id="footer-title">Contact and resources</h2>
                    <FooterBrandModel
                        y={reducedMotion ? 0 : modelY}
                        rotateX={reducedMotion ? 0 : modelRotateX}
                        rotateY={reducedMotion ? 0 : modelRotateY}
                        rotateZ={reducedMotion ? 0 : modelRotateZ}
                    />
                    <a href="#top" className="footer-top" aria-label="Back to top"><ArrowUp size={26} /></a>
                </div>
                <div className="footer-columns">
                    <div className="footer-brand">
                        <img src="/sanofi-logo.svg" alt="Sanofi" width="142" height="40" />
                        <p>Research-driven biopharmaceuticals.</p>
                        <button className="country-button" onClick={onCountries}><Globe2 size={17} /> Global / English <ArrowUpRight size={17} /></button>
                    </div>
                    {footerGroups.map(group => (
                        <div className="footer-group" key={group.title}>
                            <h3>{group.title}</h3>
                            {group.links.map(([label, url]) => <a key={label} href={url.startsWith('https') ? url : officialSite + url} target="_blank" rel="noreferrer">{label}</a>)}
                        </div>
                    ))}
                </div>
                <section className="footer-creator-credit" aria-labelledby="creator-credit-title">
                    <div className="creator-identity">
                        <p id="creator-credit-title">Design and development</p>
                        <span>{creator.name}</span>
                    </div>
                    <nav className="creator-contact-links" aria-label="Contact Siddid Pandey">
                        <a href={`mailto:${creator.email}`}><Mail size={15} /><span>{creator.email}</span></a>
                        <a href={creator.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                        <a href={creator.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>
                    </nav>
                </section>
                <div className="footer-bottom">
                    <span>© 2026 Sanofi · Independent design concept</span>
                    <div>
                        <a href={`${officialSite}/en/privacy-and-data-protection`} target="_blank" rel="noreferrer">Privacy</a>
                        <a href={`${officialSite}/en/legal-notice-and-terms-of-use`} target="_blank" rel="noreferrer">Legal</a>
                        <button onClick={onAbout}>About this concept</button>
                    </div>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/sanofi" target="_blank" rel="noreferrer" aria-label="Sanofi on LinkedIn"><span className="linkedin-mark">in</span></a>
                        <a href="https://www.youtube.com/@sanofi" target="_blank" rel="noreferrer" aria-label="Sanofi on YouTube"><Play size={18} /></a>
                        <a href="https://x.com/sanofi" target="_blank" rel="noreferrer" aria-label="Sanofi on X">𝕏</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
