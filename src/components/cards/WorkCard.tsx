import React from 'react';
import { Link } from 'react-router-dom';

interface WorkCardProps {
  leaderTitle: string;
  title: string;
  description: string;
  logo?: string;
  icon?: React.ReactNode;
  url: string;
}

function WorkCard({ leaderTitle, title, description, logo, icon, url }: WorkCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative bg-white/10 dark:bg-dark-800/40 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 transition-all duration-300 group-hover:bg-white/15 dark:group-hover:bg-dark-800/50">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="flex-1 min-w-0">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-sm font-medium text-blue-400 tracking-wider">{leaderTitle}</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-dark-200 text-base sm:text-lg leading-relaxed mt-3 text-center sm:text-left">{description}</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full sm:w-[160px]">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-white/15 dark:bg-dark-700/50 p-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
              {icon ? icon : (
                <img src={logo} alt={`${title} logo`} className="w-full h-full object-contain" loading="lazy" />
              )}
            </div>
            {url.startsWith('/') ? (
              <Link 
                to={url}
                className="inline-flex items-center px-6 py-3 bg-white/15 dark:bg-dark-700/50 hover:bg-white/20 dark:hover:bg-dark-700/70 text-white/90 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-[1.02] w-full justify-center"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            ) : (
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/15 dark:bg-dark-700/50 hover:bg-white/20 dark:hover:bg-dark-700/70 text-white/90 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-[1.02] w-full justify-center"
              >
                Visit Site <span className="ml-2">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;