import Button from '../ui/Button';

interface ConsultingCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration?: string;
}

function ConsultingCard({ title, subtitle, description, features, duration }: ConsultingCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 transition-all duration-300 group-hover:bg-dark-800/40">
        {/* Title and Subtitle - Full Width */}
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-lg text-blue-400 mb-4">{subtitle}</p>
        <hr className="border-dark-800 mb-6" />
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Description and Actions */}
          <div className="flex-1">
            <p className="text-dark-200 mb-6">{description}</p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {duration && (
                <div className="flex items-center gap-2 text-sm text-dark-300">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>{duration}</span>
                </div>
              )}
              <Button className="w-full sm:w-auto">Book a Consultation</Button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full lg:w-96 border-t lg:border-l lg:border-t-0 border-white/10 pt-6 lg:pt-0 lg:pl-8">
            <h4 className="text-sm font-medium text-dark-300 uppercase tracking-wider mb-4">What's Included</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-dark-200">
                  <span className="text-blue-400 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultingCard;