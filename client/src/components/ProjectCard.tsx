import { motion } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  delay?: number;
}

export function ProjectCard({ title, description, tags, links, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl font-bold font-display group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-muted-foreground">
              {links?.github && (
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {links?.demo && (
                <a href={links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base mb-6 leading-relaxed">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary">
                <Tag className="w-3 h-3 mr-1 opacity-50" />
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        {/* Decorative gradient line at bottom */}
        <div className="h-1 bg-gradient-to-r from-primary to-primary/20 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl" />
      </Card>
    </motion.div>
  );
}
