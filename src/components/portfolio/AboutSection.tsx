import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Languages, GraduationCap } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const facts = [
    { icon: MapPin, label: 'Location', value: 'Kanpur, India' },
    { icon: Mail, label: 'Email', value: 'rishikanaujiya9598@gmail.com' },
    { icon: Languages, label: 'Languages', value: 'English, Hindi, German' },
    { icon: GraduationCap, label: 'Education', value: 'Computer Science, AITH' },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="portfolio-gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl portfolio-card">
              <img 
                src={profileImage} 
                alt="Rishi Kanaujiya - Full Stack Developer"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-75" />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Full Stack MERN Developer</span> and 
                final-year <span className="text-primary font-semibold">Computer Science student</span> at 
                Allenhouse Institute of Technology, Dr. APJ Abdul Kalam Technical University, Lucknow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building <span className="text-primary font-semibold">responsive, intuitive, and high-performance</span> web 
                applications. My work spans frontend and backend development, competitive programming, and open-source contributions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex challenges and delivering <span className="text-primary font-semibold">impactful digital experiences</span> that 
                make a difference in people's lives.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-portfolio-surface-elevated border border-border/50"
                >
                  <div className="p-2 rounded-lg portfolio-gradient">
                    <fact.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                    <p className="font-semibold text-foreground">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6"
            >
              <p className="text-lg font-semibold text-primary mb-4">
                Let's build something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                Get in touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;