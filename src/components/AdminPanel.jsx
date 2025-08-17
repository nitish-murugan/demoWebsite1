import { useState } from 'react'
import { Upload, Plus, X } from 'lucide-react'

const AdminPanel = ({ sarees, addSaree }) => {
  const [showForm, setShowForm] = useState(false)
  const [newSaree, setNewSaree] = useState({
    name: '',
    price: '',
    image: '',
    category: '',
    description: ''
  })

  const categories = ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Banarasi', 'Handloom']

  const handleInputChange = (e) => {
    setNewSaree({
      ...newSaree,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!newSaree.name || !newSaree.price || !newSaree.image || !newSaree.category) {
      alert('Please fill in all required fields')
      return
    }

    const sareeToAdd = {
      ...newSaree,
      price: parseInt(newSaree.price)
    }

    addSaree(sareeToAdd)
    
    // Reset form
    setNewSaree({
      name: '',
      price: '',
      image: '',
      category: '',
      description: ''
    })
    
    setShowForm(false)
    alert('New saree added successfully!')
  }

  return (
    <section className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h2>Admin Panel</h2>
          <p>Manage your saree collection</p>
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Sarees</h3>
            <div className="stat-number">{sarees.length}</div>
          </div>
          <div className="stat-card">
            <h3>Categories</h3>
            <div className="stat-number">{new Set(sarees.map(s => s.category)).size}</div>
          </div>
          <div className="stat-card">
            <h3>Average Price</h3>
            <div className="stat-number">
              ₹{Math.round(sarees.reduce((sum, s) => sum + s.price, 0) / sarees.length).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="admin-actions">
          <button 
            className="add-saree-btn"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus size={16} />
            Add New Saree
          </button>
        </div>

        {showForm && (
          <div className="add-saree-form">
            <div className="form-header">
              <h3>Add New Saree</h3>
              <button 
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Saree Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newSaree.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Elegant Silk Saree"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Price (₹) *</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newSaree.price}
                    onChange={handleInputChange}
                    placeholder="e.g., 2500"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={newSaree.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL *</label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={newSaree.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newSaree.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of the saree..."
                  rows="3"
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <Upload size={16} />
                  Add Saree
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="current-inventory">
          <h3>Current Inventory</h3>
          <div className="inventory-grid">
            {sarees.map(saree => (
              <div key={saree.id} className="inventory-item">
                <img src={saree.image} alt={saree.name} />
                <div className="item-info">
                  <h4>{saree.name}</h4>
                  <p className="category">{saree.category}</p>
                  <p className="price">₹{saree.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
