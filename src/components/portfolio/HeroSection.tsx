import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Code, Database, Globe, Sparkles, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const { toast } = useToast();
  
  const downloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/RISHI-Resume.pdf';
      link.download = 'RISHI-Resume.pdf';
      link.click();
      
      toast({
        title: "Resume Download",
        description: "Resume is being downloaded...",
      });
    } catch (error) {
      console.error('Resume download error:', error);
      toast({
        title: "Download Error",
        description: "Unable to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const scrollToContact = () => {
    try {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('Contact section not found');
        toast({
          title: "Navigation Error",
          description: "Contact section could not be found.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Scroll to contact error:', error);
      toast({
        title: "Navigation Error",
        description: "Unable to navigate to contact section.",
        variant: "destructive",
      });
    }
  };

  const floatingIcons = [
    { Icon: Code, position: { top: '20%', left: '10%' }, delay: 0, size: 'w-10 h-10' },
    { Icon: Database, position: { top: '60%', left: '15%' }, delay: 0.5, size: 'w-8 h-8' },
    { Icon: Globe, position: { top: '30%', right: '10%' }, delay: 1, size: 'w-9 h-9' },
    { Icon: Github, position: { top: '70%', right: '20%' }, delay: 1.5, size: 'w-8 h-8' },
    { Icon: Sparkles, position: { top: '15%', right: '15%' }, delay: 2, size: 'w-6 h-6' },
    { Icon: Zap, position: { top: '75%', left: '8%' }, delay: 2.5, size: 'w-7 h-7' }
  ];

  const geometricShapes = [
    { size: 'w-20 h-20', position: { top: '25%', left: '5%' }, rotation: 45, delay: 0 },
    { size: 'w-16 h-16', position: { top: '70%', right: '8%' }, rotation: 0, delay: 1 },
    { size: 'w-12 h-12', position: { top: '10%', right: '25%' }, rotation: 30, delay: 1.5 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 portfolio-gradient opacity-30" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      {/* Geometric Shapes */}
      {geometricShapes.map(({ size, position, rotation, delay }, index) => (
        <motion.div
          key={`shape-${index}`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05], 
            scale: [0.8, 1, 0.8], 
            rotate: [rotation, rotation + 360] 
          }}
          transition={{
            delay: delay + 1,
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute ${size} border border-primary/20 rounded-lg backdrop-blur-sm`}
          style={position}
        />
      ))}
      
      {/* Enhanced Floating Tech Icons */}
      {floatingIcons.map(({ Icon, position, delay, size }, index) => (
        <motion.div
          key={`icon-${index}`}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4], 
            scale: [0.9, 1.1, 0.9],
            y: [0, -10, 0]
          }}
          transition={{
            delay: delay + 2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
          style={position}
        >
          <div className="relative p-3 rounded-full bg-primary/5 backdrop-blur-md border border-primary/10 shadow-2xl">
            <Icon className={`${size} text-primary drop-shadow-lg`} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Modern Glass Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Glass Morphism Main Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-background/10 backdrop-blur-2xl border border-white/10 shadow-2xl">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-background/5 backdrop-blur-2xl" />
            </div>
            
            <div className="relative space-y-8">
              {/* Enhanced Greeting with Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <p className="text-sm font-medium text-primary">👋 Hi, I'm</p>
                </div>
              </motion.div>

              {/* Enhanced Name with Better Typography */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
              >
                <span className="portfolio-gradient-text drop-shadow-lg">
                  RISHI KANAUJIYA
                </span>
              </motion.h1>

              {/* Enhanced Title with Modern Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="space-y-2"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Full Stack MERN Developer
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
              >
                Passionate about building{' '}
                <span className="text-primary font-medium">responsive</span>,{' '}
                <span className="text-accent font-medium">intuitive</span>, and{' '}
                <span className="text-primary font-medium">high-performance</span>{' '}
                web applications. Final-year Computer Science student specializing in MERN stack development and competitive programming.
              </motion.p>

              {/* Modern CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={downloadResume} 
                    size="lg" 
                    className="relative group portfolio-gradient text-primary-foreground font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    View Resume
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={scrollToContact} 
                    variant="outline" 
                    size="lg" 
                    className="relative group border-2 border-primary/30 bg-background/20 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="flex justify-center space-x-8 mt-16"
              >
                {[
                  { href: "https://github.com/rishikanaujiya", Icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/rishi-kanaujiya-19b58530b", Icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:rishikanaujiya9598@gmail.com", Icon: Mail, label: "Email" }
                ].map(({ href, Icon, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group p-4 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-xl"
                  >
                    <Icon className="w-6 h-6" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                      {label}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm bg-background/10">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-primary to-accent mt-2 rounded-full shadow-lg"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 w-6 h-10 border-2 border-primary/30 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;