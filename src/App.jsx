import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <span className="text-gradient">FIDGET</span>INE
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#testimonials">Reviews</a>
            <a href="#buy" className="btn btn-secondary">Get Yours</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <div className="badge">New Release</div>
              <h1 className="hero-title">
                Experience the <br />
                <span className="text-gradient">Impossible</span>
              </h1>
              <p className="hero-subtitle">
                A 3D printed precision fidget spinner designed for ultimate focus, anxiety relief, and mesmerizing optical illusions.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => document.getElementById('buy').scrollIntoView({ behavior: 'smooth' })}>
                  BUY NOW <span className="price">£2.99</span>
                </button>
                <div className="guarantee">
                  <span className="icon">✓</span> Free Worldwide Shipping
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="spinner-placeholder">
                <img src="/spinner1.png" alt="Impossible Fidget Spinner" className="floating-product" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title text-center">Engineered for <span className="text-gradient">Perfection</span></h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">♾️</div>
                <h3>Impossible Geometry</h3>
                <p>3D printed using advanced SLA technology to create shapes that defy standard manufacturing constraints.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Frictionless Bearings</h3>
                <p>Equipped with aerospace-grade ceramic bearings for exceptionally smooth and long-lasting spins.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>Anxiety Relief</h3>
                <p>Ergonomically designed to provide satisfying tactile feedback that helps improve focus and reduce stress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="demo-section">
          <div className="container demo-content">
            <div className="demo-text">
              <h2>Mesmerizing <br />Optical Illusions</h2>
              <p>When spun at high speeds, the intricate geometric patterns create an incredible visual effect that calms the mind.</p>
              <ul className="demo-list">
                <li><span className="icon">✓</span> Ultra-quiet operation</li>
                <li><span className="icon">✓</span> Perfectly balanced weight distribution</li>
                <li><span className="icon">✓</span> Durable, drop-resistant resin</li>
              </ul>
            </div>
            <div className="demo-visual">
              <img src="/spinner2.png" alt="Spinner Demo" className="demo-image" />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2 className="section-title text-center">What People Say</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"The optical illusion when this spins is incredible. I keep it on my desk and use it during every meeting."</p>
                <span className="reviewer">- Sarah M.</span>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"By far the highest quality spinner I've owned. The ceramic bearings make it spin for minutes without stopping."</p>
                <span className="reviewer">- James T.</span>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"Helps immensely with my ADHD. The texture is perfect and it's practically silent."</p>
                <span className="reviewer">- Alex R.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Checkout Section (Stripe Integration) */}
        <section id="buy" className="checkout-section">
          <div className="container checkout-content">
            <div className="checkout-info">
              <h2>Ready to Transform Your Focus?</h2>
              <p>Order today and get free worldwide shipping on your Impossible Spinner.</p>
            </div>
            <div className="checkout-card">
              <div className="checkout-header">
                <h3>Impossible Spinner</h3>
                <div className="price-tag">£2.99</div>
              </div>
              <ul className="checkout-benefits">
                <li><span className="icon">✓</span> 1x Impossible Spinner</li>
                <li><span className="icon">✓</span> Premium carrying case</li>
                <li><span className="icon">✓</span> 30-day money-back guarantee</li>
              </ul>
              {/* Stripe Payment Link (Placeholder text, but functional behavior) */}
              <a href="https://buy.stripe.com/test_abcdef12345" target="_blank" rel="noreferrer" className="btn btn-primary stripe-btn">
                Checkout with <span className="stripe-logo">Stripe</span>
              </a>
              <p className="secure-text">🔒 Secure payment processing by Stripe</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <span className="text-gradient">FIDGET</span>INE
          </div>
          <p>&copy; 2026 Fidgetine. Built for optimal focus.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
