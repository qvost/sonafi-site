import { ArrowUpRight } from 'lucide-react';

const researchMetrics = [
    { value: '5', label: 'Therapeutic areas' },
    { value: '61', label: 'Compounds in development' },
    { value: '20', label: 'Phase 3 trials' },
    { value: '135+', label: 'Countries reached' },
];

/** Research figures retain the brief's snapshot disclosure. */
export function ScienceMetrics() {
    return (
        <section className="science-intro section-shell" id="science">
            <div className="intro-heading">
                <div>
                    <h2>Research and development</h2>
                    <p className="section-description">Developing medicines and vaccines across immunology, neurology, oncology, rare diseases and vaccines.</p>
                </div>
                <a className="text-link" href="#pipeline">View our pipeline <ArrowUpRight size={18} /></a>
            </div>
            <div className="metrics-strip">
                {researchMetrics.map(metric => (
                    <div className="metric" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <h3>{metric.label}</h3>
                    </div>
                ))}
            </div>
            <p className="data-note">Figures from the project brief. Refer to the official pipeline for current information.</p>
        </section>
    );
}
