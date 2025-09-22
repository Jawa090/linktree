import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MapPin, Clock } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ProfileHeader = () => {
  return (
    <div className="text-center space-y-6">
      {/* Profile Image - enhanced */}
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur opacity-30"></div>
        <Avatar className="relative w-32 h-32 border-4 border-white shadow-xl">
          <AvatarImage
            src="image.png"
            alt="Jawad Abbas"
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 text-4xl font-bold">
            JA
          </AvatarFallback>
        </Avatar>
        {/* Verified badge */}
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Jawad Abbas
            </h1>
            <p className="text-lg text-blue-600 font-semibold">Full-Stack Developer</p>
          </div>

          {/* Location and timezone */}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Pakistan</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>GMT+5</span>
            </div>
          </div>
        </div>

        {/* Enhanced professional badges */}
        <div className="flex justify-center flex-wrap gap-2 mt-4">
          <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-200 animate-pulse">
            🟢 Available for hire
          </span>
          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
            🌍 Remote friendly
          </span>
          <span className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full border border-purple-200">
            ⚡ Quick response
          </span>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileHeader;
