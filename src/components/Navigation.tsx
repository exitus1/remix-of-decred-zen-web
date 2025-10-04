import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold">Decred</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#governance" className="text-muted-foreground hover:text-foreground transition-colors">
              Governance
            </a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get DCR
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
