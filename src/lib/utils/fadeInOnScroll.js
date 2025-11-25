export function fadeInOnScroll(node, { delay = 0, duration = 600, y = 30 } = {}) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.style.transition = `all ${duration}ms ease ${delay}ms`;
                node.style.opacity = "1";
                node.style.transform = "translateY(0)";
                observer.unobserve(node);
            }
        },
        { threshold: 0.2 }
    );

    node.style.opacity = "0";
    node.style.transform = `translateY(${y}px)`;

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
