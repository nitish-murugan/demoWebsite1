import { ShoppingCart, Home, Grid3X3, Phone, Settings } from 'lucide-react'

const Header = ({ currentView, setCurrentView, cartItemsCount }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Saree Elegance</h1>
          <p>Premium Collection</p>
        </div>
        
        <nav className="nav">
          <button 
            className={currentView === 'home' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('home')}
          >
            <Home size={20} />
            Home
          </button>
          <button 
            className={currentView === 'catalogue' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('catalogue')}
          >
            <Grid3X3 size={20} />
            Catalogue
          </button>
          <button 
            className={currentView === 'contact' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('contact')}
          >
            <Phone size={20} />
            Contact
          </button>
          <button 
            className={currentView === 'admin' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setCurrentView('admin')}
          >
            <Settings size={20} />
            Admin
          </button>
        </nav>

        <button 
          className={currentView === 'cart' ? 'cart-btn active' : 'cart-btn'}
          onClick={() => setCurrentView('cart')}
        >
          <ShoppingCart size={20} />
          Cart
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </button>
      </div>
    </header>
  )
}

export default Header
