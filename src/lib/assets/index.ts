import emblem from '$lib/assets/emblem';
import emotes from '$lib/assets/emotes';
import hackathons from '$lib/assets/hackathons';
import portraits from '$lib/assets/portraits';
import societies from '$lib/assets/societies';
import software from '$lib/assets/software';

const all = {
    emblem: emblem,
    emotes: emotes,
    hackathons: hackathons,
    portrait: portraits,
    societies: societies,
    software: software,
}

export function getImage(path: string): Partials.Image {
    const segments = path.split('/');
    return all[segments[0]][segments[1]];
}

export { default as emblem } from './emblem';
export { default as emotes } from './emotes';
export { default as hackathons } from './hackathons';
export { default as portraits } from './portraits';
export { default as societies } from './societies';
export { default as software } from './software';