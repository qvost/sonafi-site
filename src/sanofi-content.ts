export const imagePath = (name: string) => `/images/${name}`;
export const officialSite = 'https://www.sanofi.com';
export const partnershipUrl = `${officialSite}/en/tour-de-france-major-partner-sponsor-white-jersey-sports-healthcare`;
export type TherapyArea = 'Immunology' | 'Neurology' | 'Oncology' | 'Rare Diseases' | 'Vaccines';
export type PipelineMedicine = {
    name: string;
    generic: string;
    area: TherapyArea;
    phase: 'Approved' | 'Phase 3' | 'Phase 2b';
    mechanism: string;
    condition: string;
    trial: string;
    description: string;
    color: string;
};
export const pipelineMedicines: PipelineMedicine[] = [
    { name: 'Dupixent', generic: 'dupilumab', area: 'Immunology', phase: 'Approved', mechanism: 'IL-4 / IL-13 pathway inhibition', condition: 'Type 2 inflammation · COPD', trial: 'NCT03930732', description: 'A monoclonal antibody targeting IL-4 receptor alpha to inhibit IL-4 and IL-13 signaling. Developed with Regeneron. The BOREAS study investigated use in adults with uncontrolled COPD and evidence of type 2 inflammation.', color: 'violet' },
    { name: 'Tolebrutinib', generic: 'oral BTK inhibitor', area: 'Neurology', phase: 'Phase 3', mechanism: 'Brain-penetrant BTK inhibition', condition: 'Non-relapsing secondary progressive MS', trial: 'NCT04411641', description: 'An investigational oral, brain-penetrant Bruton’s tyrosine kinase inhibitor studied in non-relapsing secondary progressive multiple sclerosis in HERCULES. Investigational status is shown as a concept snapshot; consult current regulatory information.', color: 'blue' },
    { name: 'Duvakitug', generic: 'TEV-48574', area: 'Immunology', phase: 'Phase 2b', mechanism: 'Anti-TL1A monoclonal antibody', condition: 'Ulcerative colitis · Crohn’s disease', trial: 'NCT05499130', description: 'An investigational antibody targeting TL1A, developed with Teva. RELIEVE UCCD evaluated duvakitug in adults with moderately to severely active ulcerative colitis or Crohn’s disease.', color: 'pink' },
    { name: 'Beyfortus', generic: 'nirsevimab', area: 'Vaccines', phase: 'Approved', mechanism: 'RSV F-protein targeting antibody', condition: 'Infant RSV prevention', trial: 'NCT03979313', description: 'A long-acting monoclonal antibody for prevention of RSV lower respiratory tract disease in eligible infants. An antibody, rather than a vaccine, shown here within the prevention portfolio. Developed with AstraZeneca.', color: 'green' },
    { name: 'Altuviiio', generic: 'efanesoctocog alfa', area: 'Rare Diseases', phase: 'Approved', mechanism: 'High-sustained factor VIII replacement', condition: 'Hemophilia A', trial: 'NCT04161495', description: 'A factor VIII replacement therapy offering once-weekly routine prophylaxis for eligible people with hemophilia A. The XTEND-1 study evaluated its efficacy and safety.', color: 'orange' },
];
export const therapyAreas: TherapyArea[] = ['Immunology', 'Neurology', 'Oncology', 'Rare Diseases', 'Vaccines'];
export const patientStories = [
    { name: 'Céline', country: 'FRANCE', condition: 'Living with secondary progressive multiple sclerosis', image: 'celine-para-surfer-main_20251028131729.jpg', url: '/en/chasing-miracles/people-stories/celine-story-multiple-sclerosis', text: 'Céline is a para-surfer from France living with secondary progressive multiple sclerosis. Her story describes her experience with the condition and her participation in sport.' },
    { name: 'Xavier', country: 'UNITED STATES', condition: 'Living with autoimmune type 1 diabetes', image: 'xavier-video-thumbnail_20251028131835.jpg', url: '/en/chasing-miracles/people-stories/xavier-story-autoimmune-type-one-diabetes', text: 'Xavier is a filmmaker in the United States living with autoimmune type 1 diabetes. Read about his work and his experience of managing the condition.' },
    { name: 'Wei', country: 'CHINA', condition: 'Working at Sanofi in China', image: 'wei-artificial-intelligence-main_20251028131631.jpg', url: '/en/chasing-miracles/people-stories/wei-story-artificial-intelligence-sanofi-china', text: 'Wei works at Sanofi in China. Read about her work and her experience as a Sanofi colleague.' },
];
export type PatientStory = typeof patientStories[number];
