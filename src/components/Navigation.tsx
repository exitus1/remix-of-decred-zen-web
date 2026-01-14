import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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

          <div className="flex items-center gap-4">
            {/* Mobile hamburger menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-6 mt-8">
                  <SheetClose asChild>
                    <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                      Exchanges
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/wallets" className="text-lg font-medium hover:text-primary transition-colors">
                      Wallets
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/community" className="text-lg font-medium hover:text-primary transition-colors">
                      Community
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/about" className="text-lg font-medium hover:text-primary transition-colors">
                      About
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Get DCR
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Get DCR button */}
            <Link to="/" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get DCR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
