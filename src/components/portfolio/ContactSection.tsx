import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import { useState, useRef } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  
  // Rate limiting state
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [submitCount, setSubmitCount] = useState<number>(0);
  const submissionTimeoutRef = useRef<NodeJS.Timeout>();

  // Rate limiting constants
  const RATE_LIMIT_WINDOW = 30 * 1000; // 30 seconds
  const MAX_SUBMISSIONS_PER_WINDOW = 1;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rishikanaujiya9598@gmail.com',
      href: 'mailto:rishikanaujiya9598@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, India',
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'rishikanaujiya',
      href: 'https://github.com/rishikanaujiya',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rishi-kanaujiya',
      href: 'https://linkedin.com/in/rishi-kanaujiya-19b58530b',
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting check
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    
    if (timeSinceLastSubmission < RATE_LIMIT_WINDOW) {
      toast({
        title: "Please wait before sending another message",
        description: `You can send another message in ${Math.ceil((RATE_LIMIT_WINDOW - timeSinceLastSubmission) / 1000)} seconds.`,
        variant: "destructive",
      });
      return;
    }

    // Basic bot protection - simple honeypot check
    const honeypot = (document.querySelector('input[name="website"]') as HTMLInputElement)?.value;
    if (honeypot) {
      console.warn('Bot detected via honeypot field');
      return;
    }

    try {
      // Sanitize input data
      const sanitizedData = {
        name: DOMPurify.sanitize(data.name.trim()),
        email: DOMPurify.sanitize(data.email.trim()),
        message: DOMPurify.sanitize(data.message.trim()),
      };

      // Additional validation
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
        toast({
          title: "Invalid input",
          description: "Please fill in all fields with valid content.",
          variant: "destructive",
        });
        return;
      }

      // Update rate limiting state
      setLastSubmissionTime(now);
      setSubmitCount(prev => prev + 1);
      // EmailJS configuration
      const serviceId = 'service_v830ojs';
      const templateId = 'template_c1t01h8';
      const publicKey = 'r0obaigL0wLYgss1K';

      // Send email using EmailJS with sanitized data
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          message: sanitizedData.message,
          to_name: 'Rishi Kanaujiya',
        },
        publicKey
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="portfolio-gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {item.href !== '#' ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-portfolio-surface-elevated border border-border/50 hover:border-primary/30 transition-all duration-200 group"
                    >
                      <div className="p-3 rounded-lg portfolio-gradient group-hover:scale-110 transition-transform duration-200">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-portfolio-surface-elevated border border-border/50">
                      <div className="p-3 rounded-lg portfolio-gradient">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="portfolio-card bg-portfolio-surface-elevated"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="font-semibold text-foreground">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Working on MERN stack projects, contributing to open source, 
                and solving DSA problems on LeetCode.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="portfolio-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field for bot protection - hidden from users */}
              <input
                type="text"
                name="website"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your full name"
                  className="bg-portfolio-surface-elevated border-border/50 focus:border-primary"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="your.email@example.com"
                  className="bg-portfolio-surface-elevated border-border/50 focus:border-primary"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="bg-portfolio-surface-elevated border-border/50 focus:border-primary resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full portfolio-gradient text-primary-foreground hover:opacity-90 transition-opacity font-semibold py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;