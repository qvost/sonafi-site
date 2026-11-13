import { ArrowUpRight } from 'lucide-react';
import { officialSite } from '../sanofi-content';
import { ResearchFrameScroll } from './ResearchFrameScroll';

/** The pinned research frame leads into a static, keyboard-accessible explanation. */
export function BrandJourney() {
    return (
        <div className="research-feature">
            <ResearchFrameScroll />
            <section className="research-context section-shell" aria-labelledby="research-context-title">
                <h3 id="research-context-title">Supporting scientific decisions with AI</h3>
                <div>
                    <p>Our teams use plai, developed with Aily Labs, to access operational insights. Separate collaborations with OpenAI and Formation Bio support AI applications in drug development.</p>
                    <a className="text-link" href={`${officialSite}/en/our-science/digital-artificial-intelligence/artificial-intelligence-rd`} target="_blank" rel="noreferrer">Read about AI at Sanofi <ArrowUpRight size={18} /></a>
                </div>
            </section>
        </div>
    );
}
