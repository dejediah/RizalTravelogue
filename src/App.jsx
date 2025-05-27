import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from './components/section';
import './styles/main.css';

// Import your NEW assets (assuming you've placed them in src/assets)
import mapBackground from './assets/map.jpg'; // For your main background
import libertyPlaneMountain from './assets/liberty.png'; // For a mid/foreground element
import stBasilPisa from './assets/piza.png'; // For another mid/foreground element
import airshipBalloon from './assets/red air balloon.png'; // For your "sticking" bleeding foreground

// Keep placeholders for other sections if you haven't designed them yet
import placeholderJpg from './assets/placeholder.jpg';
import reactSvg from './assets/react.svg';
import robloxPng from './assets/roblox.png';
import unknownPng from './assets/unknown.png';

const App = () => {
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const sectionsContainerRef = useRef(null);
    const isScrollingRef = useRef(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

 const sections = [
    {
        title: "The Grand Adventure Begins",
        text: "Embark on a journey through time, exploring forgotten landscapes and tales from a bygone era. This travelogue captures the essence of exploration, painted with the hues of nostalgia.",
        layers: [
            // Layer 1: The map background
            { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},

            // Layer 2: St. Basil's and Leaning Tower (from 5.jpg)
            // It looks like these are mostly cut off at the bottom.
            // Adjust position to bring them up, and size to control how large they appear.
            { src: stBasilPisa, speed: -0.6, mouseSpeed: -0.02, objectFit: 'cover', position: 'center', z: -2, size: '200% auto' },
            // ^ Try 'top center' or specific percentage 'x% y%'
            // ^ Try different `size` values like '70% auto', '50% auto'

            // Layer 3: Statue of Liberty, Plane, Mountain (from 4.jpg)
            // These are also quite low.
            { src: libertyPlaneMountain, speed: -1.8, mouseSpeed: 0.02, objectFit: 'cover', position: 'center', z: 10, size: '70% auto'},
            // ^ Try 'bottom left', 'bottom right', or 'center' depending on desired spread.
            // ^ Adjust `size` like '60% auto' or '90% auto'.

            // Layer 4: The "sticking" foreground element (Airship, Hot Air Balloon, Buildings from 3.jpg)
            // This is the main one that's overlapping.
            // Make sure its `z` is suitable (e.g., z:1 or z:2 if you want it close).
            // Adjust its position and size so it doesn't block the text.
            { src: airshipBalloon, speed: -4.2, mouseSpeed: 0.05, objectFit: 'cover', position: 'center', z: 12, isBleeding: false, size: '100% auto'}
            // ^ 'top center' might bring the airship/balloon higher.
            // ^ Reduce `size` if it's too big, e.g., '80% auto' or '70% auto'.
            // ^ You might want to use a specific `position` like '20% 50%' to fine-tune.
        ]
    },
        {
            title: "Whispers of Paris",
            text: "Cobblestone streets echoing with history, the scent of fresh croissants, and the timeless beauty of the Eiffel Tower. Paris, a city that always feels like a dream from the past.",
            layers: [
            ]
        },
        // ... (rest of your sections, updated similarly with your new images)
        {
            title: "Mysteries of the Orient Express",
            text: "A journey through breathtaking landscapes aboard a legendary train. Each click-clack of the wheels tells a story of intrigue and elegance, a true vintage escapade.",
            layers: [
            ]
        },
        {
            title: "Echoes of Ancient Rome",
            text: "Walk amongst the ruins where emperors once stood, feeling the weight of centuries. Rome's ancient grandeur, a testament to enduring history and timeless beauty.",
            layers: [
            ]
        },
        {
            title: "Serenity in the Scottish Highlands",
            text: "Misty lochs, rugged mountains, and ancient castles. The Highlands offer a serene escape, a place where time seems to stand still, wrapped in a blanket of timeless charm.",
            layers: [
            ]
        }
    ];

    // Removed the separate `foregroundElements` array as these are now integrated into `sections`

    // Mouse movement listener
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Function to scroll to a specific section by its index
    const scrollToSection = useCallback((index) => {
        if (sectionsContainerRef.current && index >= 0 && index < sections.length) {
            isScrollingRef.current = true;
            const targetSection = sectionsContainerRef.current.children[index];
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSectionIndex(index);

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        }
    }, [sections.length]);

    // Combined Parallax effect logic (scroll and mouse)
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const applyParallax = () => {
            const scrollY = sectionsContainer.scrollTop; // Current scroll position of the container
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate mouse offsets relative to viewport center
            const mouseOffsetX = (mousePos.x - viewportWidth / 2);
            const mouseOffsetY = (mousePos.y - viewportHeight / 2);

            // Apply parallax to all layers within sections
            sections.forEach((sectionData, sectionIndex) => {
                const sectionElement = sectionsContainer.children[sectionIndex];
                if (!sectionElement) return;

                const sectionTop = sectionElement.offsetTop;
                const sectionHeight = sectionElement.offsetHeight;

                // Calculate how much the section is visible in the viewport
                // 0 when section is completely below, 1 when section is completely above
                const sectionScrollProgress = (scrollY - sectionTop + viewportHeight) / (viewportHeight + sectionHeight);

                const layers = sectionElement.querySelectorAll('.parallax-layer');

                layers.forEach(layer => {
                    const speed = parseFloat(layer.dataset.speed);
                    const mouseSpeed = parseFloat(layer.dataset.mouseSpeed);

                    // Scroll-based Y translation for all layers
                    // For `speed > 1`, this will make elements appear to "stick" and move faster
                    const scrollYTranslate = (sectionScrollProgress * speed * viewportHeight) - (speed * viewportHeight / 2);

                    // Mouse-based X and Y translation
                    const mouseTranslateX = mouseOffsetX * mouseSpeed;
                    const mouseTranslateY = mouseOffsetY * mouseSpeed;

                    layer.style.transform = `translate3d(${mouseTranslateX}px, ${scrollYTranslate + mouseTranslateY}px, 0)`;
                });
            });

            // Removed the separate loop for `foregroundElements`
        };

        // Re-run parallax on scroll and mouse move
        sectionsContainer.addEventListener('scroll', applyParallax);
        window.addEventListener('mousemove', applyParallax);

        // Apply parallax initially
        applyParallax();

        return () => {
            sectionsContainer.removeEventListener('scroll', applyParallax);
            window.removeEventListener('mousemove', applyParallax);
        };
    }, [sections, mousePos]); // Removed foregroundElements from dependencies

    // Handle navigation dot clicks
    const handleDotClick = (index) => {
        scrollToSection(index);
    };

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
                    scrollBehavior: 'smooth',
                    scrollSnapType: 'y mandatory',
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

                {/* Removed the rendering of global bleeding foreground elements here */}
            </div>
        </>
    );
};

export default App;