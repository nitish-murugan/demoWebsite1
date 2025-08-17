import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SareeCatalogue from './components/SareeCatalogue'
import Cart from './components/Cart'
import ContactForm from './components/ContactForm'
import AdminPanel from './components/AdminPanel'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [sarees, setSarees] = useState([
    {
      id: 1,
      name: "Elegant Silk Saree",
      price: 2500,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Silk",
      description: "Beautiful handwoven silk saree with traditional motifs"
    },
    {
      id: 2,
      name: "Designer Cotton Saree",
      price: 1500,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Cotton",
      description: "Comfortable cotton saree perfect for daily wear"
    },
    {
      id: 3,
      name: "Georgette Party Wear",
      price: 3200,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Georgette",
      description: "Stunning georgette saree ideal for special occasions"
    },
    {
      id: 4,
      name: "Traditional Banarasi",
      price: 4500,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Banarasi",
      description: "Authentic Banarasi saree with gold thread work"
    },
    {
      id: 5,
      name: "Chiffon Evening Wear",
      price: 2800,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Chiffon",
      description: "Lightweight chiffon saree for evening parties"
    },
    {
      id: 6,
      name: "Handloom Pure Cotton",
      price: 1800,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "Cotton",
      description: "Eco-friendly handloom cotton saree"
    }
  ])

  const addToCart = (saree) => {
    const existingItem = cartItems.find(item => item.id === saree.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === saree.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...saree, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const addSaree = (newSaree) => {
    const sareeWithId = {
      ...newSaree,
      id: Math.max(...sarees.map(s => s.id)) + 1
    }
    setSarees([...sarees, sareeWithId])
  }

  return (
    <div className="App">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      {currentView === 'home' && (
        <>
          <Hero />
          <SareeCatalogue sarees={sarees} addToCart={addToCart} />
        </>
      )}
      
      {currentView === 'catalogue' && (
        <SareeCatalogue sarees={sarees} addToCart={addToCart} />
      )}
      
      {currentView === 'cart' && (
        <Cart 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      
      {currentView === 'contact' && <ContactForm />}
      
      {currentView === 'admin' && (
        <AdminPanel sarees={sarees} addSaree={addSaree} />
      )}
      
      <Footer />
    </div>
  )
}

export default App
