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
        <Avatar className="w-20 h-20 border-3 border-white shadow-lg">
          <AvatarImage
            src="image.png"
            alt="Jawad Abbas"
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="bg-gradient-to-br from-teal-100 to-blue-100 text-gray-700 text-xl font-bold">
            JA
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-bold text-purple-600">
          Jawad Abbas
        </h1>
        <p className="text-sm text-gray-600 leading-tight">
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
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-purple-100 hover:text-purple-600"
                aria-label={link.label}
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
