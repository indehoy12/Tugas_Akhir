import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const scrollTo = location.state?.scrollTo
    if (location.pathname === '/' && scrollTo) {
      const el = document.getElementById(scrollTo)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    }
  }, [location])

  const handleNavigate = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }

    closeOffcanvas()
  }

  const goToPage = (path) => {
    navigate(path)
    closeOffcanvas()
  }

  const closeOffcanvas = () => {
    const el = document.getElementById('offcanvasNavbar')
    if (el && el.classList.contains('show')) {
      const offcanvas = window.bootstrap.Offcanvas.getInstance(el)
      offcanvas?.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
      <div className="container">
        <span className="navbar-brand fw-bold text-dark">J-Shirt</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn nav-link text-dark" onClick={() => handleNavigate('hero')}>Beranda</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-dark" onClick={() => handleNavigate('products')}>Produk</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-dark" onClick={() => goToPage('about')}>Tentang</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link text-dark" onClick={() => goToPage('/contact')}>Kontak</button>
            </li>
          </ul>
        </div>

          <div
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: '60vw' }}
          >
          <div className="offcanvas-header">
            <h5 id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn nav-link text-dark" onClick={() => handleNavigate('navbar')}>Beranda</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-dark" onClick={() => handleNavigate('products')}>Produk</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-dark" onClick={() => goToPage('about')}>Tentang</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-dark" onClick={() => goToPage('/contact')}>Kontak</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
