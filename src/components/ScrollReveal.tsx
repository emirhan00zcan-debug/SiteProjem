'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollReveal = () => {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const timeout = setTimeout(() => {
            const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
            revealElements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [pathname]);

    return null;
};

export default ScrollReveal;
