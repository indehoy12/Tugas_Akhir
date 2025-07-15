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

  const renderScrollList = (items) => (
    <div className="product-scroll mb-4 fade-in">
      {items.map(product => (
        <div className="card shadow-sm card-product" key={product.id}>
          <img src={product.img} alt={product.name} className="card-img-top" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">Rp {product.price.toLocaleString()}</p>
         <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
            <button className="btn btn-sm btn-outline-secondary" >-</button>
            <span className="fw-bold">0</span>
            <button className="btn btn-sm btn-outline-secondary" >+</button>
         </div>

            <button
              className="btn btn-main mb-2">
              + Keranjang
            </button>

            <button
              className="btn btn-outline-secondary">
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
    </section>
  )
}

export default Products
