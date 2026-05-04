import CompSoc from '$lib/assets/societies/compsoc.webp?enhanced';
import NoDDSoc from '$lib/assets/societies/noddsoc.webp?enhanced';
import ShefESH from '$lib/assets/societies/shefesh.webp?enhanced';
import SLUGSoc from '$lib/assets/societies/slugsoc.webp?enhanced';
import TSC from '$lib/assets/societies/tsc.webp?enhanced';

const societies = {
    compsoc: {
        src: CompSoc,
        alt: "CompSoc's logo - a green keycap with a face"
    },
    noddsoc: {
        src: NoDDSoc,
        alt: "A dragon representing NoDDSoc"
    },
    shefesh: {
        src: ShefESH,
        alt: 'A lock within a coloured circle representing ShefESH'
    },
    slugsoc: {
        src: SLUGSoc,
        alt: "A banner that reads 'SLUGSoc'"
    },
    tsc: {
        src: TSC,
        alt: 'Rainbow coloured sound waves with the Sheffield SU logo at the bottom'
    }
};

export default societies;