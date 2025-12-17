import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MessageCircle, Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const ProfileHeader = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Jawa090', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://wa.me/923434364680', label: 'WhatsApp' },
    { icon: Instagram, href: 'https://www.instagram.com/_.alijawad/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/JStudio090?t=jUX_MjFdJc2OqPC-NShA1w&s=08', label: 'X (Twitter)' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/-alijawad', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jawadabbas680@gmail.com', label: 'Email' },
  ];

  return (
    <div className="text-center space-y-3">
      {/* Profile Image - compact */}
      <div className="relative inline-block">
        <Avatar className="w-20 h-20 border-2 border-gray-500 shadow-xl ring-2 ring-white/10">
          <AvatarImage
            src="image.png"
            alt="Jawad Abbas"
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white text-xl font-bold">
            JA
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          Jawad Abbas
        </h1>
        <p className="text-sm text-gray-300 leading-tight font-medium">
          Full-Stack Developer, React & Node.js,<br />
          and AI/ML solutions
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-2 pt-2">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800/60 text-gray-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white border border-gray-600 hover:border-gray-400 backdrop-blur-sm shadow-lg hover:shadow-white/10"
                aria-label={link.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
