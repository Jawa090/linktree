import React from 'react';
import { MessageCircle, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Jawa090', label: 'GitHub', color: 'text-gray-700 hover:text-gray-900' },
    { icon: MessageCircle, href: 'https://wa.me/923434364680', label: 'WhatsApp', color: 'text-green-600 hover:text-green-700' },
    { icon: Instagram, href: 'https://www.instagram.com/_.alijawad/', label: 'Instagram', color: 'text-pink-600 hover:text-pink-700' },
    { icon: Twitter, href: 'https://x.com/JStudio090?t=jUX_MjFdJc2OqPC-NShA1w&s=08', label: 'X (Twitter)', color: 'text-blue-400 hover:text-blue-500' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/-alijawad', label: 'LinkedIn', color: 'text-blue-600 hover:text-blue-700' },
    { icon: Mail, href: 'mailto:jawadabbas680@gmail.com', label: 'Email', color: 'text-red-600 hover:text-red-700' },
  ];

  return (
    <div className="flex justify-center space-x-4 py-2 flex-nowrap overflow-x-auto">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className={`w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all duration-200 hover:scale-110 ${link.color}`}
            aria-label={link.label}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
