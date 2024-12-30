import ConsultingCard from './ConsultingCard';
import { consultingOfferings } from '../../data/consultingOfferings';

function ProjectOfferings() {
  const projectOfferings = consultingOfferings.filter(o => 
    o.title !== "Fractional Marketing Lead"
  );

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6">Project Based Offerings</h2>
      <div className="space-y-16 relative">
        {projectOfferings.map((offering, index) => (
          <div key={offering.title} className="relative">
            {/* Background Graphics */}
            {index < projectOfferings.length - 1 && (
              <div className="absolute -bottom-12 left-0 right-0 h-8 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  {index % 3 === 0 && (
                    // Circular gradient
                    <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transform -translate-x-1/4" />
                  )}
                  {index % 3 === 1 && (
                    // Wave pattern
                    <div className="w-full h-16 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl transform rotate-2" />
                  )}
                  {index % 3 === 2 && (
                    // Diagonal gradient
                    <div className="w-full h-16 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl transform -rotate-2" />
                  )}
                </div>
              </div>
            )}
            
            {/* Card */}
            <ConsultingCard {...offering} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectOfferings;