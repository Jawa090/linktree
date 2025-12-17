import { Building2, Calendar, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    { 
      company: 'BitWords.Inc', 
      duration: 'Present',
      role: 'Full Stack Developer',
      description: 'Leading development of scalable web applications using React & Node.js',
      achievement: '↗️ 40% performance improvement'
    },
    { 
      company: 'Ekhata ERP', 
      duration: '1 Year',
      role: 'Assistant Software Engineer',
      description: 'Working with AI skimming tools, free AI tools, LLM models, and backend development for ERP systems',
      achievement: '🤖 AI tools & LLM integration'
    },
    { 
      company: 'Connect Solutions', 
      duration: 'Dec 2022 - March 2023',
      role: 'AI/ML Internship',
      description: 'Built machine learning models for data analysis and automation',
      achievement: '🤖 3 ML models deployed'
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 text-center">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
                <Building2 size={18} className="text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm">{exp.company}</h3>
                <p className="text-sm text-blue-600 font-medium">{exp.role}</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">{exp.achievement}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
