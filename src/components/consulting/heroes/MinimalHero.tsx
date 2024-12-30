import Button from '../../ui/Button';

function MinimalHero() {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-5xl font-bold text-white mb-6">
        Marketing Consulting
      </h1>
      <p className="text-xl text-dark-200 max-w-2xl mx-auto">
        Strategic guidance and hands-on support to help you achieve your marketing goals.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button>View Services</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </div>
  );
}

export default MinimalHero;