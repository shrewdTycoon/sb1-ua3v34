import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const CONSULTATION_URL = "https://meetings.hubspot.com/prasanna-deshpande";

function Button({ 
  children, 
  variant = 'default',
  size = 'md',
  href,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 rounded-lg transition-colors font-medium";
  
  const variants = {
    default: "bg-white/10 hover:bg-white/20 text-white",
    outline: "border border-white/20 hover:bg-white/10 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // If the text content includes "Book a Consultation", use the consultation URL
  const finalHref = children === "Book a Consultation" ? CONSULTATION_URL : href;
  const target = finalHref === CONSULTATION_URL ? "_blank" : props.target;
  const rel = finalHref === CONSULTATION_URL ? "noopener noreferrer" : props.rel;

  const Component = finalHref ? 'a' : 'button';
  
  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      href={finalHref}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;