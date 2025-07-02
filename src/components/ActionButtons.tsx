import React from 'react';
import { Phone, FileText, Briefcase, Mail, MessageSquare, Globe } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    { 
      title: 'Contact Me', 
      icon: Phone, 
      href: 'https://wa.me/923136955749',
      isPrimary: true
    },
    { 
      title: 'View Resume', 
      icon: FileText, 
      href: 'resume.pdf',
      isPrimary: false
    },
    { 
      title: 'Portfolio', 
      icon: Briefcase, 
      href: 'https://jawad-portfolio-orcin.vercel.app',
      isPrimary: false
    },
    { 
      title: 'Email Me', 
      icon: Mail, 
      href: 'mailto:jawadabbas680@gmail.com',
      isPrimary: false
    },
    { 
      title: "Let's Chat", 
      icon: MessageSquare, 
      href: 'https://wa.me/923136955749',
      isPrimary: false
    },
    { 
      title: 'My Website', 
      icon: Globe, 
      href: 'https://devg-jawa090s-projects.vercel.app',
      isPrimary: false
    },
  ];

  return (
    <div className="space-y-3">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <a
            key={index}
            href={button.href}
            className={`group block w-full p-4 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] ${
              button.isPrimary 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon size={20} />
                <span>{button.title}</span>
              </div>
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-sm">→</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ActionButtons;
