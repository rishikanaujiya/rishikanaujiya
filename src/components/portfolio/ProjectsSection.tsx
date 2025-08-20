import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import airbnbImage from '@/assets/airbnb-website.jpg';
import healthTrackingImage from '@/assets/health-tracking.jpg';
import signLanguageImage from '@/assets/sign-language.png';

const ProjectsSection = () => {
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Airbnb-like Website',
      description: 'Full-stack accommodation booking platform with user authentication, property listings, booking system, and payment integration. Built with modern MERN stack technologies.',
      image: airbnbImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rishikanaujiya',
      featured: true,
    },
    {
      title: 'Fit Planet - Gym Management',
      description: 'Comprehensive gym management system with member registration, workout tracking, trainer scheduling, and progress analytics. Modern React interface with real-time updates.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Context API', 'Local Storage', 'CSS3'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rishikanaujiya/GYM-MANAGMENT-SYSTEM',
      featured: true,
    },
    {
      title: 'Health Tracking Interface',
      description: 'Interactive health monitoring dashboard with patient data visualization, appointment scheduling, and medical records management. Full-stack solution with secure data handling.',
      image: healthTrackingImage,
      technologies: ['React.js', 'Node.js', 'Chart.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rishikanaujiya',
      featured: false,
    },
    {
      title: 'Sign Language to Text Conversion',
      description: 'AI-powered application that converts sign language gestures to text in real-time using computer vision and machine learning. Accessible technology for the hearing impaired.',
      image: signLanguageImage,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: 'https://github.com/rishikanaujiya',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="portfolio-gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl portfolio-card hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="portfolio-gradient text-primary-foreground font-semibold">
                    Featured
                  </Badge>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.warn(`Failed to load image: ${project.image}`);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="portfolio-gradient text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 backdrop-blur-sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-portfolio-surface-elevated hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="portfolio-gradient text-primary-foreground border-0 hover:opacity-90 transition-opacity px-8 py-3"
            asChild
          >
            <a href="https://github.com/rishikanaujiya" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;