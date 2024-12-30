import { format } from 'date-fns';
import PageHeader from '../components/PageHeader';

const essays = [
  {
    title: '(Coming Soon) Beyond Digital - What Everyone Should Know About Marketing',
    date: '2024-04-15',
    description: 'Stay tuned for upcoming long-form articles where I explore topics in depth, sharing insights and experiences from my journey in technology & startups.',
    slug: 'coming-soon'
  }
];

function Essays() {
  return (
    <>
      <PageHeader 
        title="Essays"
        description="Long-form articles where I explore topics in depth, sharing insights and experiences from my journey."
      />

      <div className="space-y-12">
        {essays.map((essay) => (
          <article key={essay.slug} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
            <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-dark-800/40">
              <h2 className="text-2xl font-semibold text-white">
                {essay.title}
              </h2>
              <time className="text-sm text-gray-400">
                {format(new Date(essay.date), 'MMMM d, yyyy')}
              </time>
              <p className="mt-2 text-dark-200">{essay.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Essays;