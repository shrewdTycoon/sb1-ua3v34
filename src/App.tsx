import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Thoughts from './pages/Thoughts'
import Essays from './pages/Essays'
import BookNotes from './pages/BookNotes'
import BookNote from './pages/BookNote'
import Consulting from './pages/Consulting'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="thoughts" element={<Thoughts />} />
        <Route path="essays" element={<Essays />} />
        <Route path="book-notes" element={<BookNotes />} />
        <Route path="book-notes/:slug" element={<BookNote />} />
      </Route>
    </Routes>
  )
}

export default App