import { Button } from "./ui/button";
import logo from 'figma:asset/03949e436fa14f5c4a5ad27f5e63a5631c2d8118.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const isActive = (page: string) => currentPage === page;

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => onNavigate("home")}
        >
          <img src={logo} alt="Mecenas Logo" className="h-10 w-10" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className={`hover:text-[#8B4A4A] ${isActive("about") ? "text-[#8B4A4A] bg-[#8B4A4A]/10" : ""}`}
            onClick={() => onNavigate("about")}
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            className={`hover:text-[#8B4A4A] ${isActive("market") ? "text-[#8B4A4A] bg-[#8B4A4A]/10" : ""}`}
            onClick={() => onNavigate("market")}
          >
            Marketplace
          </Button>
          <Button 
            variant="ghost" 
            className={`hover:text-[#8B4A4A] ${isActive("explore") ? "text-[#8B4A4A] bg-[#8B4A4A]/10" : ""}`}
            onClick={() => onNavigate("explore")}
          >
            Explore
          </Button>
          <Button 
            variant="ghost" 
            className={`hover:text-[#8B4A4A] ${isActive("wallet") ? "text-[#8B4A4A] bg-[#8B4A4A]/10" : ""}`}
            onClick={() => onNavigate("wallet")}
          >
            Wallet
          </Button>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="border-[#8B4A4A] text-[#8B4A4A] hover:bg-[#8B4A4A] hover:text-white"
            onClick={() => onNavigate("login")}
          >
            Login
          </Button>
          <Button 
            className="bg-[#8B4A4A] hover:bg-[#8B4A4A]/80"
            onClick={() => onNavigate("register")}
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}