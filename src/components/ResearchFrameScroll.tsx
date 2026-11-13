import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { imagePath } from '../sanofi-content';

/** Native scroll expands the research photograph; reverse scroll restores its frame. */
export function ResearchFrameScroll() {
    const scene = useRef<HTMLElement>(null);
    const reducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start start', 'end end'],
    });
    const clipPath = useTransform(
        scrollYProgress,
        [0.04, 0.68],
        ['inset(12% 8% round 12px)', 'inset(0% 0% round 0px)'],
    );
    const imageScale = useTransform(scrollYProgress, [0.04, 0.68], [1.16, 1]);
    const copyY = useTransform(scrollYProgress, [0.04, 0.68], [18, 0]);

    return (
        <section
            ref={scene}
            className="research-frame-scene"
            aria-labelledby="research-frame-title"
            data-reduced-motion={reducedMotion ? 'true' : undefined}
        >
            <div className="research-frame-stage">
                <motion.div
                    className="research-frame-panel"
                    style={{ clipPath: reducedMotion ? 'none' : clipPath }}
                >
                    <motion.img
                        className="research-frame-image"
                        src={imagePath('matt-truppo-ai-in-rd_20261104124542.jpg')}
                        alt="A Sanofi scientist in a laboratory with automated research equipment"
                        loading="lazy"
                        width="1920"
                        height="1080"
                        style={{ scale: reducedMotion ? 1 : imageScale }}
                    />
                    <div className="research-frame-shade" />
                    <motion.div
                        className="research-frame-copy"
                        style={{ y: reducedMotion ? 0 : copyY }}
                    >
                        <h2 id="research-frame-title">AI in research<br />and development</h2>
                        <p>Combining biological research with data science to support the discovery and development of medicines.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
