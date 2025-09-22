import { Button } from "./ui/button";
import logo from 'figma:asset/03949e436fa14f5c4a5ad27f5e63a5631c2d8118.png';

export function Hero() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto text-center max-w-3xl">
        <div className="flex flex-col items-center justify-center mb-16">
          <span className="text-6xl md:text-7xl font-semibold text-[#8B4A4A]">MECENAS</span>
          <span className="text-xl md:text-2xl text-muted-foreground">Patronage, modernized.</span>
        </div>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Support talented artists directly. Discover painters, musicians, writers, and creators 
          who are shaping the future of art and culture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-[#8B4A4A] hover:bg-[#8B4A4A]/90 px-8 py-6 text-lg">
            Explore Artists
          </Button>
          <Button size="lg" variant="outline" className="border-[#8B4A4A] text-[#8B4A4A] hover:bg-[#8B4A4A] hover:text-white px-8 py-6 text-lg">
            Become a Mecenas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-semibold text-[#8B4A4A]">500+</div>
            <p className="text-sm text-muted-foreground">Artists Supported</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-semibold text-[#8B4A4A]">$2M+</div>
            <p className="text-sm text-muted-foreground">In Patronage</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-semibold text-[#8B4A4A]">50+</div>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}