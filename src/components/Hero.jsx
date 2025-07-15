import { useState, useEffect } from 'react';
import heroBg from '../assets/Hoddie.jpg';           

function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <header id="hero"
      className= "text-center py-5 position-relative hero-section"
      style={{
        backgroundImage: bgLoaded
          ? `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${heroBg})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#2c3e50',
      }}
      tabIndex="-1"
    >
      <div className="container position-relative fade-in">
        <h1 className="display-4 fw-bold">Selamat Datang di J-Shirt</h1>
        <p className="lead">Tampil Stylish dengan Koleksi Kaos Cerah & Modern!</p>
        <a href="#products" className="btn btn-main btn-lg mt-3">
          Lihat Produk
        </a>
      </div>
    </header>
  );
}

export default Hero;
