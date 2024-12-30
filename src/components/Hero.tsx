interface HeroProps {
  name: string;
  nickname: string;
}

function Hero({ name, nickname }: HeroProps) {
  return (
    <section className="mb-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Hi, I'm <span className="text-blue-400">{nickname}</span> 👋
          </h1>
          <h2 className="text-2xl text-dark-300 mb-8 tracking-wide">
            Marketer  🎯  Builder  🛠️  Operator  🚀
          </h2>
          <hr className="border-dark-800 mb-8" />
          <div className="text-xl text-dark-200 leading-relaxed space-y-8">
            <p>
              I'm a marketer with expertise in bringing products to market (GTM). With a strong background in B2B SaaS, I specialize in positioning, messaging, and enabling sales through impactful marketing.
            </p>
            <p>
              My past experience in product management and software engineering allows me to create alignment between leadership, product, marketing, and sales teams. By understanding technical and business perspectives, I bridge gaps, orchestrate collaboration, and drive revenue.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-dark-800">
          <img
            src="https://i.ibb.co/KNmw3m8/profile.jpg"
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero