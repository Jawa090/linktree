import ProfileHeader from '../components/ProfileHeader';
import ActionButtons from '../components/ActionButtons';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased items-center justify-center p-2 sm:p-4">
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Portfolio Content - Light bordered card */}
      <div className="relative z-20 max-w-lg w-full mx-2 sm:mx-0 p-4 sm:p-6 space-y-6 light-border rounded-xl">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Action Buttons */}
        <ActionButtons />
        
        {/* Navigation Links */}
        <div className="space-y-3">
          {/* View Projects button */}
          <Link
            to="/projects"
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-gray-600/50 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold">View Projects</span>
            </div>
          </Link>

          {/* View Portfolio button */}
          <a
            href="https://myportfolio-steel-nu-42.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-gray-600/50 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-gray-500/70 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold">View Portfolio</span>
            </div>
          </a>

          {/* Contact button */}
          <a
            href="https://wa.me/923136955749"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between py-3 px-4 bg-gray-800/60 border-2 border-green-500/30 rounded-xl text-white font-medium hover:bg-gray-700/60 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-green-500/20 hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="white" />
                </svg>
              </div>
              <span className="font-semibold">Contact Me</span>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="relative z-20 text-center py-4 mt-6">
          <p className="text-xs text-gray-400">
            Made with ❤️ by Jawad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;