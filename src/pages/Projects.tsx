import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: "FreeTool AI",
      url: "https://freetoolai.com/",
      description: "Comprehensive AI tools platform offering various artificial intelligence solutions",
      technology: "Built with modern web technologies and AI integration",
      features: "Multiple AI tools, user-friendly interface, and seamless experience",
      impact: "Helping users leverage AI technology for productivity and creativity"
    },
    {
      name: "Skimming AI",
      url: "https://www.skimming.ai/",
      description: "Advanced content analysis platform powered by artificial intelligence",
      technology: "Machine learning algorithms for text processing and analysis",
      features: "Smart content summarization, keyword extraction, and insights",
      impact: "Streamlining content review and analysis for businesses and individuals"
    },
    {
      name: "3Remotors",
      url: "https://3remotors.com/",
      description: "Comprehensive remote work hub connecting talent with opportunities",
      technology: "Full-stack web application with modern frameworks",
      features: "Job matching, remote work resources, and community features",
      impact: "Facilitating remote work connections and career growth globally"
    },
    {
      name: "BitWords",
      url: "https://bitwords.com/",
      description: "Dynamic content platform for writers and content creators",
      technology: "Responsive web design with content management system",
      features: "Content creation tools, publishing platform, and analytics",
      impact: "Empowering writers to create, share, and monetize their content"
    },
    {
      name: "Fusion Cortex",
      url: "https://fusioncortex.com/",
      description: "Innovative technology solutions provider for modern businesses",
      technology: "Enterprise-grade architecture with scalable solutions",
      features: "Custom software development, consulting, and tech integration",
      impact: "Transforming businesses through cutting-edge technology solutions"
    },
    {
      name: "Paradise Estimating",
      url: "https://paradiseestimating.com/",
      description: "Professional cost estimation services for construction projects",
      technology: "Specialized estimation software with industry-standard tools",
      features: "Accurate cost calculations, project analysis, and detailed reports",
      impact: "Helping contractors and builders make informed financial decisions"
    },
    {
      name: "Estimating Hub",
      url: "https://estimatinghub.com/",
      description: "Centralized platform for project estimation and cost management",
      technology: "Cloud-based estimation tools with real-time collaboration",
      features: "Multi-project management, cost tracking, and team collaboration",
      impact: "Streamlining estimation processes for construction professionals"
    },
    {
      name: "DEC Experts",
      url: "https://decexperts.com/",
      description: "Expert consulting services across multiple industry verticals",
      technology: "Professional service platform with client management system",
      features: "Expert matching, consultation booking, and project management",
      impact: "Connecting businesses with specialized expertise for growth"
    },
    {
      name: "BitSocial",
      url: "https://bitsocial.com/",
      description: "Next-generation social platform for meaningful connections",
      technology: "Modern social media architecture with real-time features",
      features: "Social networking, content sharing, and community building",
      impact: "Creating authentic social experiences in the digital age"
    },
    {
      name: "Contractors List",
      url: "https://contractorslist.com/",
      description: "Comprehensive directory service for construction professionals",
      technology: "Database-driven platform with search and filtering capabilities",
      features: "Contractor profiles, reviews, project galleries, and contact system",
      impact: "Connecting property owners with qualified construction professionals"
    },
    {
      name: "Remote Seat",
      url: "https://remoteseat.com/",
      description: "Premier remote job platform for distributed teams and talent",
      technology: "Job board platform with advanced matching algorithms",
      features: "Remote job listings, candidate profiles, and hiring tools",
      impact: "Bridging the gap between remote talent and global opportunities"
    },
    {
      name: "Rush Corporation",
      url: "https://rushcorporation.com/",
      description: "Comprehensive business solutions provider for enterprise clients",
      technology: "Enterprise web platform with integrated business tools",
      features: "Business consulting, process optimization, and strategic planning",
      impact: "Accelerating business growth through strategic solutions and expertise"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h1>
          <p className="text-gray-600">A showcase of my work and contributions across various domains</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors"
                  >
                    Visit Site
                  </a>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-purple-600">Overview:</span> {project.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-purple-600">Technology:</span> {project.technology}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-purple-600">Features:</span> {project.features}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-purple-600">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;