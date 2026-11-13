import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function decodeBrandAsset(source: string) {
    const image = new Image();
    image.src = source;
    return image.decode().catch(() => undefined);
}

/** The opening brand reveal waits for essential assets, with a bounded fallback. */
export function BrandPreloader({ onComplete }: { onComplete: () => void }) {
    const [ready, setReady] = useState(false);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        let active = true;
        const timers: ReturnType<typeof setTimeout>[] = [];
        const wait = (duration: number) => new Promise<void>(resolve => {
            timers.push(setTimeout(resolve, duration));
        });
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const assets = Promise.allSettled([
            document.fonts.ready,
            decodeBrandAsset('/sanofi-mark.svg'),
            decodeBrandAsset('/images/hero-poster.jpg'),
        ]);
        void Promise.all([
            Promise.race([assets, wait(1800)]),
            wait(reducedMotion ? 0 : 550),
        ]).then(() => {
            if (active) setReady(true);
        });
        return () => {
            active = false;
            timers.forEach(clearTimeout);
            document.body.style.overflow = previousOverflow;
        };
    }, [reducedMotion]);

    return (
        <motion.div
            className="brand-preloader"
            role="status"
            aria-label="Loading Sanofi"
            initial={{ opacity: 1 }}
            animate={{ opacity: ready ? 0 : 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.35, ease: 'easeOut' }}
            onAnimationComplete={() => { if (ready) onComplete(); }}
        >
            <motion.div
                className="preloader-identity"
                aria-hidden="true"
                initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
                <img src="/sanofi-mark.svg" alt="" width="52" height="52" />
                <span>Sanofi</span>
            </motion.div>
        </motion.div>
    );
}
