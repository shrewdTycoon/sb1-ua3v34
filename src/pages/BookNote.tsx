import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { books } from '../data/books';
import { bookNotes } from '../data/bookNotes';

function BookNote() {
  const { slug } = useParams();
  const book = books.find(b => b.slug === slug);
  const note = bookNotes[slug || ''];

  if (!book || !note) {
    return <div>Book note not found</div>;
  }

  return (
    <div className="prose dark:prose-invert max-w-none">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm"></div>
        <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {book.coverImage && (
              <div className="w-[200px] flex-shrink-0">
                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-2">
                  <div className="aspect-[5/8] relative">
                    <img 
                      src={book.coverImage} 
                      alt={`Cover of ${book.title}`}
                      className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-gray-400 mb-4">by {book.author}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">My Rating</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < book.rating ? "text-yellow-400" : "text-gray-600"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    Read in {format(new Date(book.dateRead), 'MMMM yyyy')}
                  </span>
                </div>
              </div>
              <p className="text-lg">{book.mainTakeaway}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Ideas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Ideas</h2>
        <ul className="list-disc pl-6 space-y-2">
          {note.keyIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </section>

      {/* Favorite Quotes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Favorite Quotes</h2>
        <ul className="list-disc pl-6 space-y-2">
          {note.favoriteQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </section>

      {/* Personal Application */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Personal Application</h2>
        <ul className="list-disc pl-6 space-y-2">
          {note.personalApplication.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          {note.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      {/* Detailed Notes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Detailed Notes</h2>
        <div className="space-y-4 whitespace-pre-line">
          {note.detailedNotes}
        </div>
      </section>
    </div>
  );
}

export default BookNote;