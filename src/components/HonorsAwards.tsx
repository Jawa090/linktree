
import React from 'react';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const HonorsAwards = () => {
  const awards = [
    {
      title: 'Top Developer Award',
      organization: 'Tech Excellence 2023',
      icon: Trophy,
    },
    {
      title: 'Best Project Innovation',
      organization: 'CodeFest 2022',
      icon: Star,
    },
    {
      title: 'Outstanding Performance',
      organization: 'Company Recognition',
      icon: Medal,
    },
    {
      title: 'Community Contributor',
      organization: 'Open Source Awards',
      icon: Award,
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 text-center">Honors & Awards</h2>
      <div className="grid grid-cols-2 gap-3">
        {awards.map((award, index) => {
          const Icon = award.icon;
          return (
            <div
              key={index}
              className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-center"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 border border-gray-200">
                <Icon size={16} className="text-gray-600" />
              </div>
              <h3 className="font-medium text-xs text-gray-900 leading-tight">{award.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{award.organization}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HonorsAwards;
