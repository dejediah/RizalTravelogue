// --- src/components/section.jsx ---
import React from 'react';

const Section = ({ id, title, text, layers }) => {
    const bleedingLayers = layers.filter(layer => layer.isBleeding);
    const regularLayers = layers.filter(layer => !layer.isBleeding);

    // Helper function to create the filter style
    const getFilterStyle = (layer) => {
        let filters = [];
        if (typeof layer.brightness === 'number') {
            filters.push(`brightness(${layer.brightness})`);
        }
        // You could add other filters here later, e.g., if (layer.contrast) { filters.push(`contrast(${layer.contrast})`); }
        return filters.length > 0 ? filters.join(' ') : 'none';
    };

    return (
        <section
            id={id}
            className="parallax-section"
        >
            {/* Render ONLY the bleeding parallax layers directly inside the section */}
            {bleedingLayers.map((layer, index) => (
                <div
                    key={`bleeding-layer-${index}`}
                    className="parallax-layer"
                    data-speed={layer.speed}
                    data-mouse-speed={layer.mouseSpeed}
                    data-object-fit={layer.objectFit}
                    data-is-bleeding={layer.isBleeding || 'false'}
                    style={{
                        backgroundImage: `url('${layer.src}')`,
                        backgroundPosition: layer.position || 'center',
                        zIndex: layer.z,
                        backgroundSize: layer.objectFit === 'contain' && layer.size ? layer.size : (layer.objectFit || 'cover'),
                        filter: getFilterStyle(layer) // Apply the filter here
                    }}
                ></div>
            ))}

            <div className="section-inner-content-wrapper">
                {/* Render the regular (non-bleeding) parallax layers inside the wrapper */}
                {regularLayers.map((layer, index) => (
                    <div
                        key={`regular-layer-${index}`}
                        className="parallax-layer"
                        data-speed={layer.speed}
                        data-mouse-speed={layer.mouseSpeed}
                        data-object-fit={layer.objectFit}
                        style={{
                            backgroundImage: `url('${layer.src}')`,
                            backgroundPosition: layer.position || 'center',
                            zIndex: layer.z,
                            backgroundSize: layer.objectFit === 'contain' && layer.size ? layer.size : (layer.objectFit || 'cover'),
                            filter: getFilterStyle(layer) // Apply the filter here
                        }}
                    ></div>
                ))}

                <div className="parallax-overlay">
                    <div className="section-content">
                        <h1 className="section-title">{title}</h1>
                        <p className="section-text">{text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;