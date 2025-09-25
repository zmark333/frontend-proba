import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Gavel, Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArtistDetailModal } from "./ArtistDetailModal";
import { useState } from "react";

const allAuctions = [
  {
    id: 1,
    name: "Marina Volkov",
    title: "Contemporary Portrait Painter",
    currentBid: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1674133749176-d2aa8860798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBhaW50ZXIlMjBhcnRpc3QlMjBzdHVkaW98ZW58MXx8fHwxNzU4NTM2MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1749542119801-3477371df850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtdXNpY2lhbiUyMHZpb2xpbiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1ODUzNjA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1584297186739-20d617b477b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3cml0ZXIlMjBhdXRob3IlMjB0eXBld3JpdGVyfGVufDF8fHx8MTc1ODUzNjA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1758522275945-91b45d6517d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzY3VscHRvciUyMGFydGlzdCUyMHdvcmtpbmd8ZW58MXx8fHwxNzU4NTM2MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sculptor",
    totalBids: 33,
    auctionEnds: "1d 3h 28m",
    status: "active"
  },
  {
    id: 5,
    name: "Sofia Petrov",
    title: "Abstract Oil Painter",
    currentBid: "2.1 ETH",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhYnN0cmFjdCUyMHBhaW50ZXIlMjBhcnRpc3R8ZW58MXx8fHwxNzU4NTM2MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Painter",
    totalBids: 19,
    auctionEnds: "3d 22h 15m",
    status: "active"
  },
  {
    id: 6,
    name: "Marcus Johnson",
    title: "Jazz Pianist & Producer",
    currentBid: "2.8 ETH",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxqYXp6JTIwcGlhbmlzdCUyMG11c2ljaWFufGVufDF8fHx8MTc1ODUzNjA1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Musician",
    totalBids: 45,
    auctionEnds: "4d 11h 8m",
    status: "active"
  },
  {
    id: 7,
    name: "Isabella Rodriguez",
    title: "Historical Fiction Author",
    currentBid: "1.6 ETH",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhdXRob3IlMjB3cml0ZXIlMjBib29rc3xlbnwxfHx8fDE3NTg1MzYwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Writer",
    totalBids: 31,
    auctionEnds: "6d 2h 45m",
    status: "active"
  },
  {
    id: 8,
    name: "David Kim",
    title: "Contemporary Wood Sculptor",
    currentBid: "3.5 ETH",
    image: "https://images.unsplash.com/photo-1544967888-b0b21eee8e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b29kJTIwc2N1bHB0b3IlMjBhcnRpc3R8ZW58MXx8fHwxNzU4NTM2MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sculptor",
    totalBids: 52,
    auctionEnds: "7h 23m",
    status: "ending_soon"
  }
];

export function Market() {
  const [selectedArtist, setSelectedArtist] = useState<typeof allAuctions[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleArtistClick = (artist: typeof allAuctions[0]) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const filteredAuctions = allAuctions.filter(auction => {
    const matchesSearch = auction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || auction.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || auction.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-[#DFC28A] font-normal">Auction Market</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse all active patronage auctions and find the perfect artist to support
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artists or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Painter">Painters</SelectItem>
                  <SelectItem value="Musician">Musicians</SelectItem>
                  <SelectItem value="Writer">Writers</SelectItem>
                  <SelectItem value="Sculptor">Sculptors</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="ending_soon">Ending Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAuctions.length} of {allAuctions.length} auctions
          </p>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAuctions.map((artist) => (
            <Card 
              key={artist.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg cursor-pointer"
              onClick={() => handleArtistClick(artist)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-[#8B4A4A] hover:bg-[#8B4A4A]/80 text-white text-xs">
                  {artist.category}
                </Badge>
                {artist.status === "ending_soon" && (
                  <Badge className="absolute top-3 right-3 bg-red-600 hover:bg-red-600/80 text-white animate-pulse text-xs">
                    Ending Soon
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#8B4A4A] px-3 py-1 rounded text-sm">
                    View Details
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{artist.name}</CardTitle>
                <CardDescription className="text-sm">{artist.title}</CardDescription>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Gavel className="h-3 w-3" />
                    {artist.totalBids} bids
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {artist.auctionEnds}
                  </span>
                </div>
                
                <div className="bg-muted/50 p-2 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Current Bid</span>
                    <span className="text-sm text-[rgba(192,192,197,1)]">{artist.currentBid}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90 text-sm py-4"
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

        {/* No Results */}
        {filteredAuctions.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl text-muted-foreground mb-2">No auctions found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </div>

      <ArtistDetailModal 
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}