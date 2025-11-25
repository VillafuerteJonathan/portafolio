import { cubicOut } from "svelte/easing";

export function fadeScale(node, { duration = 600, delay = 0, easing = cubicOut, start = 0.85 } = {}) {
    return {
        delay,
        duration,
        easing,
        css: (t) => `
            opacity: ${t};
            transform: scale(${start + (t * (1 - start))});
        `
    };
}
