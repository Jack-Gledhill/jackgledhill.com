import { Dates, type DatesProps } from '$lib/models/dates';
import { Image, type ImageProps } from '$lib/models/image';
import { Links, type LinksProps } from '$lib/models/links';
import { Metadata } from '$lib/models/metadata';

export class Project extends Metadata {
    date: Dates;
    type: string;
    logo: Image;
    links: object;
    technologies: string[];

    constructor(props: ProjectProps) {
        super(props.title, props.description, props.keywords, props.draft);
        this.date = new Dates(props.date);
        this.type = props.type;
        this.logo = new Image(props.logo);
        this.links = new Links(props.links);
        this.technologies = props.technologies;
    }
}

export interface ProjectProps extends Metadata {
    date: DatesProps;
    type: string;
    logo: ImageProps;
    links: LinksProps;
    technologies: string[];
}