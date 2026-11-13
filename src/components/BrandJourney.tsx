import { ArrowUpRight } from 'lucide-react';
import { imagePath, officialSite } from '../sanofi-content';

/** Scientific technology and partnerships are presented without ornamental diagrams. */
export function BrandJourney() {
    return (
        <section className="brand-journey">
            <div className="section-shell">
                <div className="science-strategy-heading">
                    <h2>AI in research and development</h2>
                    <p>Sanofi combines biological research with data science to support the discovery and development of medicines.</p>
                </div>
                <div className="ai-feature">
                    <div className="ai-image">
                        <img src={imagePath('matt-truppo-ai-in-rd_20261104124542.jpg')} alt="A Sanofi scientist alongside automated laboratory research equipment" loading="lazy" />
                    </div>
                    <div className="ai-copy">
                        <h3>Supporting scientific decisions with AI</h3>
                        <p>Our teams use plai, developed with Aily Labs, to access operational insights. Separate collaborations with OpenAI and Formation Bio support AI applications in drug development.</p>
                        <a className="text-link" href={`${officialSite}/en/our-science/digital-artificial-intelligence/artificial-intelligence-rd`} target="_blank" rel="noreferrer">Read about AI at Sanofi <ArrowUpRight size={18} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
