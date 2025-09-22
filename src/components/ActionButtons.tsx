import { Phone, FileText, Briefcase, Mail, MessageSquare, Globe, ExternalLink } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    { 
      title: '💬 Contact Me', 
      subtitle: 'Let\'s discuss your next project • Usually responds in 1 hour',
      icon: Phone, 
      href: 'https://wa.me/923136955749',
      isPrimary: true
    },
    { 
      title: '📄 View Resume', 
      subtitle: 'Download my detailed CV • Updated Dec 2024',
      icon: FileText, 
      href: 'resume.pdf',
      isPrimary: false
    },
    { 
      title: '🎨 Portfolio', 
      subtitle: 'Explore 15+ projects • React, Node.js & AI apps',
      icon: Briefcase, 
      href: 'https://myportfolio-steel-nu-42.vercel.app',
      isPrimary: false
    },
    { 
      title: '✉️ Email Me', 
      subtitle: 'Professional inquiries • Business partnerships',
      icon: Mail, 
      href: 'mailto:jawadabbas680@gmail.com',
      isPrimary: false
    },
    { 
      title: '🌐 My Website', 
      subtitle: 'Full portfolio & blog • Tech insights & tutorials',
      icon: Globe, 
      href: 'https://devg-jawa090s-projects.vercel.app',
      isPrimary: false
    },
  ];

  return (
    <div className="space-y-4">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <a
            key={index}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block w-full p-5 rounded-2xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg transform ${
              button.isPrimary 
                ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600' 
                : 'bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  button.isPrimary 
                    ? 'bg-white/20 group-hover:bg-white/30' 
                    : 'bg-gray-100 text-gray-600 group-hover:scale-110 border border-gray-200'
                }`}>
                  <Icon size={20} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base">{button.title}</div>
                  <div className={`text-sm ${button.isPrimary ? 'text-white/80' : 'text-gray-500'}`}>
                    {button.subtitle}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ActionButtons;
