import image_31e33c7c6c27ba89012c0dc68e21342aafde1062 from 'figma:asset/31e33c7c6c27ba89012c0dc68e21342aafde1062.png';
import image_ec819ce1cd40eaba2d4b7eb5d576453c33b10517 from 'figma:asset/ec819ce1cd40eaba2d4b7eb5d576453c33b10517.png';
import { Button } from "./ui/button";
import mecenasLogo from "figma:asset/98ebea1f26937d76c90b530f6fda401faca59161.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const isActive = (page: string) => currentPage === page;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop: Single row layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate("home")}
          >
            <img 
              src={image_31e33c7c6c27ba89012c0dc68e21342aafde1062} 
              alt="Mecenas Logo" 
              className="h-14 w-auto"
            />
            <span className={`ml-3 hover:text-primary transition-colors ${currentPage === "home" ? "text-rich-gold" : "text-muted-foreground"}`}>
              Patronage, modernized.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground ${isActive("about") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground ${isActive("market") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("market")}
            >
              Marketplace
            </Button>
            <Button 
              variant="ghost" 
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground ${isActive("explore") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("explore")}
            >
              Explore
            </Button>
            <Button 
              variant="ghost" 
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground ${isActive("wallet") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("wallet")}
            >
              Wallet
            </Button>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => onNavigate("login")}
            >
              Login
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => onNavigate("register")}
            >
              Register
            </Button>
          </div>
        </div>

        {/* Mobile: Two row layout */}
        <div className="md:hidden">
          {/* Top row with logo and auth buttons */}
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate("home")}
            >
              <img 
                src={image_31e33c7c6c27ba89012c0dc68e21342aafde1062} 
                alt="Mecenas Logo" 
                className="h-12 w-auto"
              />
              <span className={`ml-2 hover:text-primary transition-colors text-sm ${currentPage === "home" ? "text-rich-gold" : "text-muted-foreground"}`}>
                Patronage, modernized.
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                onClick={() => onNavigate("login")}
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                onClick={() => onNavigate("register")}
              >
                Register
              </Button>
            </div>
          </div>

          {/* Bottom row with navigation */}
          <nav className="flex items-center justify-center space-x-1 py-2 border-t border-border/50">
            <Button 
              variant="ghost" 
              size="sm"
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground text-xs ${isActive("about") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("about")}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground text-xs ${isActive("market") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("market")}
            >
              Marketplace
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground text-xs ${isActive("explore") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("explore")}
            >
              Explore
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={`hover:text-primary hover:bg-primary/10 text-muted-foreground text-xs ${isActive("wallet") ? "text-primary bg-primary/10" : ""}`}
              onClick={() => onNavigate("wallet")}
            >
              Wallet
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}