import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    { 
      company: 'BitWords.Inc', 
      duration: 'Prasent',
      role: 'Full Stack Developer',
    },
    { 
      company: 'Ekhata erp', 
      duration: '1 Year',
      role: 'Assistant Software Engineer',
    },
    { 
      company: 'Connect Solutions', 
      duration: 'Dec 2022 - March 2023',
      role: 'Ai/ML Internship',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 text-center">Experience</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-xl border border-gray-100"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <Building2 size={16} className="text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm">{exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.role}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                  <Calendar size={12} />
                  <span>{exp.duration}</span>
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
