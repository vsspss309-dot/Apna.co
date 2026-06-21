import { Code2, Zap, Target, Users } from "lucide-react";

const JobHighlights = ({ job }) => {
  const highlights = [
    {
      icon: Code2,
      title: "Tech Stack",
      items: job.skills,
    },
    {
      icon: Target,
      title: "Key Responsibilities",
      items: [
        "Build scalable solutions",
        "Collaborate with teams",
        "Code reviews & mentoring",
      ],
    },
    {
      icon: Zap,
      title: "Why Join Us",
      items: [
        "Learning opportunities",
        "Modern tech stack",
        "Flexible work options",
      ],
    },
    {
      icon: Users,
      title: "Growth Opportunities",
      items: [
        "Leadership paths",
        "Skill development",
        "Industry certifications",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {highlights.map((highlight, idx) => {
        const Icon = highlight.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
            </div>
            <ul className="space-y-2">
              {highlight.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default JobHighlights;
