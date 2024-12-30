import Button from '../ui/Button';

function CustomProject() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-6">Custom Project</h2>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
        <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 group-hover:bg-dark-800/40">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Have a specific marketing problem you want to solve?
          </h3>
          <p className="text-dark-200 mb-6">
            Let's design a customized project to tackle your marketing challenges.
          </p>
          <Button>Schedule a Discussion</Button>
        </div>
      </div>
    </section>
  );
}

export default CustomProject;