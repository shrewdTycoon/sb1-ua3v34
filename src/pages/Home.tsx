import Hero from '../components/home/Hero';
import Description from '../components/home/Description';
import CoreCompetencies from '../components/CoreCompetencies';
import CurrentWork from '../components/CurrentWork';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <>
      <Hero
        name="Prasanna Deshpande"
        nickname="Pras"
      />
      <Description />
      <div className="space-y-16 prose dark:prose-invert max-w-none">
        <CoreCompetencies />
        <CurrentWork />
        <SocialLinks />
      </div>
    </>
  );
}

export default Home;