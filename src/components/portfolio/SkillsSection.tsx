import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'EJS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Code,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'SQL', 'Mongoose'],
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Other',
      icon: Wrench,
      skills: ['Python', 'C++', 'Git/GitHub', 'Debugging'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const technologies = [
    'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript',
    'Python', 'C++', 'HTML5', 'CSS3', 'Tailwind', 'Git', 'REST APIs',
    'JWT', 'Mongoose', 'EJS', 'Responsive Design', 'Problem Solving'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="portfolio-gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="portfolio-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold portfolio-gradient-text">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="relative"
                    >
                      <div className="flex items-center space-x-3 p-2 rounded-lg bg-portfolio-surface-elevated/50 hover:bg-portfolio-surface-elevated transition-colors duration-200">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0`} />
                        <span className="text-sm font-medium text-foreground">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-portfolio-surface-elevated hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default border border-border/50"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="portfolio-card max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Always learning and exploring new technologies
            </p>
            <div className="flex items-center justify-center text-primary">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 mr-3"
              >
                ⚡
              </motion.div>
              <span className="font-semibold">Continuous Learning Mode</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;