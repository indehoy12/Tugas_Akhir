import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const [nama, setNama] = useState('')
  const [metode, setMetode] = useState('Tunai')
  const [bayar, setBayar] = useState(false)

  const [totalBayar, setTotalBayar] = useState(0)
  const [produkTerakhir, setProdukTerakhir] = useState([])

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleBayar = () => {
    if (!nama.trim()) {
      alert('Nama pembeli wajib diisi!')
      return
    }

    setTotalBayar(total)
    setProdukTerakhir(cart)
    setBayar(true)
    clearCart()
  }

  const handleUpdateQty = (id, change) => {
    const item = cart.find(p => p.id === id)
    if (!item) return
    const newQty = item.qty + change
    if (newQty <= 0) {
      removeFromCart(id)
    } else {
      removeFromCart(id)
      for (let i = 0; i < newQty; i++) {
        addToCart(item, 1)
      }
    }
  }

  return (
    <div className="container my-5 fade-in">
      <h2 className="text-center text-main mb-4">Keranjang Belanja</h2>

      {cart.length === 0 && !bayar ? (
        <div className="text-center">
          <p>Keranjang Masih Kosong</p>
          <Link to="/" className="btn btn-outline-success mt-3">Kembali ke Produk</Link>
        </div>
      ) : bayar ? (
        <div className="alert alert-success mt-4 text-center">
          <h5>Pembayaran Berhasil!</h5>
          <p><strong>Nama:</strong> {nama}</p>
          <p><strong>Metode:</strong> {metode}</p>
          <p><strong>Total Dibayar:</strong> Rp {totalBayar.toLocaleString()}</p>
          <ul className="list-unstyled mt-3">
            {produkTerakhir.map((item, index) => (
              <li key={index}>
                {item.qty}x {item.name} 
                {item.size && ` (${item.size})`}
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-success mt-3" onClick={() => navigate('/')}>
            Belanja Lagi
          </button>
        </div>
      ) : (
        <>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Produk</th>
                <th>Ukuran</th>
                <th>Qty</th>
                <th>Harga</th>
                <th>Total</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Link to="/" className="text-decoration-underline text-dark">
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.size || '-'}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => handleUpdateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button className="btn btn-sm btn-outline-secondary" onClick={() => handleUpdateQty(item.id, 1)}>+</button>
                    </div>
                  </td>
                  <td>Rp {item.price.toLocaleString()}</td>
                  <td>Rp {(item.price * item.qty).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5"><strong>Total</strong></td>
                <td colSpan="2"><strong>Rp {total.toLocaleString()}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

          <div className="mt-4">
            <h5>Informasi Pembayaran</h5>
            <input
              type="text"
              placeholder="Nama Pembeli"
              className="form-control mb-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <select
              className="form-control mb-3"
              value={metode}
              onChange={(e) => setMetode(e.target.value)}
            >
              <option value="Tunai">Tunai</option>
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="QRIS">QRIS</option>
            </select>
            <button className="btn btn-success w-100 mb-2" onClick={handleBayar}>
              Bayar Sekarang
            </button>
            <button className="btn btn-outline-danger w-100" onClick={clearCart}>
              Kosongkan Keranjang
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
