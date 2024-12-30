import { format } from 'date-fns';

const book = {
  title: "The Compelling Communicator",
  author: "Tim Pollard",
  rating: 5,
  dateRead: "2024-03",
  coverImage: "https://i.ibb.co/VVR2wGY/compelling-communicator.jpg",
  mainTakeaway: "A transformative read that revolutionized my approach to presentations. Pollard's insights on narrative structure and audience retention have fundamentally changed how I think about communication."
};

const keyIdeas = [
  "Communication is about powerfully landing a small number of big ideas",
  "Context is crucial for human learning and retention",
  "The brain has limited working memory - use it wisely",
  "Structure and sequence create essential context for the audience"
];

const favoriteQuotes = [
  "Don't prove what doesn't need proving.",
  "The Designer has achieved perfection not when there is nothing more to add, but when there is nothing left to take away.",
  "Your most important sales presentations happen when you are not in the room.",
  "Communication is about getting ideas to land and stick in another person's brain."
];

const personalApplication = [
  "Focus on landing 3-4 key insights rather than overwhelming with data",
  "Structure presentations to build context progressively",
  "Always consider the audience's perspective and needs",
  "Use transitions to create logical flow between ideas"
];

const highlights = [
  "The brain processes new information with 'working memory', which is extremely limited",
  "Most presentations fail because they lack a clear narrative structure",
  "Every presentation should be anchored in the audience's problem",
  "Transitions are crucial for creating context and maintaining flow"
];

const detailedNotes = `One useful principle of presentation design is: "Don't prove what doesn't need proving."

Time is the most precious resource in most presentations, yet presenters routinely burn that time hammering a point that the audience is already sold on.

Every presentation is ultimately about getting action. We present for a reason, we want people to do something. We present to drive action. 

Whenever our company works with a sales messaging client, we conduct a simple, two - question pulse survey - on a scale from one to ten (ten being stupendous and one being horrible), to assess A) the quality of the core solutions they sell, and B) the quality of the messaging of those same solutions. In other words, how well they are telling their story to the customer.

There's nothing more agonizing than battling to finally get that elusive customer meeting, and then blowing it with a 3.9 out of 10 conversation. Truly, a customer conversation is a terrible thing to waste.

"When you are in the role of customer and the salesperson makes a poor pitch, to what extent does that affect your perception of the underlying value of the product / solution being sold?"

The typical presentation offers too much information, is confusing, illogical, uninteresting, too slide-driven, and too sender-oriented.`;

function CompellingCommunicator() {
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
          {keyIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </section>

      {/* Favorite Quotes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Favorite Quotes</h2>
        <ul className="list-disc pl-6 space-y-2">
          {favoriteQuotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </section>

      {/* Personal Application */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Personal Application</h2>
        <ul className="list-disc pl-6 space-y-2">
          {personalApplication.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      {/* Detailed Notes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Detailed Notes</h2>
        <div className="space-y-4 whitespace-pre-line">
          {detailedNotes}
        </div>
      </section>
    </div>
  );
}

export default CompellingCommunicator;