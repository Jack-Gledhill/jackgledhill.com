import { Dates, type DatesProps } from '$lib/models/dates';
import { Image } from '$lib/models/image';
import { Links } from '$lib/models/links';
import { Metadata } from '$lib/models/metadata';

export class Committee extends Metadata {
    date: Dates;
    position: string;
    logo: Image;
    links: Links;

    constructor(props: CommitteeProps) {
        super(props.title, props.description, props.keywords, props.draft);
        this.date = new Dates(props.date);
        this.position = props.position;
        this.logo = new Image(props.logo);
        this.links = new Links(props.links);
    }
}

export interface CommitteeProps extends Metadata {
    date: DatesProps;
    position: string;
    logo: Image;
    links: Links;
}