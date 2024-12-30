import { thoughts } from '../data/thoughts';
import PageHeader from '../components/PageHeader';
import ThoughtCard from '../components/cards/ThoughtCard';

function Thoughts() {
  return (
    <>
      <PageHeader 
        title="Thoughts"
        description="Short-form posts, observations, and quick updates about what's on my mind."
      />

      <div className="space-y-12">
        {thoughts.map((thought) => (
          <ThoughtCard key={thought.date} {...thought} />
        ))}
      </div>
    </>
  );
}

export default Thoughts;