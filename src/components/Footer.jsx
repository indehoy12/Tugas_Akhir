function Footer() {
  return (
    <footer
      className="text-center py-3"
      style={{
        background: 'linear-gradient(to right, #ffca28, #ffe082)',
        color: '#212529'
      }}
    >
      <p className="mb-0">
        &copy; {new Date().getFullYear()} <strong>J-Shirt</strong>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
