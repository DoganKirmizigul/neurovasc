import React from "react";

function Technology() {
  return (
    <div className="page-container">
      <h1>Technology</h1>
      <div className="technology-content">
        <section className="product-features">
          <h2>Product Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>1. Soft Material and Safe Design</h3>
              <p>
                Soft braided Nitinol filter provides excellent passage in
                tortuous vessels.
              </p>
            </div>

            <div className="feature-item">
              <h3>2. Precise Positioning Markers</h3>
              <p>
                Two radiopaque markers at proximal and distal ends ensure
                axially precise positioning.
              </p>
            </div>

            <div className="feature-item">
              <h3>3. Effective Filter Pore Design</h3>
              <p>
                Gradient filter pore diameter (80μm-160μm) provides much lower
                endovascular pressure.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Technology;
