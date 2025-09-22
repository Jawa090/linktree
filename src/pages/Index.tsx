import ProfileHeader from '../components/ProfileHeader';
import ActionButtons from '../components/ActionButtons';
import Experience from '../components/Experience';
import HonorsAwards from '../components/HonorsAwards';

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="relative max-w-md mx-auto">
        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-8 space-y-8">
            <ProfileHeader />
            <ActionButtons />

            {/* Skills section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 text-center">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'Full-Stack'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Experience />
            <HonorsAwards />
          </div>

          {/* Footer */}
          <div className="text-center py-6 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-800 font-medium">
              Jawad Design portfolio
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Crafting digital experiences with passion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;