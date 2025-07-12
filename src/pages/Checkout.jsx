import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Checkout() {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state?.product
  const qty = location.state?.qty || 1
  const size = location.state?.size || '-'

  const [nama, setNama] = useState("")
  const [metode, setMetode] = useState("Tunai")
  const [bayar, setBayar] = useState(false)

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <h4 className="text-danger">Produk tidak ditemukan</h4>
        <button className="btn btn-outline-secondary mt-3" onClick={() => navigate('/')}>Kembali</button>
      </div>
    )
  }

  const total = product.price * qty

  const handleBayar = () => {
    if (!nama.trim()) {
      alert("Nama wajib diisi!")
      return
    }
    setBayar(true)
  }

  return (
    <div className="container my-5 fade-in">
      <h2 className="text-main text-center mb-4">Checkout Sekarang</h2>

      {!bayar ? (
        <>
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p>Ukuran: {size}</p>
              <p>Harga: Rp {product.price.toLocaleString()}</p>
              <p>Jumlah: {qty}</p>
              <p>Total: <strong>Rp {total.toLocaleString()}</strong></p>
            </div>
          </div>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nama Pembeli"
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
        </>
      ) : (
        <div className="alert alert-success text-center">
          <h5>Pembayaran Berhasil!</h5>
          <p><strong>Nama:</strong> {nama}</p>
          <p><strong>Produk:</strong> {product.name}</p>
          <p><strong>Ukuran:</strong> {size}</p>
          <p><strong>Jumlah:</strong> {qty}</p>
          <p><strong>Total:</strong> Rp {total.toLocaleString()}</p>
          <p><strong>Metode:</strong> {metode}</p>
          <button className="btn btn-outline-success mt-3" onClick={() => navigate('/')}>
            Kembali ke Beranda
          </button>
        </div>
      )}
    </div>
  )
}

export default Checkout
