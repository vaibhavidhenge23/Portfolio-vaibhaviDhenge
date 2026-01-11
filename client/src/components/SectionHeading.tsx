import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ 
  subtitle, 
  title, 
  className = "",
  alignment = "left"
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-display font-bold text-foreground"
      >
        {title}
      </motion.h2>
      <div className={`mt-4 w-20 h-1.5 bg-primary rounded-full ${alignment === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
