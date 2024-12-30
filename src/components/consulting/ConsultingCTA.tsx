import Button from '../ui/Button';

function ConsultingCTA() {
  return (
    <section className="mb-16">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md animate-gradient"></div>
        <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 group-hover:bg-dark-800/40">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-dark-200 mb-8">
              Book a Consultation to discuss your marketing needs and explore how I can help accelerate your growth.
            </p>
            <Button className="px-8">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultingCTA;