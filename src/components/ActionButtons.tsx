import { ChevronDown, ChevronUp, Phone, FileText, Globe, Building2, Award, Star, Trophy, Code, Users } from 'lucide-react';
import { useState } from 'react';

const ActionButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences = [
    { 
      company: 'BitWords.Inc', 
      duration: 'April 2025 - Present',
      role: 'Full Stack Developer',
      description: 'Leading development of scalable web applications using React & Node.js',
      achievement: '↗️ 40% performance improvement'
    },
    { 
      company: 'Ekhata ERP', 
      duration: 'Feb 2024 - March 2025',
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

  const achievements = [
    { title: 'Client Satisfaction', value: '98%', icon: Star },
    { title: 'Projects Completed', value: '15+', icon: Trophy },
    { title: 'Code Quality', value: 'A+', icon: Code },
    { title: 'Team Collaboration', value: '5★', icon: Users }
  ];

  const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'Full-Stack', 'MongoDB', 'PostgreSQL'];

  return (
    <div className="space-y-2">
      {/* Resume button - First */}
      <a 
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-gray-600/50 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <FileText size={14} className="text-white" />
          </div>
          <span className="font-semibold">View Resume</span>
        </div>
      </a>

      {/* Website button - Second */}
      <a 
        href="https://devg-jawa090s-projects.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-gray-600/50 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <Globe size={14} className="text-white" />
          </div>
          <span className="font-semibold">Visit My Website</span>
        </div>
      </a>

      {/* Experience & Skills dropdown - Last */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-gray-600/50 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
            <Award size={14} className="text-white" />
          </div>
          <span className="font-semibold">View Experience & Skills</span>
        </div>
        <div className="text-gray-400">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Dropdown content */}
      {isExpanded && (
        <div className="bg-black/60 backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Experience Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white text-center">Experience</h3>
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <div key={index} className="p-3 bg-gray-800/50 rounded-xl border border-gray-600">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-gray-700/50 rounded-lg flex items-center justify-center">
                      <Building2 size={12} className="text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-xs text-white">{exp.company}</h4>
                        <span className="text-xs text-gray-400">{exp.duration}</span>
                      </div>
                      <p className="text-xs text-gray-300 font-medium">{exp.role}</p>
                      <p className="text-xs text-gray-400 mt-1 leading-tight">{exp.description}</p>
                      <span className="text-xs text-gray-300 font-medium mt-1 block">{exp.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white text-center">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-2">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="p-2 bg-gray-800/50 rounded-xl text-center border border-gray-600">
                    <div className="w-6 h-6 bg-gray-700/50 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <Icon size={12} className="text-gray-300" />
                    </div>
                    <div className="font-bold text-sm text-white">{achievement.value}</div>
                    <h4 className="font-medium text-xs text-gray-400">{achievement.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white text-center">Skills</h3>
            <div className="flex flex-wrap gap-1 justify-center">
              {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full border border-gray-600/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
