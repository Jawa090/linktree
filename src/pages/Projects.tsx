import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: "3Remotors",
      url: "https://3remotors.com/",
      description: "Vehicle listing and selling platform for purchasing technology",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Vehicle listings, buying/selling functionality, search filters, user profiles",
      impact: "Streamlining vehicle marketplace transactions with modern technology"
    },
    {
      name: "BitWords",
      url: "https://bitwords.com/",
      description: "Portfolio site for my company showcasing services and expertise",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Company portfolio, service showcase, client testimonials, contact system",
      impact: "Professional company representation and client engagement platform"
    },
    {
      name: "Fusion Cortex",
      url: "https://fusioncortex.com/",
      description: "Service site for company providing technology solutions",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Service listings, project showcases, client management, consultation booking",
      impact: "Comprehensive platform for technology service delivery and client management"
    },
    {
      name: "Paradise Estimating",
      url: "https://paradiseestimating.com/",
      description: "Marketing site for construction management services",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Service marketing, project galleries, cost estimation tools, client inquiries",
      impact: "Professional marketing platform for construction estimation services"
    },
    {
      name: "Estimating Hub",
      url: "https://estimatinghub.com/",
      description: "Marketing site for construction management services",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Construction service marketing, project management tools, cost estimation platform",
      impact: "Centralized platform for construction estimation and project management services"
    },
    {
      name: "DEC Experts",
      url: "https://decexperts.com/",
      description: "Marketing site for construction management services",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Expert profiles, construction consulting, project management, client services",
      impact: "Connecting construction professionals with expert management and consulting services"
    },
    {
      name: "BitSocial",
      url: "https://bitsocial.com/",
      description: "Social media selling agent platform built for social commerce",
      technology: "React.js with modern frontend technologies",
      features: "Social media integration, selling tools, agent management, analytics dashboard",
      impact: "Empowering social media agents with professional selling tools and analytics"
    },
    {
      name: "Contractors List",
      url: "https://contractorslist.com/",
      description: "Marketplace platform similar to PlanHub for construction professionals",
      technology: "MERN Stack and various modern technologies",
      features: "Contractor directory, project bidding, marketplace functionality, professional networking",
      impact: "Comprehensive marketplace connecting contractors with construction opportunities"
    },
    {
      name: "Remote Seat",
      url: "https://remoteseat.com/",
      description: "Services site for remote work solutions and consulting",
      technology: "React.js with modern web technologies",
      features: "Remote work services, consultation booking, resource library, client management",
      impact: "Facilitating remote work transitions and providing professional remote work solutions"
    },
    {
      name: "Rush Corporation",
      url: "https://rushcorporation.com/",
      description: "Company portfolio showcasing corporate services and expertise",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Corporate portfolio, service showcase, team profiles, client case studies",
      impact: "Professional corporate presence with comprehensive service representation"
    },
    {
      name: "Construction Estimating California",
      url: "https://constructionestimatingcalifornia.com/",
      description: "Construction management services for California region",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Regional construction services, cost estimation, project management, client portal",
      impact: "Providing specialized construction management services across California"
    },
    {
      name: "Construction Estimating New York",
      url: "http://constructionestimatingnewyork.com/",
      description: "Construction management services for New York region",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Regional construction services, cost estimation, project management, client portal",
      impact: "Delivering professional construction management services in New York"
    },
    {
      name: "Construction Estimating Texas",
      url: "http://constructionestimatingtexas.com/",
      description: "Construction management services for Texas region",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Regional construction services, cost estimation, project management, client portal",
      impact: "Comprehensive construction management solutions across Texas"
    },
    {
      name: "Drywall Estimating",
      url: "https://drywallestimating.us/",
      description: "Specialized drywall construction management services in USA",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Drywall estimation, project planning, material calculations, contractor network",
      impact: "Expert drywall estimation services for construction professionals nationwide"
    },
    {
      name: "Electrical Estimates",
      url: "https://electricalestimates.us/",
      description: "Electrical construction management services across USA",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Electrical estimation, wiring calculations, project management, contractor matching",
      impact: "Professional electrical estimation services for construction industry"
    },
    {
      name: "Estimating Florida",
      url: "https://estimatingflorida.com/",
      description: "Construction management services for Florida region",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Regional construction services, cost estimation, project management, client portal",
      impact: "Specialized construction management solutions for Florida market"
    },
    {
      name: "MEP Estimate",
      url: "https://mepestimate.us/",
      description: "Mechanical, Electrical, and Plumbing construction management services",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "MEP estimation, system design, project coordination, technical consulting",
      impact: "Expert MEP estimation services for complex construction projects"
    },
    {
      name: "Lumber Takeoff",
      url: "http://lumberstakeoff.us/",
      description: "Lumber and material takeoff services for construction projects",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Material takeoff, lumber calculations, cost analysis, supplier network",
      impact: "Accurate lumber estimation services for construction professionals"
    },
    {
      name: "Phoenix Estimating",
      url: "https://phoenixestimating.com/",
      description: "Construction management services for Phoenix and Arizona region",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Regional construction services, cost estimation, project management, client portal",
      impact: "Professional construction management solutions for Phoenix market"
    },
    {
      name: "Paradise Roofers",
      url: "http://paradiseroofers.com/",
      description: "Roofing construction management services across USA",
      technology: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      features: "Roofing estimation, material calculations, contractor network, project management",
      impact: "Specialized roofing services and estimation for construction industry"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">My Projects</h1>
          <p className="text-muted-foreground">A showcase of my work and contributions across various domains</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-lg border border-border p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">{project.name}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors text-center sm:text-left flex-shrink-0"
                  >
                    Visit Site
                  </a>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-card-foreground leading-relaxed">
                    <span className="font-medium text-primary">Overview:</span> {project.description}
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    <span className="font-medium text-primary">Technology:</span> {project.technology}
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    <span className="font-medium text-primary">Features:</span> {project.features}
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    <span className="font-medium text-primary">Impact:</span> {project.impact}
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