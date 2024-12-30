import { format } from 'date-fns';
import { useState } from 'react';

interface ThoughtCardProps {
  date: string;
  title: string;
  excerpt: string;
  content: string;
}

function ThoughtCard({ date, title, excerpt, content }: ThoughtCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-dark-800/40">
        <time className="text-sm text-gray-400">
          {format(new Date(date), 'MMMM d, yyyy')}
        </time>
        <h2 className="text-2xl font-semibold text-white mt-2 mb-4">{title}</h2>
        <div className="prose dark:prose-invert max-w-none">
          {isExpanded ? (
            <div className="space-y-4 whitespace-pre-line">
              {content}
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-blue-400 hover:text-blue-300 transition-colors mt-4 block"
              >
                Minimize
              </button>
            </div>
          ) : (
            <div>
              <div className="line-clamp-3 mb-4">{excerpt}</div>
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read more
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ThoughtCard;