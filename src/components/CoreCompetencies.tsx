import CompetencyCard from './cards/CompetencyCard';

const skills = [
  'Strategy',
  'Marketing',
  'Brand Building',
  'Positioning',
  'Messaging',
  'Content Development'
];

function CoreCompetencies() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">Core Competencies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
        {skills.map((skill) => (
          <CompetencyCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default CoreCompetencies;