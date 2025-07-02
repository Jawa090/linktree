import React, { useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Camera, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SocialLinks from './SocialLinks';

const ProfileHeader = () => {
  const [profileImage, setProfileImage] = useState<string>('image.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
        toast({
          title: "Profile photo updated",
          description: "Your profile picture has been successfully updated!",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="text-center space-y-6 mb-8">
      <div className="relative inline-block group">
        <Avatar className="w-24 h-24 border-3 border-white shadow-xl ring-4 ring-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
          <AvatarImage 
            src={profileImage} 
            alt="Jawad" 
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
            J
          </AvatarFallback>
        </Avatar>
        
        {/* Upload overlay */}
        <div 
          onClick={triggerFileInput}
          className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
          <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Upload button */}
        <button
          onClick={triggerFileInput}
          className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full border-3 border-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Upload profile picture"
        >
          <Upload className="w-4 h-4 text-white" />
        </button>
        
        {/* Online indicator */}
        <div className="absolute -bottom-1 -left-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white animate-pulse"></div>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>
      
      <div className="space-y-3">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Jawad Abbas</h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-lg text-gray-700 font-semibold">Full-Stack Developer</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto font-medium">
          Building amazing web experiences with React js , Node js & Ai integration
        </p>
        
        {/* Professional badges */}
        <div className="flex justify-center space-x-2 mt-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
            Available for hire
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
            Remote friendly
          </span>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ProfileHeader;
