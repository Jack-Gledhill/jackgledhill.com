export class Links {
    devpost: string;
    discord: string;
    github: string;
    instagram: string;
    linkedin: string;
    orcid: string;
    website: string;
    
    constructor(props: LinksProps) {
        this.devpost = props.devpost;
        this.discord = props.discord;
        this.github = props.github;
        this.instagram = props.instagram;
        this.linkedin = props.linkedin;
        this.orcid = props.orcid;
        this.website = props.website;
    }
}

export interface LinksProps {
    devpost: string;
    discord: string;
    github: string;
    instagram: string;
    linkedin: string;
    orcid: string;
    website: string;
}