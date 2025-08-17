import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Saree Elegance</h3>
            <p>Your trusted destination for authentic and beautiful sarees. We bring you the finest collection from across India.</p>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@sareeelegance.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Catalogue</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Silk Sarees</a></li>
              <li><a href="#">Cotton Sarees</a></li>
              <li><a href="#">Designer Sarees</a></li>
              <li><a href="#">Traditional Sarees</a></li>
              <li><a href="#">Party Wear</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">Care Instructions</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2025 Saree Elegance. All rights reserved.</p>
          </div>
          <div className="made-with">
            <span>Made with</span>
            <Heart size={16} fill="currentColor" />
            <span>for saree lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
