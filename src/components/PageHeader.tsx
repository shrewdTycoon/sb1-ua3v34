interface PageHeaderProps {
  title: string;
  description: string;
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative mb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm"></div>
      <div className="relative bg-dark-800/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-dark-200">{description}</p>
      </div>
    </div>
  );
}

export default PageHeader;