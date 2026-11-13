import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { imagePath, patientStories, type PatientStory } from '../sanofi-content';

function StoryScrollCard({ story, index, onStory }: {
    story: PatientStory;
    index: number;
    onStory: (story: PatientStory) => void;
}) {
    const shell = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: shell, offset: ['start end', 'end start'] });
    const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [36 + index * 12, 0, -18]);
    const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.14, 1.08]);

    return (
        <motion.div ref={shell} className="story-scroll-shell" style={{ y: reducedMotion ? 0 : cardY }}>
            <button className={`story-card story-${index}`} onClick={() => onStory(story)} aria-label={`Read ${story.name}’s story`}>
                <motion.img
                    className="story-portrait"
                    src={imagePath(story.image)}
                    alt={`${story.name}, ${story.condition.toLowerCase()}`}
                    loading="lazy"
                    width="1920"
                    height="1080"
                    style={{ y: reducedMotion ? 0 : imageY, scale: reducedMotion ? 1 : imageScale }}
                />
                <div className="story-shade" />
                <span className="story-country eyebrow">{story.country} <ArrowUpRight size={17} /></span>
                <span className="story-content">
                    <span className="story-name">{story.name}</span>
                    <span className="story-theme">{story.condition}</span>
                    <span className="story-action"><span className="story-play"><Play size={12} fill="currentColor" /></span> Discover the story</span>
                </span>
            </button>
        </motion.div>
    );
}

/** Portraits move within independent card frames while story controls stay visible. */
export function StoriesGrid({ onStory }: { onStory: (story: PatientStory) => void }) {
    return (
        <section className="stories-section section-shell" id="stories" aria-labelledby="stories-title">
            <div className="section-heading">
                <h2 id="stories-title">Patients and people</h2>
                <p>Meet people living with chronic conditions and the colleagues working at Sanofi.</p>
            </div>
            <div className="stories-grid">
                {patientStories.map((story, index) => <StoryScrollCard key={story.name} story={story} index={index} onStory={onStory} />)}
            </div>
        </section>
    );
}
