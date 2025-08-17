import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Shield, Truck } from 'lucide-react'

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const savings = totalAmount > 5000 ? 500 : 0

  const handleOrder = () => {
    if (cartItems.length === 0) return
    
    alert(`🎉 Order placed successfully!\n\nOrder Summary:\n• Total Items: ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}\n• Subtotal: ₹${totalAmount.toLocaleString()}\n• Savings: ₹${savings.toLocaleString()}\n• Final Total: ₹${(totalAmount - savings).toLocaleString()}\n\n📦 Your order will be delivered within 3-5 business days.\n🎊 Thank you for choosing Saree Elegance!`)
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart-header">
          <h2>Your Shopping Cart</h2>
          {cartItems.length > 0 && (
            <p className="cart-subtitle">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
            </p>
          )}
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <ShoppingBag size={80} />
            </div>
            <h3>Your cart feels a little empty</h3>
            <p>Let's fill it up with some beautiful sarees from our collection!</p>
            <div className="empty-cart-features">
              <div className="feature-item">
                <Truck size={20} />
                <span>Free shipping on all orders</span>
              </div>
              <div className="feature-item">
                <Shield size={20} />
                <span>30-day return guarantee</span>
              </div>
              <div className="feature-item">
                <CreditCard size={20} />
                <span>Secure payment options</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-category">{item.category} Saree</p>
                      <p className="item-description">{item.description}</p>
                      <div className="item-features">
                        <span className="feature-tag">Free Shipping</span>
                        <span className="feature-tag">Authentic</span>
                      </div>
                    </div>
                    
                    <div className="item-actions">
                      <div className="price-display">
                        <span className="unit-price">₹{item.price.toLocaleString()}</span>
                        <span className="price-label">per piece</span>
                      </div>
                      
                      <div className="quantity-section">
                        <label>Quantity:</label>
                        <div className="quantity-controls">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="qty-btn"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="qty-btn"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="item-total">
                        <span className="total-label">Total:</span>
                        <span className="total-amount">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                      
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove from cart"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cart-summary-section">
              <div className="cart-summary">
                <h3>Order Summary</h3>
                
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                    <span>₹{totalAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="summary-row">
                    <span>Shipping:</span>
                    <span className="free-text">FREE</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="summary-row savings">
                      <span>Bulk Order Discount:</span>
                      <span>-₹{savings.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="summary-row tax">
                    <span>Tax:</span>
                    <span>Included</span>
                  </div>
                  
                  <div className="summary-divider"></div>
                  
                  <div className="summary-row total">
                    <span>Total Amount:</span>
                    <span>₹{(totalAmount - savings).toLocaleString()}</span>
                  </div>
                </div>

                <div className="payment-security">
                  <div className="security-badge">
                    <Shield size={16} />
                    <span>Secure Checkout</span>
                  </div>
                </div>
                
                <button className="order-btn" onClick={handleOrder}>
                  <CreditCard size={18} />
                  Proceed to Checkout
                </button>

                <div className="order-benefits">
                  <div className="benefit-item">
                    <Truck size={16} />
                    <span>Free delivery in 3-5 days</span>
                  </div>
                  <div className="benefit-item">
                    <Shield size={16} />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
