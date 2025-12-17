
import { Award, Star, Trophy, Medal, Code, Users } from 'lucide-react';

const HonorsAwards = () => {
  const achievements = [
    {
      title: 'Client Satisfaction',
      value: '98%',
      icon: Star,
      color: 'text-yellow-600 bg-yellow-50 border-yellow-100'
    },
    {
      title: 'Projects Completed',
      value: '15+',
      icon: Trophy,
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      title: 'Code Quality',
      value: 'A+',
      icon: Code,
      color: 'text-green-600 bg-green-50 border-green-100'
    },
    {
      title: 'Team Collaboration',
      value: '5★',
      icon: Users,
      color: 'text-purple-600 bg-purple-50 border-purple-100'
    }
  ];

  const certifications = [
    { name: 'React Developer', org: 'Meta', year: '2023' },
    { name: 'Node.js Certified', org: 'OpenJS', year: '2023' },
    { name: 'AWS Cloud', org: 'Amazon', year: '2024' },
    { name: 'TypeScript Expert', org: 'Microsoft', year: '2024' }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">Key Achievements</h2>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="p-3 bg-white rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 border ${achievement.color}`}>
                  <Icon size={18} />
                </div>
                <div className="font-bold text-lg text-gray-800">{achievement.value}</div>
                <h3 className="font-medium text-xs text-gray-600 leading-tight">{achievement.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-md font-semibold text-gray-800 text-center">Certifications</h3>
        <div className="space-y-2">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <span className="text-sm font-medium text-gray-800">{cert.name}</span>
                <span className="text-xs text-gray-500 ml-2">• {cert.org}</span>
              </div>
              <span className="text-xs text-blue-600 font-medium">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonorsAwards;
