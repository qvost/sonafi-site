import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ArrowUpRight, FlaskConical, Globe2 } from 'lucide-react';
import { BrandPreloader } from './components/BrandPreloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScienceMetrics } from './components/ScienceMetrics';
import { PipelineMatrix } from './components/PipelineMatrix';
import { BrandJourney } from './components/BrandJourney';
import { StoriesGrid } from './components/StoriesGrid';
import { MetricsBento } from './components/MetricsBento';
import { PressRoom } from './components/PressRoom';
import { Footer } from './components/Footer';
import { ClinicalDialog } from './components/ClinicalDialog';
import { SearchDialog } from './components/SearchDialog';
import { imagePath, officialSite, partnershipUrl, type PipelineMedicine, type PatientStory } from './sanofi-content';
type ActiveDialog = {
    kind: 'search';
} | {
    kind: 'medicine';
    medicine: PipelineMedicine;
} | {
    kind: 'film';
} | {
    kind: 'story';
    story: PatientStory;
} | {
    kind: 'countries';
} | {
    kind: 'about';
} | null;
function getInitialTheme() { try {
    return localStorage.getItem('sanofi-theme') === 'light';
}
catch {
    return false;
} }
/** App owns the single active dialog so overlapping modal states cannot occur. */
export default function SanofiApp() {
    const [dialog, setDialog] = useState<ActiveDialog>(null);
    const [loading, setLoading] = useState(true);
    const finishLoading = useCallback(() => setLoading(false), []);
    const [light, setLight] = useState(getInitialTheme);
    const closeDialog = useCallback(() => setDialog(null), []);
    useEffect(() => { document.documentElement.dataset.theme = light ? 'light' : 'dark'; try {
        localStorage.setItem('sanofi-theme', light ? 'light' : 'dark');
    }
    catch { } }, [light]);
    useEffect(() => { function onKey(e: KeyboardEvent) { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setDialog(current => current?.kind === 'search' ? null : { kind: 'search' });
    } } window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
    const openMedicine = (medicine: PipelineMedicine) => setDialog({ kind: 'medicine', medicine });
    return <MotionConfig reducedMotion="user">{loading && <BrandPreloader onComplete={finishLoading} />}<div inert={loading}><a href="#main-content" className="skip-link">Skip to content</a><Navbar onSearch={() => setDialog({ kind: 'search' })} light={light} onTheme={() => setLight(v => !v)}/><main id="main-content"><Hero onFilm={() => setDialog({ kind: 'film' })}/><ScienceMetrics /><PipelineMatrix onMedicine={openMedicine}/><BrandJourney /><StoriesGrid onStory={story => setDialog({ kind: 'story', story })}/><MetricsBento /><PressRoom /></main><Footer onCountries={() => setDialog({ kind: 'countries' })} onAbout={() => setDialog({ kind: 'about' })}/>{dialog && <ClinicalDialog title={dialog.kind === 'medicine' ? dialog.medicine.name : dialog.kind === 'story' ? `${dialog.story.name}’s story` : dialog.kind === 'search' ? 'Medicine and trial search' : dialog.kind === 'film' ? 'The race for health — partnership film' : dialog.kind === 'countries' ? 'Select your region' : 'About this concept'} onClose={closeDialog} wide={dialog.kind === 'film'}>
 {dialog.kind === 'search' && <SearchDialog onMedicine={openMedicine}/>}
 {dialog.kind === 'medicine' && <><span className="eyebrow purple-text"><FlaskConical size={15}/> {dialog.medicine.area} / PROGRAM OVERVIEW</span><h2>{dialog.medicine.name}</h2><p className="dialog-subtitle">{dialog.medicine.generic}</p><span className="phase-badge">{dialog.medicine.phase} · Illustrative snapshot</span><div className="clinical-mechanism"><span className="eyebrow muted">MECHANISM OF ACTION</span><h3>{dialog.medicine.mechanism}</h3><p>{dialog.medicine.description}</p></div><div className="clinical-facts"><div><span className="eyebrow muted">PATIENT FOCUS</span><p>{dialog.medicine.condition}</p></div><div><span className="eyebrow muted">CLINICAL STUDY</span><a href={`https://clinicaltrials.gov/study/${dialog.medicine.trial}`} target="_blank" rel="noreferrer">{dialog.medicine.trial} <ArrowUpRight size={15}/></a></div></div><a className="button button-purple" href={`https://clinicaltrials.gov/study/${dialog.medicine.trial}`} target="_blank" rel="noreferrer">Explore the clinical study <ArrowUpRight size={18}/></a><p className="data-note">A curated design preview, not prescribing information. Trial and regulatory status can change. Refer to the study registry and local product information for current details.</p></>}
 {dialog.kind === 'film' && <><span className="eyebrow purple-text">SANOFI × TOUR DE FRANCE</span><h2>The race for health is on.</h2><video className="film-video" controls autoPlay playsInline poster={imagePath('hero-poster.jpg')}><source src={imagePath('web-sanofi-tour-de-france-partnership.mp4')} type="video/mp4"/><track kind="captions" src="/partnership-captions.vtt" srcLang="en" label="English" default/></video><p className="dialog-subtitle">The official partnership teaser · 15 seconds</p><p>From 2027, Sanofi supports the next generation as white jersey sponsor of the Tour de France and Tour de France Femmes avec Zwift.</p><a href={partnershipUrl} target="_blank" rel="noreferrer" className="text-link">Discover the partnership <ArrowUpRight size={18}/></a></>}
 {dialog.kind === 'story' && <><img className="dialog-story-image" src={imagePath(dialog.story.image)} alt={dialog.story.name}/><span className="eyebrow purple-text">CHASING MIRACLES / {dialog.story.country}</span><h2>{dialog.story.name}</h2><p className="dialog-subtitle">{dialog.story.condition}</p><p>{dialog.story.text}</p><a className="button button-purple" href={officialSite + dialog.story.url} target="_blank" rel="noreferrer">Read the story & watch on Sanofi <ArrowUpRight size={18}/></a></>}
 {dialog.kind === 'countries' && <><span className="eyebrow purple-text"><Globe2 size={16}/> Countries and regions</span><h2>Select your region</h2><p>Find local information, medicines and resources through Sanofi’s regional websites.</p><div className="country-grid">{[['Global · English', 'https://www.sanofi.com/en'], ['France · Français', 'https://www.sanofi.fr'], ['United States · English', 'https://www.sanofi.us'], ['United Kingdom · English', 'https://www.sanofi.co.uk'], ['Germany · Deutsch', 'https://www.sanofi.de'], ['China · 中文', 'https://www.sanofi.cn']].map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={17}/></a>)}</div><a className="text-link" href={`${officialSite}/en/contact`} target="_blank" rel="noreferrer">Explore all countries and regions <ArrowUpRight size={18}/></a></>}
 {dialog.kind === 'about' && <><span className="eyebrow purple-text">SANOFI REIMAGINED</span><h2>About this concept</h2><p>This independent executive pitch prototype is not an official Sanofi website. Official brand assets and campaign photography are used to demonstrate the proposed experience.</p><p>Portfolio records and headline figures are a curated snapshot from the project brief. The site does not provide medical or investment advice.</p><p>Patient stories link to Sanofi’s published originals. The film shown is the supplied official 15-second partnership teaser.</p><a className="text-link" href={`${officialSite}/en`} target="_blank" rel="noreferrer">Visit the official Sanofi website <ArrowUpRight size={18}/></a></>}
 </ClinicalDialog>}</div></MotionConfig>;
}
