import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play, Pause, VolumeX } from 'lucide-react';
import { imagePath, partnershipUrl } from '../sanofi-content';
/** Cinematic hero scales its media with native scroll progress. */
export function Hero({ onFilm }: {
    onFilm: () => void;
}) {
    const container = useRef<HTMLElement>(null);
    const video = useRef<HTMLVideoElement>(null);
    const reduce = useReducedMotion();
    const [playing, setPlaying] = useState(!reduce);
    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end start'] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
    function toggleVideo() { if (!video.current)
        return; if (playing)
        video.current.pause();
    else
        void video.current.play().catch(() => setPlaying(false)); setPlaying(!playing); }
    return <section id="top" className="hero" ref={container} aria-labelledby="hero-title"><motion.div className="hero-media" style={{ scale: reduce ? 1 : scale }}><video ref={video} className="hero-video" muted loop playsInline autoPlay={!reduce} poster={imagePath('hero-poster.jpg')} onError={() => setPlaying(false)}><source src={imagePath('web-sanofi-tour-de-france-partnership.mp4')} type="video/mp4"/></video></motion.div><div className="hero-shade"/><div className="hero-content"><h1 id="hero-title"><span className="hero-kicker">Tour de France</span>{['The race for', 'health is on.'].map((line, i) => <span className="line-mask" key={line}><motion.span initial={{ y: reduce ? 0 : '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: .15 + i * .12, ease: [.16, 1, .3, 1] }}>{line}</motion.span></span>)}</h1><p className="hero-description">From 2027, Sanofi is a major partner of the Tour de France and Tour de France Femmes avec Zwift, sponsoring the white jersey in both races.</p><div className="hero-buttons"><a className="button button-purple" href={partnershipUrl} target="_blank" rel="noreferrer">Explore the partnership <ArrowUpRight size={19}/></a><button className="button button-film" onClick={onFilm}><span className="play-ring"><Play size={13} fill="currentColor"/></span> Watch the film</button></div></div><div className="hero-bottom"><a className="discover-link" href="#science"><span className="round-arrow"><ArrowDown size={17}/></span><span>Our science</span></a><div className="partnership-mark"><span className="tour-wordmark">Tour de<br /><b>France</b><i>●</i></span><span className="partnership-line"/><span>OFFICIAL MAJOR PARTNER<br /><strong>WHITE JERSEY · FROM 2027</strong></span></div><div className="video-controls"><VolumeX size={16}/><span className="eyebrow">SOUND OFF</span><button className="icon-button" onClick={toggleVideo} aria-label={playing ? 'Pause background video' : 'Play background video'}>{playing ? <Pause size={16}/> : <Play size={16}/>}</button></div></div></section>;
}
