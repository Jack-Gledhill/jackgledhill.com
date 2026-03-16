import { Image, type ImageProps } from '$lib/models/image';
import { Links, type LinksProps } from '$lib/models/links';
import { Metadata } from '$lib/models/metadata';

export class Event extends Metadata {
    type: string;
    date: Date;
    logo: Image;
    links: Links;

    constructor(props: EventProps) {
        super(props.title, props.description, props.keywords, props.draft);
        this.type = props.type;
        this.date = new Date(props.date);
        this.logo = new Image(props.logo);
        this.links = new Links(props.links);
    }
}

export interface EventProps extends Metadata {
    type: string;
    date: string;
    logo: ImageProps;
    links: LinksProps;
}