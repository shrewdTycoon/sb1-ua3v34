import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  return (
    <article className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-dark-800/40">
        <div className="flex flex-col md:flex-row gap-6">
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
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              <Link to={`/book-notes/${book.slug}`} className="hover:text-blue-400 transition-colors">
                {book.title}
              </Link>
            </h2>
            <p className="text-gray-400">by {book.author}</p>
            
            <div className="mt-4">
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

            <div className="mt-4">
              <p className="text-dark-200">{book.mainTakeaway}</p>
            </div>
            
            <div className="mt-4">
              <Link 
                to={`/book-notes/${book.slug}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read full notes →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BookCard;