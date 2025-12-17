import { MessageCircle, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Jawa090', 
      label: 'GitHub'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/923434364680', 
      label: 'WhatsApp'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/_.alijawad/', 
      label: 'Instagram'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/JStudio090?t=jUX_MjFdJc2OqPC-NShA1w&s=08', 
      label: 'X (Twitter)'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/-alijawad', 
      label: 'LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:jawadabbas680@gmail.com', 
      label: 'Email'
    },
  ];

  return (
    <div className="flex justify-center space-x-3 py-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-200 border border-gray-200"
            aria-label={link.label}
          >
            <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
