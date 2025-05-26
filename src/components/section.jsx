const Section = ({ id, title, text, layers }) => {
    return (
        <section
            id={id}
            className="parallax-section"
        >
            {/* Render parallax background layers */}
            {layers.map((layer, index) => (
                <div
                    key={index}
                    className="parallax-layer"
                    data-speed={layer.speed} // Store speed for JS calculation
                    data-display-mode={layer.displayMode} // New data attribute for display mode
                    style={{
                        backgroundImage: `url('${layer.src}')`,
                        backgroundPosition: layer.position || 'center', // Use custom position or default
                        zIndex: -1 * (layers.length - index) // Dynamic z-index for layering (furthest back = lowest z-index)
                    }}
                ></div>
            ))}

            <div className="parallax-overlay">
                <div className="section-content">
                    <h1 className="section-title">{title}</h1>
                    <p className="section-text">{text}</p>
                </div>
            </div>
        </section>
    );
};

export default Section;