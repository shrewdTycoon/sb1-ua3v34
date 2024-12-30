import { Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { href: '/consulting', text: 'Consulting' },
  { href: '/thoughts', text: 'Thoughts' },
  { href: '/essays', text: 'Essays' },
  { href: '/book-notes', text: 'Book Reviews' },
]

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
        <nav className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-white/10 dark:bg-dark-900/40 backdrop-blur-xl rounded-2xl"></div>
          <div className="relative p-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl sm:text-2xl font-bold group">
                Hi, I'm <span className="text-blue-400 group-hover:text-blue-300 transition-colors">Pras</span> 👋
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-8">
                {links.map(({ href, text }) => (
                  <Link
                    key={href}
                    to={href}
                    className="text-dark-300 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 space-y-4">
                {links.map(({ href, text }) => (
                  <Link
                    key={href}
                    to={href}
                    className="block text-dark-300 hover:text-white transition-colors text-sm tracking-wide py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="h-28"></div>
    </>
  )
}

export default Navigation;