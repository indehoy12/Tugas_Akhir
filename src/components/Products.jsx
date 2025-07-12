import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import kaospolos from '../assets/kaospolos.jpg'
import kemeja from '../assets/kemeja.jpg'
import Polo from '../assets/Polo.jpg'
import Hoddie from '../assets/Hoddie.jpg'
import jacket from '../assets/jacket.jpg'
import outer from '../assets/outerpria.jpg'
import croptop from '../assets/croptop.jpg'
import kemejawanita from '../assets/kemejawanita.jpg'
import blouse from '../assets/blouse.jpg'
import tunik from '../assets/tunik.jpg'
import sweater from '../assets/sweater.jpg'
import hoddiewanita from '../assets/hoddiewanita.jpg'


function Products() {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const items = [
    { id: 1, name: 'Kaos Polos', price: 59000, img: kaospolos },
    { id: 2, name: 'Kemeja', price: 199000, img: kemeja },
    { id: 3, name: 'Polo Shirt', price: 120000, img: Polo },
    { id: 4, name: 'Hoddie', price: 249000, img: Hoddie },
    { id: 5, name: 'Jacket', price: 319000, img: jacket },
    { id: 6, name: 'Outer Pria', price: 319000, img: outer },
    { id: 7, name: 'Crop top', price: 89000, img: croptop },
    { id: 8, name: 'Kemeja Wanita', price: 199000, img: kemejawanita},
    { id: 9, name: 'Blouse', price: 129000, img: blouse },
    { id: 10, name: 'Tunik', price: 139000, img: tunik },
    { id: 11, name: 'Sweater Wanita', price: 219000, img: sweater },
    { id: 12, name: 'Hoodie Wanita', price: 279000, img: hoddiewanita },
  ]

  const [quantities, setQuantities] = useState({})
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedQty, setSelectedQty] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [actionType, setActionType] = useState('')

const handleQtyChange = (id, value) => {
  const qty = Math.max(0, parseInt(value)) || 0;
  setQuantities(prev => ({ ...prev, [id]: qty }));
};

const openModal = (product, qty, type) => {
  if (qty === 0) {
    alert('Jumlah produk harus minimal 1 untuk melanjutkan.');
    return;
  }

  setSelectedProduct(product)
  setSelectedQty(qty)
  setSelectedSize('')
  setActionType(type)

  const modal = new bootstrap.Modal(document.getElementById('buyModal'))
  modal.show()
}

  const handleConfirmAction = () => {
    if (!selectedSize) {
      alert('Silakan pilih ukuran terlebih dahulu.')
      return
    }

    if (actionType === 'cart') {
      addToCart({ ...selectedProduct, size: selectedSize }, selectedQty)
    } else if (actionType === 'buy') {
      navigate('/checkout', {
        state: {
          product: selectedProduct,
          qty: selectedQty,
          size: selectedSize
        }
      })
    }

  const modal = bootstrap.Modal.getInstance(document.getElementById('buyModal'))
  modal.hide()

  document.activeElement.blur()}

  const renderScrollList = (items) => (
    <div className="product-scroll mb-4 fade-in">
      {items.map(product => (
        <div className="card shadow-sm card-product" key={product.id}>
          <img src={product.img} alt={product.name} className="card-img-top" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Rp {product.price.toLocaleString()}</p>
         <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <button className="btn btn-sm btn-outline-secondary" onClick={() => handleQtyChange(product.id, (quantities[product.id] || 0) - 1)}>-</button>
            <span className="fw-bold">{quantities[product.id] || 0}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={() => handleQtyChange(product.id, (quantities[product.id] || 0) + 1)}>+</button>
         </div>

            <button
              className="btn btn-main mb-2"
              disabled={(quantities[product.id] || 0) === 0}
              onClick={() => openModal(product, quantities[product.id] || 0, 'cart')}>
              + Keranjang
            </button>

            <button
              className="btn btn-outline-secondary"
              disabled={(quantities[product.id] || 0) === 0}
              onClick={() => openModal(product, quantities[product.id] || 0, 'buy')}>
              Beli Sekarang
            </button>

          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section id="products" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 text-main">Produk Kami</h2>

        <h4 className="mb-3"></h4>
        {renderScrollList(items.slice(0, 6))}

        <h4 className="mb-3"></h4>
        {renderScrollList(items.slice(6, 12))}
      </div>

      <div className="modal fade" id="buyModal" tabIndex="-1" aria-labelledby="buyModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="buyModalLabel">Pilih Ukuran</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  <p><strong>{selectedProduct.name}</strong></p>
                  <div className="mb-3">
                    <label className="form-label">Ukuran:</label>
                    <select className="form-select" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                      <option value="">Pilih Ukuran</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              <button className="btn btn-warning" onClick={handleConfirmAction}>
                {actionType === 'buy' ? 'Lanjut Checkout' : 'Tambah ke Keranjang'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
