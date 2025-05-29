// --- src/components/section.jsx ---
import React from 'react';

const Section = ({ id, title, subtitle, text, layers }) => {
    const bleedingLayers = layers.filter(layer => layer.isBleeding);
    const regularLayers = layers.filter(layer => !layer.isBleeding);

    const getFilterStyle = (layer) => {
        let filters = [];
        if (typeof layer.brightness === 'number') {
            filters.push(`brightness(${layer.brightness})`);
        }
        return filters.length > 0 ? filters.join(' ') : 'none';
    };

    return (
        <section
            id={id}
            className="parallax-section"
        >
            {bleedingLayers.map((layer, index) => (
                <div
                    key={`bleeding-layer-${index}`}
                    className="parallax-layer"
                    data-speed={layer.speed}
                    data-mouse-speed={layer.mouseSpeed}
                    data-object-fit={layer.objectFit}
                    data-is-bleeding={layer.isBleeding || 'false'}
                    // NEW: Pass offsetX and offsetY to data attributes
                    data-offset-x={layer.offsetX || '0px'} // Default to '0px' if not provided
                    data-offset-y={layer.offsetY || '0px'} // Default to '0px' if not provided
                    style={{
                        backgroundImage: `url('${layer.src}')`,
                        backgroundPosition: layer.position || 'center',
                        zIndex: layer.z,
                        backgroundSize: layer.objectFit === 'contain' && layer.size ? layer.size : (layer.objectFit || 'cover'),
                        filter: getFilterStyle(layer)
                        // REMOVED: transform: `translate(${layer.offsetX || '0'}, ${layer.offsetY || '0'})`
                        // This will now be handled by applyParallax in App.jsx
                    }}
                ></div>
            ))}

            <div className="section-inner-content-wrapper">
                {regularLayers.map((layer, index) => (
                    <div
                        key={`regular-layer-${index}`}
                        className="parallax-layer"
                        data-speed={layer.speed}
                        data-mouse-speed={layer.mouseSpeed}
                        data-object-fit={layer.objectFit}
                        // NEW: Pass offsetX and offsetY to data attributes for regular layers too
                        data-offset-x={layer.offsetX || '0px'}
                        data-offset-y={layer.offsetY || '0px'}
                        style={{
                            backgroundImage: `url('${layer.src}')`,
                            backgroundPosition: layer.position || 'center',
                            zIndex: layer.z,
                            backgroundSize: layer.objectFit === 'contain' && layer.size ? layer.size : (layer.objectFit || 'cover'),
                            filter: getFilterStyle(layer)
                            // REMOVED: transform here too
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