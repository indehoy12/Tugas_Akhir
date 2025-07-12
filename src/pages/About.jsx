import { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#fff8dc' }}>
      <div className="container fade-in">

        {/* Tentang Kami */}
        <div className="mb-5 text-center">
          <h2 className="mb-3" style={{ color: '#2c3e50' }}>Tentang J-Shirt</h2>
          <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <strong>J-Shirt</strong> adalah brand lokal yang menawarkan kaos berkualitas tinggi dengan desain modern penuh gaya.
            Kami percaya bahwa pakaian adalah cara mengekspresikan diri, dan kami hadir untuk mendukung gaya unikmu melalui warna, bentuk, dan kenyamanan.
          </p>
        </div>

        <div className="mb-5 pt-4">
          <h3 className="text-center mb-4" style={{ color: '#2c3e50' }}>Pengalaman Kami</h3>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold text-main">5+ Tahun</h4>
              <p className="text-muted">Pengalaman di industri fashion lokal</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold text-main">50.000+</h4>
              <p className="text-muted">Pelanggan puas di seluruh Indonesia</p>
            </div>
            <div className="col-md-4 mb-4">
              <h4 className="fw-bold text-main">100% Lokal</h4>
              <p className="text-muted">Desain dan produksi buatan anak bangsa</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-center mb-4" style={{ color: '#2c3e50' }}>Apa Kata Pelanggan Kami?</h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="text-muted fst-italic">"Kualitasnya bagus banget! Kaosnya adem dan nyaman dipakai. Desainnya juga kekinian!"</p>
                  <h6 className="fw-bold mt-3">– Rizky, Jakarta</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="text-muted fst-italic">"Sudah langganan beli di J-Shirt. Selalu puas dengan pelayanan dan produk yang dikirim."</p>
                  <h6 className="fw-bold mt-3">– Ayu, Surabaya</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="text-muted fst-italic">"Pengirimannya cepat, kualitasnya oke, dan harganya pas di kantong. Recommended banget!"</p>
                  <h6 className="fw-bold mt-3">– Budi, Bandung</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
