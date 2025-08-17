import { Star, Award, Truck, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">✨ Premium Collection</span>
              <h1>Discover Timeless Elegance</h1>
              <p>Explore our exquisite collection of handpicked sarees from across India. Each piece tells a story of tradition, craftsmanship, and timeless beauty.</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Unique Designs</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50k+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="hero-cta">
                <button className="cta-primary">Explore Collection</button>
                <button className="cta-secondary">Watch Our Story</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600" 
                  alt="Beautiful Saree Collection" 
                />
                <div className="image-overlay">
                  <div className="overlay-badge">
                    <Star size={16} fill="currentColor" />
                    <span>Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={24} />
              </div>
              <h3>Premium Quality</h3>
              <p>Handwoven with finest materials and traditional techniques passed down through generations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={24} />
              </div>
              <h3>Authentic Designs</h3>
              <p>Traditional and contemporary styles curated from master weavers across India</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={24} />
              </div>
              <h3>Free Delivery</h3>
              <p>Complimentary shipping on all orders with secure packaging and tracking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={24} />
              </div>
              <h3>Quality Guarantee</h3>
              <p>30-day return policy with quality assurance on every piece you purchase</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
