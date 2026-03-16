export class Metadata {
    title: string;
    description: string;
    keywords: string[];
    draft: boolean;

    constructor(title: string, description: string, keywords: string[], draft: boolean) {
        this.title = title;
        this.description = description;
        this.keywords = keywords;
        this.draft = draft;
    }
}