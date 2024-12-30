import { books } from '../data/books';
import BookCard from '../components/BookCard';
import PageHeader from '../components/PageHeader';

function BookNotes() {
  return (
    <>
      <PageHeader 
        title="Book Reviews"
        description="A curated collection of insights and reflections from the books that have shaped my thinking. Each review captures key lessons and personal takeaways that I've found valuable."
      />

      <div className="space-y-12">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </>
  );
}

export default BookNotes;