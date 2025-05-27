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
        title: "Maagang Buhay at Edukasyon (1861-1882)",
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
            title: "Calamba, Laguna (1861-1872): 1. Ang pagkabata at maagang edukasyon ni Rizal.",
            text: "Si Jose Protacio Rizal Mercado y Alonzo Realonda o mas kilalang Jose Rizal ay isinilang noong ika-19 ng Hunyo 1861 sa Calamba Laguna. Galing si Jose Rizal sa isang edukado at maykayang pamilya na pinangungunahan ng kanyang ama na si Don Francisco Mercado at ina niyang si Doña Teodora Alonzo. Sa murang edad pa lamang ay ipinakita na ni Rizal ang kanyang katalinuhan, pagiging mapagmasid, at pagkahilig sa pagbabasa at pagsusulat. Tinuruan siya ng kanyang ina sa pagbasa at pagdarasal. Sa tulong ng mga pribadong guro at ng kanyang sariling determinsayon, natutunana ni Rizal ang mga batayang asignatura tulad na lamang ng Latin, Kastila, at Matematika.",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},

            ]
        },
        // ... (rest of your sections, updated similarly with your new images)
        {
            title: "Ateneo de Manila (1872-1877): Ang sekondaryang edukasyon ni Rizal.",
            text: "Matapos ang pagkamatay ni Gomburza noong 1872, ipinasok si Rizal sa Ateneo Municapal de Manila. Bagama’t noong una ay hindi siya tinanggap dahil sa kanyang pagiging “Indio”, natanggap siya dahil sa rekomendasyon ng isang pamilyar sa kanyang ina. Sa Ateneo, si Rizal ay naging “interno” at di-naglaon ay naging isa sa mga pinakamasigasig na mag-aaral. Natapos siya ng Batsilyer ng Sining at may pinakamataas na karangalan. Dito rin nahasa si Rizal sa larangan ng literatura, sining, agham, at relihiyon. Sumulat siya ng mga tula gaya ng “Sa Aking Mga Kabata” at iba pang akdang nagpapakita ng kanyang pambihirang pag-iisip sa murang edad. Kasabay nito, natutunan niya ang kahalagahan ng disiplina, pagiging makatao, at pagmamahal sa inang bayan.",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},

            ]
        },
        {
            title: "University of Santo Tomas (1877-1882): Ang edukasyon ni Rizal sa unibersidad.",
            text: "Nagpatuloy si Rizal sa Unibersidad ng Santo Tomas kung saan una niyang kinuha ang kursong Filosofía y Letras bago nagpasya na ipagpatuloy ang medisina upang matulungan ang kanyang inang unti-unting nawawalan ng paningin. Sa UST, naranasan niya ang diskriminasyon ng mga prayle at opisyal sa mga katutubong mag-aaral. Dahil dito, mas tumibay ang kanyang damdaming makabayan at pagkadismaya sa umiiral na sistema. Kasabay ng kanyang pag-aaral, aktibo rin si Rizal sa pagsusulat, pagpapadala ng tula at sanaysay sa pahayagan, at pag-oobserba sa mga hindi makatarungang kalakaran sa lipunan.",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},

            ]
        },
        {
            title: "Paglalakbay at Pagkadestiyero  (1882-1896)",
            layers: [
                { src: mapBackground, speed: -0.2, mouseSpeed: -0.01, objectFit: 'cover', position: 'center', z: -3},

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