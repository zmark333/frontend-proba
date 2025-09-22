import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Gavel } from "lucide-react";
import { ArtistDetailModal } from "./ArtistDetailModal";
import { useState } from "react";

const featuredArtists = [
  {
    id: 1,
    name: "Marina Volkov",
    title: "Contemporary Portrait Painter",
    currentBid: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1674133749176-d2aa8860798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwb3J0cmFpdCUyMHBhaW50ZXIlMjBhcnRpc3QlMjBzdHVkaW98ZW58MXx8fHwxNzU4NTM2MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Painter",
    totalBids: 42,
    auctionEnds: "2d 14h 32m",
    status: "active"
  },
  {
    id: 2,
    name: "Alessandro Romano",
    title: "Classical Violinist & Composer",
    currentBid: "3.2 ETH",
    image: "https://images.unsplash.com/photo-1749542119801-3477371df850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtdXNpY2lhbiUyMHZpb2xpbiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODUzNjA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Musician",
    totalBids: 28,
    auctionEnds: "5d 8h 15m",
    status: "active"
  },
  {
    id: 3,
    name: "Elena Chen",
    title: "Contemporary Fiction Writer",
    currentBid: "1.8 ETH",
    image: "https://images.unsplash.com/photo-1584297186739-20d617b477b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3cml0ZXIlMjBhdXRob3IlMjB0eXBld3JpdGVyfGVufDF8fHx8MTc1ODUzNjA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Writer",
    totalBids: 76,
    auctionEnds: "18h 42m",
    status: "ending_soon"
  },
  {
    id: 4,
    name: "Thomas Wright",
    title: "Marble & Bronze Sculptor",
    currentBid: "4.1 ETH",
    image: "https://images.unsplash.com/photo-1758522275945-91b45d6517d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzY3VscHRvciUyMGFydGlzdCUyMHdvcmtpbmd8ZW58MXx8fHwxNzU4NTM2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Sculptor",
    totalBids: 33,
    auctionEnds: "1d 3h 28m",
    status: "active"
  }
];

export function PopularItems() {
  const [selectedArtist, setSelectedArtist] = useState<typeof featuredArtists[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtistClick = (artist: typeof featuredArtists[0]) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#8B4A4A]">Current Auctions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bid to become the exclusive mecenas of these exceptional artists. 
            Each auction grants you the honor of supporting and guiding their artistic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredArtists.map((artist) => (
            <Card 
              key={artist.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg cursor-pointer"
              onClick={() => handleArtistClick(artist)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-[#8B4A4A] hover:bg-[#8B4A4A]/80 text-white">
                  {artist.category}
                </Badge>
                {artist.status === "ending_soon" && (
                  <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-600/80 text-white animate-pulse">
                    Ending Soon
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#8B4A4A] px-4 py-2 rounded-lg">
                    View Benefits
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{artist.name}</CardTitle>
                <CardDescription className="text-base">{artist.title}</CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Gavel className="h-4 w-4" />
                    {artist.totalBids} bids
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {artist.auctionEnds}
                  </span>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Bid</span>
                    <span className="text-lg text-[#8B4A4A]">{artist.currentBid}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90 text-lg py-6"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle direct bid action
                  }}
                >
                  Place Bid
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#8B4A4A] text-[#8B4A4A] hover:bg-[#8B4A4A] hover:text-white px-10 py-6 text-lg"
          >
            View All Auctions
          </Button>
        </div>
      </div>

      <ArtistDetailModal 
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}