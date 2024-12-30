import Button from './ui/Button';
import LinkedIn from './icons/LinkedIn';

function SocialLinks() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white text-center sm:text-left">Ready to Build Your Brand?</h2>
      <p className="mt-4 text-dark-200 text-center sm:text-left">
        If you are a founder, sales leader, marketer let's discuss how I can help your startup accelerate growth through brand-led marketing.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
        <Button 
          href="/consulting"
          size="lg"
          className="text-lg px-8 py-4 w-full sm:w-auto"
        >
          Book a Consultation
        </Button>
        <Button 
          href="https://www.linkedin.com/in/deshpandepras/"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="lg"
          className="text-lg px-8 py-4 w-full sm:w-auto"
        >
          <LinkedIn className="w-6 h-6" />
          Connect on LinkedIn
        </Button>
      </div>
    </section>
  );
}

export default SocialLinks;