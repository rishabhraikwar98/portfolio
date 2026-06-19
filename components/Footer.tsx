import { Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub  } from "react-icons/fa";
    
const socialLinks = [
  { label: "GitHub", href: "https://github.com/rishabhraikwar98", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rishabh-raikwar98", icon: FaLinkedin },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: FaTwitter },
  { label: "Email", href: "mailto:Rishabhraikwar77@gmail.com", icon: Mail },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      {/* Gradient divider */}
      <div className="h-px w-full bg-linear-to-r from-accent-violet via-accent-cyan to-accent-violet" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <a href="#home" className="font-display text-lg font-bold gradient-text">
            Rishabh Raikwar
          </a>
          <p className="mt-2 max-w-xs text-sm text-foreground/60">
            Crafting sleek web experiences.
          </p>
        </div>

        <ul className="flex gap-6">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a    
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent-violet"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-accent-violet"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-foreground/10 px-6 py-4 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Rishabh Raikwar. All rights reserved.
      </div>
    </footer>
  );
}