// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DateFormatter {
    const months = [
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

    export function resolve(date?: string | Date): Date {
        return !date ? new Date() : new Date(date);
    }

    export function format(input?: string | Date): string {
        const date = resolve(input);
        if (isToday(date)) {
            return 'present';
        } else {
            return `${months[date.getMonth()]} ${date.getFullYear()}`;
        }
    }

    export function formatRange(range: Partials.Date): string {
        const start = resolve(range.start);
        const end = resolve(range.end);

        if (isSameMonth(start, end)) {
            return format(range.start);
        } else {
            return format(range.start) + ' — ' + format(end);
        }
    }

    export function isSameMonth(a: Date, b: Date): boolean {
        return a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }

    export function isSameDay(a: Date, b): boolean {
        return a.setHours(0, 0, 0, 0) === b.setHours(0, 0, 0, 0);
    }

    export function isToday(d: Date): boolean {
        return isSameDay(d, new Date());
    }
}