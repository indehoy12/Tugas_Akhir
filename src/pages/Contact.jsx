function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Pesan berhasil dikirim. Terima kasih telah menghubungi kami!")
    e.target.reset()
  }

  return (
    <section className="py-5 bg-light fade-in">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4 text-main">Hubungi Kami</h2>
        <p className="text-center mb-4">Silakan isi formulir atau hubungi kami langsung melalui WhatsApp.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control" placeholder="Nama lengkap Anda" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="email@contoh.com" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tulis pesan Anda..." required></textarea>
          </div>
          <button type="submit" className="btn btn-main w-100">Kirim Pesan</button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
