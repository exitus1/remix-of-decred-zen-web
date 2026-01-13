import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import decredIcon from "@/assets/decred-icon.jpg";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={decredIcon} alt="Decred" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold">Decred</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Exchanges
            </Link>
            <Link to="/wallets" className="text-muted-foreground hover:text-foreground transition-colors">
              Wallets
            </Link>
            <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
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
