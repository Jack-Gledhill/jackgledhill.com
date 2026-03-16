export class Image {
    src: string;
    alt: string;

    constructor(props: ImageProps) {
        this.src = props.src;
        this.alt = props.alt;
    }
}

export interface ImageProps {
    src: string;
    alt: string;
}