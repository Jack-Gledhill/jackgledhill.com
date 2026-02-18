import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
    return {
        meta: {
            title: 'Research ~ Jack Gledhill',
            description: '',
            keywords: []
        },
        research: [
            {
                title: 'An Analysis of Load Balancing Algorithms in Web Applications',
                authors: ['J. Gledhill'],
                date: 'May 2024',
                journal: 'University of Sheffield',
                links: {
                    docx: '/research/fce001.docx',
                    pdf: '/research/fce001.pdf'
                },
                description:
                    'An individual research project undertaken as part of the Science & Engineering Foundation Year at the University of Sheffield. ',
                draft: false
            },
            {
                title: 'To What Extent Will the Use of Artifical Intelligence Disrupt the UK Workforce?',
                authors: ['J. Gledhill'],
                date: 'Nov 2022',
                journal: 'Scarborough Sixth Form College',
                links: {
                    docx: '/research/epq.docx',
                    pdf: '/research/epq.pdf'
                },
                description: '',
                draft: false
            }
        ]
    };
};
