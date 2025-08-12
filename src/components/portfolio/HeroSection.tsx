import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Code, Database, Globe } from 'lucide-react';
const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RISHI-Resume.pdf';
    link.download = 'RISHI-Resume.pdf';
    link.click();
  };
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const floatingIcons = [{
    Icon: Code,
    position: {
      top: '20%',
      left: '10%'
    },
    delay: 0
  }, {
    Icon: Database,
    position: {
      top: '60%',
      left: '15%'
    },
    delay: 0.5
  }, {
    Icon: Globe,
    position: {
      top: '30%',
      right: '10%'
    },
    delay: 1
  }, {
    Icon: Github,
    position: {
      top: '70%',
      right: '20%'
    },
    delay: 1.5
  }];
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 portfolio-gradient opacity-20" />
      
      {/* Floating Tech Icons */}
      {floatingIcons.map(({
      Icon,
      position,
      delay
    }, index) => <motion.div key={index} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 0.3,
      scale: 1
    }} transition={{
      delay: delay + 2,
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 3
    }} className="absolute animate-float" style={position}>
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>)}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Intro Animation */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          {/* Greeting */}
          <motion.p initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="text-xl text-muted-foreground font-light">
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.6,
          duration: 0.8,
          type: "spring"
        }} className="text-5xl md:text-7xl font-bold portfolio-gradient-text mb-4">  RISHI KANAUJIYA</motion.h1>

          {/* Title */}
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9,
          duration: 0.6
        }} className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
            Full Stack MERN Developer
          </motion.h2>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.6
        }} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building responsive, intuitive, and high-performance web applications. 
            Final-year Computer Science student specializing in MERN stack development and competitive programming.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.5,
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button onClick={downloadResume} size="lg" className="portfolio-gradient text-primary-foreground hover:opacity-90 transition-opacity font-semibold px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.8,
          duration: 0.6
        }} className="flex justify-center space-x-6 mt-12">
            <motion.a href="https://github.com/rishikanaujiya" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a href="https://linkedin.com/in/rishi-kanaujiya-19b58530b" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a href="mailto:rishikanaujiya9598@gmail.com" whileHover={{
            scale: 1.1,
            y: -2
          }} whileTap={{
            scale: 0.95
          }} className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2.5,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-primary rounded-full flex justify-center mx-[10px]">
            <motion.div animate={{
            y: [0, 12, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-1 h-3 bg-primary mt-2 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;