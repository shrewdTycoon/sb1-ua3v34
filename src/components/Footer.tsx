const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="mt-24 py-8 border-t border-dark-800">
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-dark-400 text-sm">© {currentYear} Prasanna Deshpande</p>
      </div>
    </footer>
  );
}

export default Footer;