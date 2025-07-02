import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import SocialLinks from '../components/SocialLinks';
import ActionButtons from '../components/ActionButtons';
import Experience from '../components/Experience';
import HonorsAwards from '../components/HonorsAwards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 space-y-6">
          <ProfileHeader />
          <ActionButtons />
          <Experience />
          <HonorsAwards />
        </div>
        
        {/* Footer */}
        <div className="text-center py-4 bg-gray-50/50 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
