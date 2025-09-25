import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import mecenasLogo from 'figma:asset/31e33c7c6c27ba89012c0dc68e21342aafde1062.png';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={mecenasLogo} 
                alt="Mecenas Logo" 
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-primary">MECENAS</span>
                <span className="text-xs text-muted-foreground">Patronage, modernized.</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting artists, collectors, and patrons in a modern marketplace for exceptional art and cultural heritage.
            </p>
          </div>

          {/* Marketplace */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Marketplace</h3>
            <div className="space-y-2 flex flex-col">
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Browse Art
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Featured Collections
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                New Releases
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Trending
              </Button>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Community</h3>
            <div className="space-y-2 flex flex-col">
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Artists
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Collectors
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Patrons
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Events
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Support</h3>
            <div className="space-y-2 flex flex-col">
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Help Center
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Terms of Service
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Privacy Policy
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary block w-full justify-start">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Mecenas. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Discord
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Twitter
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}