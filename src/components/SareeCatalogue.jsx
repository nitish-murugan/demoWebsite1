import { useState } from 'react'
import { Plus, Filter, Search, Heart, Eye } from 'lucide-react'

const SareeCatalogue = ({ sarees, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', ...new Set(sarees.map(saree => saree.category))]

  const filteredSarees = sarees
    .filter(saree => {
      const matchesCategory = selectedCategory === 'All' || saree.category === selectedCategory
      const matchesSearch = saree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           saree.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'name': return a.name.localeCompare(b.name)
        default: return 0
      }
    })

  return (
    <section className="catalogue">
      <div className="container">
        <div className="catalogue-header">
          <div className="header-content">
            <h2>Our Saree Collection</h2>
            <p>Discover the perfect saree for every occasion from our curated collection</p>
          </div>
          
          <div className="catalogue-controls">
            <div className="search-filter-row">
              <div className="search-box">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search sarees, patterns, colors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="sort-dropdown">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            <div className="category-filters">
              <span className="filter-label">
                <Filter size={16} />
                Categories:
              </span>
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category}
                    className={selectedCategory === category ? 'filter-btn active' : 'filter-btn'}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="count">
                        ({sarees.filter(s => s.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="results-info">
            <span className="results-count">
              Showing {filteredSarees.length} of {sarees.length} sarees
            </span>
          </div>
        </div>

        <div className="saree-grid">
          {filteredSarees.map(saree => (
            <div key={saree.id} className="saree-card">
              <div className="saree-image">
                <img src={saree.image} alt={saree.name} />
                <div className="image-overlay">
                  <button className="overlay-btn">
                    <Eye size={16} />
                  </button>
                  <button className="overlay-btn">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="category-tag">{saree.category}</div>
                {saree.price > 3000 && <div className="premium-badge">Premium</div>}
              </div>
              
              <div className="saree-info">
                <div className="saree-header">
                  <h3>{saree.name}</h3>
                  <div className="rating">
                    {'★'.repeat(5)}
                    <span>(4.8)</span>
                  </div>
                </div>
                <p className="description">{saree.description}</p>
                <div className="price-section">
                  <div className="price">₹{saree.price.toLocaleString()}</div>
                  <div className="price-note">Free Shipping</div>
                </div>
                
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(saree)}
                >
                  <Plus size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSarees.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No sarees found</h3>
            <p>Try adjusting your search criteria or browse all categories</p>
            <button 
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default SareeCatalogue
