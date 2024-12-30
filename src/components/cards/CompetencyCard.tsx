interface CompetencyCardProps {
  skill: string;
}

function CompetencyCard({ skill }: CompetencyCardProps) {
  return (
    <div className="relative group h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm transition-all duration-300 group-hover:blur-md"></div>
      <div className="relative h-full bg-white/10 dark:bg-dark-800/40 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center transition-all duration-300 group-hover:bg-white/15 dark:group-hover:bg-dark-800/50 group-hover:scale-[1.02] flex items-center justify-center">
        <span className="text-white/90 font-medium">{skill}</span>
      </div>
    </div>
  );
}

export default CompetencyCard;