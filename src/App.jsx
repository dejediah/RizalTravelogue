import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from './components/section';
import './styles/main.css';

// Import your NEW assets
import mapBackground from './assets/map.jpg';
import libertyPlaneMountain from './assets/liberty.png';
import stBasilPisa from './assets/piza.png';
import airshipBalloon from './assets/red air balloon.png';
import bookbg from './assets/bookbg.png';
import bookmg from './assets/bookmg.png';
import bookfg1 from './assets/bookfg1.png';
import bookstick1 from './assets/bookstick1.png';
import bookstick2 from './assets/bookstick2.png';
import bgp3 from './assets/bgp3.png';
import mgp3 from './assets/mgp3.png';
import mg2p3 from './assets/mg2p3.png';
import p3fg1 from './assets/p3fg1.png';
import p3fg2 from './assets/p3fg2.png';

import placeholderJpg from './assets/placeholder.jpg';
import reactSvg from './assets/react.svg';
import robloxPng from './assets/roblox.png';

const App = () => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const sectionsContainerRef = useRef(null);
    const isAnimatingScrollRef = useRef(false); // Flag for programmatic scroll animation
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const sections = [
        {
            title: "joserizal",
            text: "Embark on a journey through time, exploring forgotten landscapes and tales from a bygone era. This travelogue captures the essence of exploration, painted with the hues of nostalgia.",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},
                { src: stBasilPisa, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -2, size: '200% auto' },
                { src: libertyPlaneMountain, speed: -1.8, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 10, size: '70% auto'},
                {
                    src: airshipBalloon,
                    speed: -0.2,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'center',
                    z: 91,
                    isBleeding: true,
                    size: '100% auto',
                    brightness: 1.0
                }
            ]
        },
        {
            title: "maagang buhay at edukasyon",
            text: "Cobblestone streets echoing with history, the scent of fresh croissants, and the timeless beauty of the Eiffel Tower. Paris, a city that always feels like a dream from the past.",
            layers: [
                { src: bookmg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: 10},
                { src: bookbg, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -2, size: '100% auto' },
                { src: bookfg1, speed: -1.8, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 11, size: '100% auto', offsetY: -50},
                {
                    src: bookstick1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom left',
                    z: 91,
                    isBleeding: true,
                    size: '50% auto',
                    brightness: 1.0,
                    offsetX: -100,
                    offsetY: 150
                },
                {
                    src: bookstick2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom right',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: 350,
                    offsetY: 270
                }
            ]
        },
        {
            title: "calamba",
            text: "A journey through breathtaking landscapes aboard a legendary train. Each click-clack of the wheels tells a story of intrigue and elegance, a true vintage escapade.",
            layers: [
                { src: bgp3, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'top center', z: -2},
                { src: mg2p3, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -1, size: '100% auto' },
                { src: mgp3, speed: -0.6, mouseSpeed: -0.04, objectFit: 'cover', position: 'center', z: 10, size: '100% auto' },
                {
                    src: p3fg1,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom left',
                    z: 91,
                    isBleeding: true,
                    size: '70% auto',
                    brightness: 1.0,
                    offsetX: -70,
                    offsetY: 150
                },
                {
                    src: p3fg2,
                    speed: 0,
                    mouseSpeed: 0.05,
                    objectFit: 'contain',
                    position: 'bottom right',
                    z: 91,
                    isBleeding: true,
                    size: '75% auto',
                    brightness: 1.0,
                    offsetX: 275,
                    offsetY: 225
                }
            ]
        },
        {
            title: "ateneo",
            text: "Walk amongst the ruins where emperors once stood, feeling the weight of centuries. Rome's ancient grandeur, a testament to enduring history and timeless beauty.",
            layers: [
                { src: reactSvg, speed: -0.2, mouseSpeed: -0.01, objectFit: 'contain', position: 'center', z: -3, size: '50% auto'},
            ]
        },
        {
            title: "Serenity in the Scottish Highlands",
            text: "Misty lochs, rugged mountains, and ancient castles. The Highlands offer a serene escape, a place where time seems to stand still, wrapped in a blanket of timeless charm.",
            layers: [
                { src: robloxPng, speed: -0.2, mouseSpeed: -0.01, objectFit: 'contain', position: 'center', z: -3, size: '50% auto'},
            ]
        }
    ];

    // Mouse movement listener
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Custom smooth scroll animation function
    const animateScroll = useCallback((targetScrollTop, duration = 800) => {
        const container = sectionsContainerRef.current;
        if (!container) {
            console.error('animateScroll: Container ref is null.');
            isAnimatingScrollRef.current = false; // Ensure flag is false if container is missing
            return;
        }

        if (isAnimatingScrollRef.current) {
            console.log('animateScroll: Animation already in progress, skipping new one.');
            return;
        }

        isAnimatingScrollRef.current = true; // Set flag to true
        const startScrollTop = container.scrollTop;
        const startTime = performance.now();

        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            container.scrollTop = startScrollTop + (targetScrollTop - startScrollTop) * easedProgress;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isAnimatingScrollRef.current = false; // Reset flag
                container.scrollTop = targetScrollTop; // Ensure final position is exact
                console.log('Scroll animation finished. Final scroll top:', container.scrollTop);
            }
        };

        requestAnimationFrame(step);
    }, []); // No dependencies for this function

    // Function to scroll to a specific section by its index
    const scrollToSection = useCallback((index) => {
        if (sectionsContainerRef.current && index >= 0 && index < sections.length) {
            const targetSection = sectionsContainerRef.current.children[index];
            if (targetSection) {
                const targetOffsetTop = targetSection.offsetTop;
                console.log(`scrollToSection: Initiating scroll to section ${index} (target: ${targetOffsetTop})`);
                animateScroll(targetOffsetTop);
                // The activeSectionIndex will be updated by IntersectionObserver when scroll finishes.
                // Or you could set it immediately here if you prefer immediate dot feedback:
                // setActiveSectionIndex(index);
            } else {
                console.warn(`scrollToSection: Target section ${index} not found.`);
            }
        }
    }, [sections.length, animateScroll]); // Dependencies for useCallback: sections.length for bounds, animateScroll function

    // Parallax effect logic
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const applyParallax = () => {
            const scrollY = sectionsContainer.scrollTop;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const mouseOffsetX = (mousePos.x - viewportWidth / 2);
            const mouseOffsetY = (mousePos.y - viewportHeight / 2);

            sections.forEach((sectionData, sectionIndex) => {
                const sectionElement = sectionsContainer.children[sectionIndex];
                if (!sectionElement) return;

                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.offsetHeight; // Used in your preferred formula

                const sectionScrollProgress = (scrollY - sectionTop + viewportHeight) / (viewportHeight + sectionHeight);

                const layers = sectionElement.querySelectorAll('.parallax-layer');

                layers.forEach(layer => {
                    const speed = parseFloat(layer.dataset.speed);
                    const mouseSpeed = parseFloat(layer.dataset.mouseSpeed);

                    const initialOffsetX = parseFloat(layer.dataset.offsetX) || 0;
                    const initialOffsetY = parseFloat(layer.dataset.offsetY) || 0;

                    const scrollYTranslate = (sectionScrollProgress * speed * viewportHeight) - (speed * viewportHeight / 2);

                    const mouseTranslateX = mouseOffsetX * mouseSpeed;
                    const mouseTranslateY = mouseOffsetY * mouseSpeed;

                    layer.style.transform = `translate3d(${mouseTranslateX + initialOffsetX}px, ${scrollYTranslate + mouseTranslateY + initialOffsetY}px, 0)`;
                });
            });
        };

        sectionsContainer.addEventListener('scroll', applyParallax);
        window.addEventListener('mousemove', applyParallax);

        applyParallax(); // Initial call

        return () => {
            sectionsContainer.removeEventListener('scroll', applyParallax);
            window.removeEventListener('mousemove', applyParallax);
        };
    }, [sections, mousePos]);

    // Wheel event listener for custom smooth snapping (now handles throttle and direct scroll)
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const SCROLL_THROTTLE_DELAY = 900; // Milliseconds to wait before allowing another wheel scroll

        const handleWheel = (event) => {
            event.preventDefault(); // Crucial: Prevent default browser scroll

            const currentTime = performance.now();
            // This throttle prevents rapid-fire wheel events from causing multiple animations
            if (isAnimatingScrollRef.current || (currentTime - sectionsContainerRef.current.__lastWheelScrollTime < SCROLL_THROTTLE_DELAY)) {
                console.log('handleWheel: Throttled or animation in progress, ignoring wheel event.');
                return;
            }

            // Store the last time a valid wheel scroll was processed
            sectionsContainerRef.current.__lastWheelScrollTime = currentTime;

            let targetIndex = activeSectionIndex;
            if (event.deltaY > 0) { // Scrolling down
                targetIndex = Math.min(sections.length - 1, activeSectionIndex + 1);
            } else { // Scrolling up
                targetIndex = Math.max(0, activeSectionIndex - 1);
            }

            if (targetIndex !== activeSectionIndex) {
                console.log(`handleWheel: Scrolling from ${activeSectionIndex} to ${targetIndex}`);
                // Update active index immediately for dot feedback
                setActiveSectionIndex(targetIndex);
                // Directly trigger the scroll
                scrollToSection(targetIndex);
            } else {
                console.log(`handleWheel: Staying on section ${activeSectionIndex}.`);
            }
        };

        // Initialize lastWheelScrollTime on the ref object itself
        sectionsContainerRef.current.__lastWheelScrollTime = 0; // Or better, put it in a separate ref like lastScrollTimeRef

        sectionsContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            sectionsContainer.removeEventListener('wheel', handleWheel);
        };
    }, [activeSectionIndex, sections.length, scrollToSection, isAnimatingScrollRef]); // Added isAnimatingScrollRef to dependencies

    // IntersectionObserver to update activeSectionIndex on manual drag scroll
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const observerOptions = {
            root: sectionsContainer,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const index = parseInt(id.replace('section-', ''));
                    // Only update if not currently animating (programmatic scroll)
                    // This allows manual drags to update the active dot.
                    if (!isAnimatingScrollRef.current && index !== activeSectionIndex) {
                        setActiveSectionIndex(index);
                        console.log('IntersectionObserver: Updated activeSectionIndex to:', index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((_, index) => {
            const sectionElement = sectionsContainer.children[index];
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sections, activeSectionIndex, isAnimatingScrollRef]); // Added isAnimatingScrollRef to dependencies

    // Handle navigation dot clicks
    const handleDotClick = useCallback((index) => {
        if (!isAnimatingScrollRef.current) { // Prevent clicks during an ongoing animation
            console.log(`Dot click: Scrolling to section ${index}`);
            setActiveSectionIndex(index); // Update state for dot to become active
            scrollToSection(index); // Directly initiate the scroll
        } else {
            console.log('Dot click ignored: Animation in progress.');
        }
    }, [isAnimatingScrollRef, scrollToSection]); // Dependencies: isAnimatingScrollRef and scrollToSection

    return (
        <>
            {/* Navigation Dots */}
            <div className="nav-dots">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`nav-dot ${activeSectionIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to section ${index + 1}`}
                    ></div>
                ))}
            </div>

            {/* Travelogue Sections Container */}
            <div
                ref={sectionsContainerRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    overflowY: 'scroll',
                    // scrollBehavior: 'smooth', // Handled by JS now
                    // scrollSnapType: 'y mandatory', // Handled by JS now
                    WebkitOverflowScrolling: 'touch' // For smoother scrolling on iOS devices
                }}
            >
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        id={`section-${index}`}
                        title={section.title}
                        text={section.text}
                        layers={section.layers}
                    />
                ))}
            </div>
        </>
    );
};

export default App;