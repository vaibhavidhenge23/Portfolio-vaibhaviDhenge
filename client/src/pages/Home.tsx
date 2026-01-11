import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Database, 
  Server, 
  Layout, 
  Code 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertMessage } from "@shared/routes";

import Navigation from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { useContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const contactMutation = useContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(api.contact.send.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    const subject = encodeURIComponent(`Message from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:vaibhavidhenge2302@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-bold tracking-wide uppercase mb-4"
            >
              Hello, my name is
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-foreground"
            >
              Vaibhavi.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-display font-bold text-muted-foreground mb-8"
            >
              Java Full Stack Developer.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              I'm a final year Computer Science Engineering student passionate about building 
              scalable backend systems with <span className="text-foreground font-semibold">Java & Spring Boot</span> 
              and crafting responsive frontends with <span className="text-foreground font-semibold">React</span>.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-12 hover:-translate-y-1 transition-transform">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="About Me" title="Who I Am" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a Computer Science Engineering student in my final year, I've dedicated my academic journey to mastering the full stack development lifecycle.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My core strength lies in backend development using <strong className="text-primary">Java, Spring Boot, JDBC, and Hibernate</strong>. I love designing efficient database schemas with PostgreSQL and building robust RESTful APIs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                On the frontend, I enjoy bringing ideas to life using <strong className="text-primary">React, HTML, and CSS</strong>, ensuring seamless user experiences across devices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
              
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-border relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Education</h3>
                    <p className="text-muted-foreground">B.Tech Computer Science</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-medium">Degree</span>
                    <span className="text-muted-foreground">B.Tech (CSE)</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-medium">Status</span>
                    <span className="text-primary font-medium px-2 py-0.5 bg-primary/10 rounded">Final Year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Focus</span>
                    <span className="text-muted-foreground">Full Stack Development</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Experience" title="My Journey" alignment="center" />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

              {/* Internship Item */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Date/Label - Right on desktop */}
                <div className="md:order-2 md:text-left mb-2 md:mb-0">
                  <Badge variant="outline" className="border-primary text-primary mb-2">Ongoing</Badge>
                  <h3 className="text-2xl font-bold font-display">Java Developer Intern</h3>
                </div>

                {/* Dot */}
                <div className="absolute left-[-29px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-2 md:mt-1.5" />

                {/* Content - Left on desktop */}
                <div className="md:order-1 md:text-right bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4 md:justify-end">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Tech Company</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <li>• Developing backend logic with Spring Boot & REST APIs</li>
                    <li>• Integrating PostgreSQL databases with Hibernate/JPA</li>
                    <li>• Collaborating on real-world project modules</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Portfolio" title="Featured Projects" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="Expense Tracker"
              description="A full-stack application to track personal finances. Built with Spring Boot backend for robust data handling and secure API endpoints."
              tags={["Spring Boot", "Java", "PostgreSQL", "React", "REST API"]}
              links={{ github: "#", demo: "#" }}
              delay={0}
            />
            <ProjectCard 
              title="Quiz / Interview Prep System"
              description="A microservices-based platform designed for technical interview preparation. Features modular services for user management, questions, and scoring."
              tags={["Microservices", "Spring Cloud", "Java", "Docker", "MySQL"]}
              links={{ github: "#" }}
              delay={0.1}
            />
            <ProjectCard 
              title="Lost & Found Portal"
              description="A community portal to report and find lost items. Implements secure authentication and image handling for item verification."
              tags={["Java", "Spring MVC", "Thymeleaf", "Hibernate"]}
              links={{ github: "#" }}
              delay={0.2}
            />
            <ProjectCard 
              title="Weather Application"
              description="Real-time weather dashboard fetching data from external APIs. Demonstrates effective third-party API integration and responsive UI design."
              tags={["React", "OpenWeatherAPI", "CSS3", "Axios"]}
              links={{ github: "#", demo: "#" }}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Expertise" title="Tech Stack" alignment="center" />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Backend</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Java (Core & Adv)
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Spring Boot
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Hibernate / JPA
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Microservices
                </li>
              </ul>
            </motion.div>

            {/* Database */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Database</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> PostgreSQL
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> JDBC
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> SQL Queries
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Schema Design
                </li>
              </ul>
            </motion.div>

            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Layout className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Frontend & Tools</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> React.js
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> HTML5 / CSS3
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Git / GitHub
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> VS Code / IntelliJ
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Contact" title="Get In Touch" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 font-display text-primary">Let's work together!</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                I'm currently looking for new opportunities as a Full Stack Java Developer. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:vaibhavidhenge2302@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="p-3 bg-background rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium">vaibhavidhenge2302@gmail.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="p-3 bg-background rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                  <div className="p-3 bg-background rounded-lg border border-border group-hover:border-primary/50 transition-colors">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-xl border border-border"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hello! I'd like to discuss..." className="min-h-[150px] resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary hover:bg-primary/90"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50 backdrop-blur-sm text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:vaibhavidhenge2302@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} VAIBHAVI. Built with Passion & Code.
          </p>
        </div>
      </footer>
    </div>
  );
}
