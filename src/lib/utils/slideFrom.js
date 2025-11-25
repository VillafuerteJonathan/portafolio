// slideFrom.js — efecto de entrada sincronizado con un observer real
export function slideFrom(
    node,
    { direction = "left", distance = 80, duration = 900, delay = 0 } = {}
) {
    let x = 0;
    let y = 0;

    if (direction === "left") x = -distance;
    if (direction === "right") x = distance;
    if (direction === "top") y = -distance;
    if (direction === "bottom") y = distance;

    // Estado inicial
    node.style.opacity = "0";
    node.style.transform = `translate(${x}px, ${y}px)`;

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // Activar animación cuando de verdad sea visible
                node.style.transition = `
                    opacity ${duration}ms ease ${delay}ms,
                    transform ${duration}ms ease ${delay}ms
                `;
                node.style.opacity = "1";
                node.style.transform = "translate(0,0)";

                observer.disconnect();
            }
        },
        {
            threshold: 0.45, // 🔥 No se activa hasta que 45% sea visible
            rootMargin: "0px 0px -10% 0px" // 🔥 Evita activación anticipada
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
