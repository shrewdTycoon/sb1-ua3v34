import Button from '../ui/Button';
import LinkedIn from '../icons/LinkedIn';

interface HeroHeaderProps {
  name: string;
  nickname: string;
}

function HeroHeader({ name, nickname }: HeroHeaderProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="w-full md:max-w-[600px] text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8">
          Hi, I'm <span className="text-blue-400">{nickname}</span> 👋
        </h1>
        <h2 className="text-xl sm:text-2xl text-dark-300 mb-8 tracking-wide">
          I help startups become well-known {' '}<br className="hidden sm:block" />
          in their markets by building their brand
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            href="/consulting"
            size="md"
            className="text-base px-6 w-full sm:w-auto"
          >
            Book a Consultation
          </Button>
          <Button 
            href="https://www.linkedin.com/in/deshpandepras/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            className="text-base px-6 w-full sm:w-auto"
          >
            <LinkedIn className="w-5 h-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
      <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 flex-shrink-0">
        <div className="absolute inset-0 rounded-full border-4 border-dark-800">
          <img
            src="https://i.ibb.co/KNmw3m8/profile.jpg"
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;