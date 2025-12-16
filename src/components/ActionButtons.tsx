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
    { title: 'Client Satisfaction', value: '98%', icon: Star, color: 'text-yellow-600 bg-yellow-50' },
    { title: 'Projects Completed', value: '15+', icon: Trophy, color: 'text-blue-600 bg-blue-50' },
    { title: 'Code Quality', value: 'A+', icon: Code, color: 'text-green-600 bg-green-50' },
    { title: 'Team Collaboration', value: '5★', icon: Users, color: 'text-purple-600 bg-purple-50' }
  ];

  const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'Full-Stack', 'MongoDB', 'PostgreSQL'];

  return (
    <div className="space-y-2">
      {/* Resume button - First */}
      <a 
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 bg-secondary border-2 border-primary/30 rounded-xl text-foreground font-medium hover:bg-accent transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <FileText size={12} className="text-white" />
          </div>
          <span>View Resume</span>
        </div>
      </a>

      {/* Website button - Second */}
      <a 
        href="https://devg-jawa090s-projects.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 bg-secondary border-2 border-primary/30 rounded-xl text-foreground font-medium hover:bg-accent transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Globe size={12} className="text-white" />
          </div>
          <span>Visit My Website</span>
        </div>
      </a>

      {/* Experience & Skills dropdown - Last */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 bg-secondary border-2 border-primary/30 rounded-xl text-foreground font-medium hover:bg-accent transition-colors"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Award size={12} className="text-white" />
          </div>
          <span>View Experience & Skills</span>
        </div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Dropdown content */}
      {isExpanded && (
        <div className="bg-card border-2 border-border rounded-2xl p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Experience Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-card-foreground text-center">Experience</h3>
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <div key={index} className="p-3 bg-muted rounded-xl border border-border">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Building2 size={12} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-xs text-card-foreground">{exp.company}</h4>
                        <span className="text-xs text-muted-foreground">{exp.duration}</span>
                      </div>
                      <p className="text-xs text-primary font-medium">{exp.role}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">{exp.description}</p>
                      <span className="text-xs text-primary font-medium mt-1 block">{exp.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-card-foreground text-center">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-2">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="p-2 bg-muted rounded-xl text-center border border-border">
                    <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-1">
                      <Icon size={12} className="text-primary" />
                    </div>
                    <div className="font-bold text-sm text-card-foreground">{achievement.value}</div>
                    <h4 className="font-medium text-xs text-muted-foreground">{achievement.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-card-foreground text-center">Skills</h3>
            <div className="flex flex-wrap gap-1 justify-center">
              {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
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
