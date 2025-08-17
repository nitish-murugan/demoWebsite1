import { useState } from 'react'
import { Send, MessageCircle, Phone, Mail, MapPin, Clock, Star, Award } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    alert(`✨ Thank you ${formData.name}!\n\nYour message has been received successfully. Our customer care team will get back to you within 24 hours.\n\n📝 Subject: ${formData.subject}\n📧 We'll respond to: ${formData.email}\n\n🙏 We appreciate your interest in Saree Elegance!`)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="header-badge">
            <MessageCircle size={20} />
            <span>Get In Touch</span>
          </div>
          <h2>We'd Love to Hear From You</h2>
          <p>Have questions about our sarees or need assistance? Our dedicated team is here to help you find the perfect piece for any occasion.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p className="info-subtitle">Connect with us through any of these channels</p>
              
              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Phone Support</h4>
                    <p>+91 98765 43210</p>
                    <span className="availability">Available 10 AM - 8 PM</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Email Support</h4>
                    <p>info@sareeelegance.com</p>
                    <span className="availability">Response within 24 hours</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-details">
                    <h4>Visit Our Store</h4>
                    <p>123 Silk Street, Fashion District<br />Mumbai, Maharashtra 400001</p>
                    <span className="availability">Open 7 days a week</span>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <div className="hours-header">
                  <Clock size={20} />
                  <h4>Business Hours</h4>
                </div>
                <div className="hours-grid">
                  <div className="hours-row">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Sunday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="trust-indicators">
                <div className="trust-item">
                  <Star size={16} />
                  <span>4.9/5 Customer Rating</span>
                </div>
                <div className="trust-item">
                  <Award size={16} />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Custom Order">Custom Order Request</option>
                  <option value="Bulk Order">Bulk Order (10+ pieces)</option>
                  <option value="Size & Fitting">Size & Fitting Guide</option>
                  <option value="Shipping">Shipping & Delivery</option>
                  <option value="Return/Exchange">Return/Exchange</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Feedback">Feedback & Suggestions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you... Include any specific requirements, preferred styles, occasions, or questions you may have."
                  required
                ></textarea>
                <div className="char-count">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={16} />
                Send Message
              </button>

              <div className="form-footer">
                <p>By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
