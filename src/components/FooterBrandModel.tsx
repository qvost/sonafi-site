import { motion, type MotionValue } from 'framer-motion';

const logoDepths = [-24, -20, -16, -12, -8, -4];

/** Layered copies of the official mark provide depth without loading a WebGL model. */
export function FooterBrandModel({ y, rotateX, rotateY, rotateZ }: {
    y: MotionValue<number> | number;
    rotateX: MotionValue<number> | number;
    rotateY: MotionValue<number> | number;
    rotateZ: MotionValue<number> | number;
}) {
    return (
        <div className="footer-model-stage" aria-hidden="true">
            <div className="footer-model-shadow" />
            <motion.div className="footer-brand-model" style={{ y, rotateX, rotateY, rotateZ }}>
                {logoDepths.map(depth => (
                    <img
                        key={depth}
                        src="/sanofi-mark.svg"
                        className="footer-model-depth"
                        alt=""
                        width="250"
                        height="250"
                        loading="lazy"
                        draggable={false}
                        style={{ transform: `translateZ(${depth}px)` }}
                    />
                ))}
                <img src="/sanofi-mark.svg" className="footer-model-face" alt="" width="250" height="250" loading="lazy" draggable={false} />
            </motion.div>
        </div>
    );
}
