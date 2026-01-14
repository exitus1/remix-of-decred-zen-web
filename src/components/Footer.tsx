const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-lg py-6 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8">
          <a 
            href="https://decred.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            decred.org
          </a>
          <a 
            href="https://github.com/decred" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            github
          </a>
          <a 
            href="https://docs.decred.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            dcrdocs
          </a>
          <a 
            href="https://dcrdata.decred.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            dcrdata
          </a>
          <a 
            href="https://proposals.decred.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            proposals
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
