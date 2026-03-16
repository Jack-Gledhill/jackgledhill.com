const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export class Dates {
    start: Date;
    end?: Date;

    constructor(props: DatesProps) {
        this.start = new Date(props.start);

        if (props.end !== undefined) {
            this.end = new Date(props.end);
        } else {
            this.end = undefined
        }
    }

    toString(): string {
        if (this.end !== undefined) {
            return `${formatDate(this.start)} - ${formatDate(this.end)}`;
        } else {
            return `${formatDate(this.start)} - present`;
        }
    }

    sortableEnd(): Date {
        if (this.end !== undefined) {
            return this.end;
        } else {
            return new Date("3000-01-01");
        }
    }
}

export interface DatesProps {
    start: string;
    end?: string;
}

export function compareStarts(a: Dates, b: Dates) {
    return a.start.getTime() - b.start.getTime();
}

export function compareEnds(a: Dates, b: Dates) {
    return a.sortableEnd().getTime() - b.sortableEnd().getTime();
}

export function formatDate(d: Date): string {
    return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
}