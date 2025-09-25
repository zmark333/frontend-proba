import image_31e33c7c6c27ba89012c0dc68e21342aafde1062 from 'figma:asset/31e33c7c6c27ba89012c0dc68e21342aafde1062.png';
import image_ed14c5e9ce9bc9e94fcadec160e94b0f096e31ab from 'figma:asset/ed14c5e9ce9bc9e94fcadec160e94b0f096e31ab.png';
import image_a8a8342f087b9c08be0d772b21e86699db0918e3 from 'figma:asset/a8a8342f087b9c08be0d772b21e86699db0918e3.png';
import image_ec819ce1cd40eaba2d4b7eb5d576453c33b10517 from 'figma:asset/ec819ce1cd40eaba2d4b7eb5d576453c33b10517.png';
import { PopularItems } from './PopularItems';
import mecenasLogo from "figma:asset/98ebea1f26937d76c90b530f6fda401faca59161.png";

export function KeyholePortal() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center p-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block mb-8">
              <img 
                src={image_31e33c7c6c27ba89012c0dc68e21342aafde1062} 
                alt="Mecenas Logo" 
                className="h-72 w-auto mx-auto bg-[#48484D]"
              />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Where tradition meets innovation. Support extraordinary artists through 
              modern patronage and unlock exclusive cultural experiences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
              Explore Auctions
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-lg">
              Learn More
            </button>
          </div>


        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="relative">
        <PopularItems />
      </div>
    </div>
  );
}