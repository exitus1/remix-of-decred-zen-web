import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

const footerLinks = [
  { label: "decred.org", href: "https://decred.org" },
  { label: "github", href: "https://github.com/decred" },
  { label: "dcrdocs", href: "https://docs.decred.org" },
  { label: "dcrdata", href: "https://dcrdata.decred.org" },
  { label: "proposals", href: "https://proposals.decred.org" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-lg py-6 relative z-10">
      <div className="container mx-auto px-6">
        {/* Desktop links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger menu */}
        <div className="flex md:hidden items-center justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Menu className="h-5 w-5" />
                <span className="text-muted-foreground">{t('footer.resources')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto">
              <div className="flex flex-col gap-4 py-4">
                {footerLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-center text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
