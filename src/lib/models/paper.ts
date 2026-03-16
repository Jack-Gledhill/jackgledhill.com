import { Metadata } from '$lib/models/metadata';

export class Paper extends Metadata {
    authors: string[];
    journal: string;
    date: Date;
    links: PaperLinks;

    constructor(props: PaperProps) {
        super(props.title, props.description, [], props.draft);
        this.authors = props.authors;
        this.journal = props.journal;
        this.date = new Date(props.date);
        this.links = new PaperLinks(props.links);
    }
}

export interface PaperProps extends Metadata {
    authors: string[];
    journal: string;
    date: string;
    links: PaperLinksProps;
}

export class PaperLinks {
    pdf: string;

    constructor(props: PaperLinks) {
        this.pdf = props.pdf;
    }
}

export interface PaperLinksProps {
    pdf: string;
}