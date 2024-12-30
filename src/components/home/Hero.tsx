import HeroHeader from './HeroHeader';

interface HeroProps {
  name: string;
  nickname: string;
}

function Hero({ name, nickname }: HeroProps) {
  return (
    <section className="mb-16">
      <HeroHeader name={name} nickname={nickname} />
    </section>
  );
}

export default Hero;