import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from './components/section'; // Corrected path to section.jsx
import './styles/main.css'; // Corrected path to main.css

// Import your assets
import placeholderJpg from './assets/placeholder.jpg';
import reactSvg from './assets/react.svg';
import robloxPng from './assets/roblox.png';
import unknownPng from './assets/unknown.png';

const App = () => {
    // State to keep track of the currently active section
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    // Ref to the container holding all sections, used for scrolling
    const sectionsContainerRef = useRef(null);
    // Ref to prevent multiple scroll events from firing rapidly
    const isScrollingRef = useRef(false);

    // Define the sections with their content and background layers
    const sections = [
        {
            title: "The Grand Adventure Begins",
            text: "Embark on a journey through time, exploring forgotten landscapes and tales from a bygone era. This travelogue captures the essence of exploration, painted with the hues of nostalgia.",
            layers: [
                { src: placeholderJpg, speed: 0.2, displayMode: 'cover', position: 'center' }, // Main background, slowest
                { src: reactSvg, speed: 0.4, displayMode: 'contain', position: 'bottom right' }, // Floating element
                { src: robloxPng, speed: 0.6, displayMode: 'contain', position: 'top left' } // Floating element, fastest
            ]
        },
        {
            title: "Whispers of Paris",
            text: "Cobblestone streets echoing with history, the scent of fresh croissants, and the timeless beauty of the Eiffel Tower. Paris, a city that always feels like a dream from the past.",
            layers: [
                { src: placeholderJpg, speed: 0.2, displayMode: 'cover', position: 'center' },
                { src: unknownPng, speed: 0.4, displayMode: 'contain', position: 'top' },
                { src: robloxPng, speed: 0.6, displayMode: 'contain', position: 'bottom' }
            ]
        },
        {
            title: "Mysteries of the Orient Express",
            text: "A journey through breathtaking landscapes aboard a legendary train. Each click-clack of the wheels tells a story of intrigue and elegance, a true vintage escapade.",
            layers: [
                { src: placeholderJpg, speed: 0.2, displayMode: 'cover', position: 'center' },
                { src: reactSvg, speed: 0.4, displayMode: 'contain', position: 'center left' },
                { src: unknownPng, speed: 0.6, displayMode: 'contain', position: 'center right' }
            ]
        },
        {
            title: "Echoes of Ancient Rome",
            text: "Walk amongst the ruins where emperors once stood, feeling the weight of centuries. Rome's ancient grandeur, a testament to enduring history and timeless beauty.",
            layers: [
                { src: placeholderJpg, speed: 0.2, displayMode: 'cover', position: 'center' },
                { src: robloxPng, speed: 0.4, displayMode: 'contain', position: 'bottom left' },
                { src: reactSvg, speed: 0.6, displayMode: 'contain', position: 'top right' }
            ]
        },
        {
            title: "Serenity in the Scottish Highlands",
            text: "Misty lochs, rugged mountains, and ancient castles. The Highlands offer a serene escape, a place where time seems to stand still, wrapped in a blanket of timeless charm.",
            layers: [
                { src: placeholderJpg, speed: 0.2, displayMode: 'cover', position: 'center' },
                { src: unknownPng, speed: 0.4, displayMode: 'contain', position: 'center' },
                { src: robloxPng, speed: 0.6, displayMode: 'contain', position: 'center' }
            ]
        }
    ];

    // Function to scroll to a specific section by its index
    const scrollToSection = useCallback((index) => {
        if (sectionsContainerRef.current && index >= 0 && index < sections.length) {
            isScrollingRef.current = true; // Set flag to prevent rapid scrolling
            const targetSection = sectionsContainerRef.current.children[index];
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSectionIndex(index);

            // Reset scrolling flag after the scroll animation is likely complete
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800); // Adjust timeout based on scroll-behavior duration
        }
    }, [sections.length]); // Dependency array for useCallback

    // Handle scroll events (mouse wheel)
    useEffect(() => {
        const handleWheel = (event) => {
            if (isScrollingRef.current) {
                event.preventDefault(); // Prevent default scroll if already scrolling
                return;
            }

            event.preventDefault(); // Prevent default browser scroll
            const direction = event.deltaY > 0 ? 1 : -1; // 1 for down, -1 for up
            let nextIndex = activeSectionIndex + direction;

            // Clamp the index within valid bounds
            if (nextIndex < 0) {
                nextIndex = 0;
            } else if (nextIndex >= sections.length) {
                nextIndex = sections.length - 1;
            }

            if (nextIndex !== activeSectionIndex) {
                scrollToSection(nextIndex);
            }
        };

        // Attach scroll listener to the window
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [activeSectionIndex, sections.length, scrollToSection]); // Dependencies for useEffect

    // Parallax effect logic based on scroll position
    useEffect(() => {
        const sectionsContainer = sectionsContainerRef.current;
        if (!sectionsContainer) return;

        const applyParallax = () => {
            const scrollY = sectionsContainer.scrollTop; // Current scroll position of the container

            // Iterate through all sections
            sections.forEach((sectionData, sectionIndex) => {
                const sectionElement = sectionsContainer.children[sectionIndex];
                if (!sectionElement) return;

                const sectionTop = sectionElement.offsetTop; // Top position of the section relative to its scroll parent
                const sectionHeight = sectionElement.offsetHeight;
                const viewportHeight = sectionsContainer.clientHeight;

                // Calculate how much the section is visible in the viewport
                // 0 when section is completely below, 1 when section is completely above
                const sectionScrollProgress = (scrollY - sectionTop + viewportHeight) / (viewportHeight + sectionHeight);

                // Find all parallax layers within this specific section
                const layers = sectionElement.querySelectorAll('.parallax-layer');

                layers.forEach(layer => {
                    const speed = parseFloat(layer.dataset.speed);
                    // Calculate translation based on scroll progress and layer speed
                    // Adjust the multiplier (e.g., 200) to control the intensity of the parallax effect
                    const yOffset = (sectionScrollProgress * speed * viewportHeight) - (speed * viewportHeight / 2); // Center effect
                    layer.style.transform = `translateY(${yOffset}px)`;
                });
            });
        };

        sectionsContainer.addEventListener('scroll', applyParallax);
        // Also apply parallax initially in case of non-zero scroll on load
        applyParallax();

        return () => {
            sectionsContainer.removeEventListener('scroll', applyParallax);
        };
    }, [sections]); // Re-run if sections data changes

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
                    position: 'fixed', // Position fixed to ensure it covers the viewport
                    top: 0,
                    left: 0,
                    width: '100vw', // Ensure it takes full viewport width
                    height: '100vh', // Ensure it takes full viewport height
                    overflowY: 'scroll', // Enable vertical scrolling
                    scrollBehavior: 'smooth', // Smooth scroll effect
                    scrollSnapType: 'y mandatory', // Snap to sections
                }}
            >
                {sections.map((section, index) => (
                    <Section // Using the renamed Section component
                        key={index}
                        id={`section-${index}`}
                        title={section.title}
                        text={section.text}
                        layers={section.layers} // Pass the layers data to the Section component
                    />
                ))}
            </div>
        </>
    );
};

export default App;