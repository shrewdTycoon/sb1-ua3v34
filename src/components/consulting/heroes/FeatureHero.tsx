import Button from '../../ui/Button';

function FeatureHero() {
  const benefits = [
    "Strategic Growth", 
    "Expert Guidance",
    "Proven Results"
  ];

  return (
    <div className="relative mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-sm animate-gradient"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">
              Transform Your <span className="text-blue-400">Marketing</span> Strategy
            </h1>
            <p className="text-lg text-dark-200 mb-8">
              Get expert guidance to accelerate your growth with proven marketing strategies 
              and hands-on implementation support.
            </p>
            <div className="flex gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-dark-200 mb-6">
                Schedule a free consultation to discuss your marketing needs and explore how we can help.
              </p>
              <Button className="w-full">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureHero;