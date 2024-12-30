import ConsultingIcon from './icons/ConsultingIcon';
import WorkCard from './cards/WorkCard';

const projects = [
  {
    leaderTitle: "CONSULTING",
    title: "Strategic Brand-Led Marketing",
    description: "I help startups build stand out brands and establish themselves in their market.",
    icon: <ConsultingIcon className="w-20 h-20 text-[#03c1ff]" />,
    url: "/consulting"
  },
  {
    leaderTitle: "AGENCY",
    title: "Create Brand Collateral & Content",
    description: "Viavize helps your brand stand out by designing marketing & sales collateral that resonates with decision makers, and speaks to their needs at every stage of their journey.",
    logo: "https://i.ibb.co/jJqG6md/viavize-logo.jpg",
    url: "https://viavize.com/"
  }
];

function CurrentWork() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white">Let's Work</h2>
      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default CurrentWork;