function StandardHero() {
  return (
    <div className="relative mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Marketing Consulting Services</h1>
        <p className="text-lg text-dark-200">
          Strategic marketing expertise to help your business grow. Choose from specialized workshops 
          or ongoing advisory services tailored to your needs.
        </p>
      </div>
    </div>
  );
}

export default StandardHero;