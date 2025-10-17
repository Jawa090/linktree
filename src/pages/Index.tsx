import ProfileHeader from '../components/ProfileHeader';
import ActionButtons from '../components/ActionButtons';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden relative max-w-sm w-full">
        {/* Decorative curves */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <path d="M20,20 Q80,20 80,80" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="p-6 space-y-4">
          <ProfileHeader />
          <ActionButtons />

          {/* View Projects button */}
          <div className="space-y-2">
            <Link
              to="/projects"
              className="w-full flex items-center justify-between py-3 px-4 bg-white border-2 border-purple-200 rounded-full text-purple-600 font-medium hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>View Projects</span>
              </div>
            </Link>
          </div>

          {/* View Portfolio button */}
          <div className="space-y-2">
            <a
              href="https://myportfolio-steel-nu-42.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-3 px-4 bg-white border-2 border-purple-200 rounded-full text-purple-600 font-medium hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>View Portfolio</span>
              </div>
            </a>
          </div>

          {/* Contact button */}
          <div className="space-y-2">
            <a
              href="https://wa.me/923136955749"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between py-3 px-4 bg-white border-2 border-purple-200 rounded-full text-purple-600 font-medium hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" fill="white" />
                  </svg>
                </div>
                <span>Contact Me</span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Made with ❤️ by Jawad
          </p>
        </div>

        {/* Bottom decorative curves */}
        <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <path d="M80,80 Q20,80 20,20" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;