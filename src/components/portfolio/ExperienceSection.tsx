import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Part-time Internship',
      type: 'Internship',
      location: 'Remote',
      period: 'Current',
      description: [
        'Developing full-stack web applications using MERN stack technologies',
        'Collaborating with senior developers on real-world projects',
        'Implementing responsive UI/UX designs and RESTful APIs',
        'Learning industry best practices and modern development workflows'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      current: true,
    },
    {
      title: 'AI Intern',
      company: 'YBI Foundation',
      type: 'Internship',
      location: 'Remote',
      period: '07/2024 – 09/2024',
      description: [
        'Built AI-driven ML models for predictive analytics in healthcare & finance',
        'Developed machine learning algorithms using Python and TensorFlow',
        'Collaborated on data preprocessing and feature engineering projects',
        'Contributed to research on AI applications in real-world scenarios'
      ],
      technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analytics'],
      current: false,
    },
  ];

  const achievements = [
    {
      title: 'Winner - Entrepreneur Workshop',
      organization: 'Allenhouse Institute (by USF)',
      description: 'Won first place in entrepreneurship workshop competition',
      icon: Award,
    },
    {
      title: 'Volunteer - UDAAN',
      organization: 'FICCI FLO Closing Event',
      description: 'Actively participated in community service initiatives',
      icon: Building,
    },
    {
      title: 'Member - Celestial Astronomy Club',
      organization: 'Allenhouse Institute',
      description: 'Active member contributing to astronomy and space science activities',
      icon: Building,
    },
    {
      title: 'Contributor - GirlScript Summer of Code',
      organization: 'Open Source Community',
      description: 'Contributing to open source projects and community development',
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="portfolio-gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My professional journey and notable accomplishments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-foreground"
            >
              Professional Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? 'portfolio-gradient animate-pulse' 
                      : 'bg-portfolio-surface-elevated border-2 border-primary'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      exp.current ? 'bg-primary-foreground' : 'bg-primary'
                    }`}></div>
                  </div>

                  <div className="portfolio-card group hover:shadow-lg transition-shadow duration-300">
                    {exp.current && (
                      <div className="inline-block px-3 py-1 text-xs font-semibold portfolio-gradient text-primary-foreground rounded-full mb-3">
                        Current
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-portfolio-surface-elevated text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-8 text-foreground"
            >
              Achievements & Activities
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="portfolio-card group hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg portfolio-gradient flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Competitive Programming Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <h4 className="text-xl font-bold mb-6 text-foreground">
                Competitive Programming
              </h4>
              <div className="portfolio-card">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold portfolio-gradient-text">LeetCode</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Active problem solver with consistent progress in data structures and algorithms
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                  >
                    View LeetCode Profile
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;