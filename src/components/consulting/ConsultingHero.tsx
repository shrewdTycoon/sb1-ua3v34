import Button from '../ui/Button';
import CheckIcon from '../icons/CheckIcon';

function ConsultingHero() {
  const benefits = [
    "Expert Guidance",
    "Strategic Marketing Leadership",
    "Hands-On Implementation Support",
    "Retainer based & Project based Offerings"
  ];

  return (
    <div className="mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Accelerate your Growth with <span className="text-blue-400">Strategic Brand-Led Marketing</span>
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 pt-[0.375rem]">
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-dark-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-96">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-dark-200 mb-6">
              Book a Consultation to discuss your marketing needs and explore how I can help accelerate your growth.
            </p>
            <Button className="w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultingHero;