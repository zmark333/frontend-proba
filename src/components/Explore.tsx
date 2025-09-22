import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Gavel, Search, History, ShoppingCart, Trophy } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArtistDetailModal } from "./ArtistDetailModal";
import { useState } from "react";

const activeAuctions = [
  {
    id: 1,
    name: "Marina Volkov",
    title: "Contemporary Portrait Painter",
    currentBid: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1674133749176-d2aa8860798b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwb3J0cmFpdCUyMHBhaW50ZXIlMjBhcnRpc3QlMjBzdHVkaW98ZW58MXx8fHwxNzU4NTM2MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Painter",
    totalBids: 42,
    auctionEnds: "2d 14h 32m",
    status: "active",
    type: "auction"
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
    status: "active",
    type: "auction"
  }
];

const completedAuctions = [
  {
    id: 101,
    name: "Vincent Moreau",
    title: "Impressionist Landscape Painter",
    finalBid: "5.2 ETH",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYW5kc2NhcGUlMjBwYWludGVyJTIwYXJ0aXN0fGVufDF8fHx8MTc1ODUzNjA2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Painter",
    totalBids: 87,
    completedDate: "3 days ago",
    winner: "Anonymous Collector",
    status: "completed",
    type: "completed"
  },
  {
    id: 102,
    name: "Aria Nakamura",
    title: "Contemporary Classical Composer",
    finalBid: "4.8 ETH",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb21wb3NlciUyMG11c2ljaWFuJTIwcGlhbm98ZW58MXx8fHwxNzU4NTM2MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Musician",
    totalBids: 63,
    completedDate: "1 week ago",
    winner: "MusicLover.eth",
    status: "completed",
    type: "completed"
  },
  {
    id: 103,
    name: "Gabriel Santos",
    title: "Magical Realism Novelist",
    finalBid: "2.9 ETH",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxub3ZlbGlzdCUyMHdyaXRlciUyMGF1dGhvcnxlbnwxfHx8fDE3NTg1MzYwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Writer",
    totalBids: 45,
    completedDate: "2 weeks ago",
    winner: "BookwormDAO",
    status: "completed",
    type: "completed"
  }
];

const resaleItems = [
  {
    id: 201,
    name: "Lena Hoffman",
    title: "Abstract Expressionist",
    currentPrice: "6.8 ETH",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhYnN0cmFjdCUyMGV4cHJlc3Npb25pc3QlMjBwYWludGVyfGVufDF8fHx8MTc1ODUzNjA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Painter",
    originalWinner: "ArtCollector.eth",
    timeRemaining: "6 months",
    originalPrice: "4.2 ETH",
    status: "for_sale",
    type: "resale"
  },
  {
    id: 202,
    name: "Marco Benedetti",
    title: "Opera Singer & Vocal Coach",
    currentPrice: "5.5 ETH",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxvcGVyYSUyMHNpbmdlciUyMG11c2ljaWFufGVufDF8fHx8MTc1ODUzNjA3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Musician",
    originalWinner: "OperaFan",
    timeRemaining: "4 months",
    originalPrice: "3.1 ETH",
    status: "for_sale",
    type: "resale"
  }
];

const allItems = [...activeAuctions, ...completedAuctions, ...resaleItems];

export function Explore() {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const handleArtistClick = (artist: any) => {
    if (artist.type === "auction") {
      setSelectedArtist(artist);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const getFilteredItems = (type: string) => {
    let items = type === "all" ? allItems : 
                type === "active" ? activeAuctions :
                type === "completed" ? completedAuctions :
                type === "resale" ? resaleItems : [];

    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  };

  const renderCard = (item: any) => (
    <Card 
      key={item.id} 
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg ${
        item.type === "auction" ? "cursor-pointer" : ""
      }`}
      onClick={() => handleArtistClick(item)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-[#8B4A4A] text-white text-xs">
          {item.category}
        </Badge>
        
        {/* Status badges */}
        {item.type === "auction" && item.status === "ending_soon" && (
          <Badge className="absolute top-3 right-3 bg-red-600 text-white animate-pulse text-xs">
            Ending Soon
          </Badge>
        )}
        {item.type === "completed" && (
          <Badge className="absolute top-3 right-3 bg-green-600 text-white text-xs">
            <Trophy className="h-3 w-3 mr-1" />
            Sold
          </Badge>
        )}
        {item.type === "resale" && (
          <Badge className="absolute top-3 right-3 bg-blue-600 text-white text-xs">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Resale
          </Badge>
        )}
        
        {item.type === "auction" && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#8B4A4A] px-3 py-1 rounded text-sm">
              View Details
            </span>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{item.name}</CardTitle>
        <CardDescription className="text-sm">{item.title}</CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        {item.type === "auction" && (
          <>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Gavel className="h-3 w-3" />
                {item.totalBids} bids
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {item.auctionEnds}
              </span>
            </div>
            <div className="bg-muted/50 p-2 rounded">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Current Bid</span>
                <span className="text-sm text-[#8B4A4A]">{item.currentBid}</span>
              </div>
            </div>
          </>
        )}

        {item.type === "completed" && (
          <>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <History className="h-3 w-3" />
                {item.completedDate}
              </span>
              <span>{item.totalBids} bids</span>
            </div>
            <div className="bg-green-50 p-2 rounded">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Final Price</span>
                <span className="text-sm text-green-600">{item.finalBid}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Winner: {item.winner}
              </div>
            </div>
          </>
        )}

        {item.type === "resale" && (
          <>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span>{item.timeRemaining} remaining</span>
              <span>Original: {item.originalPrice}</span>
            </div>
            <div className="bg-blue-50 p-2 rounded">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Resale Price</span>
                <span className="text-sm text-blue-600">{item.currentPrice}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Owner: {item.originalWinner}
              </div>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        {item.type === "auction" && (
          <Button 
            className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90 text-sm py-4"
            onClick={(e) => e.stopPropagation()}
          >
            Place Bid
          </Button>
        )}
        {item.type === "completed" && (
          <Button 
            variant="outline"
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm py-4"
            disabled
          >
            Auction Completed
          </Button>
        )}
        {item.type === "resale" && (
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-600/90 text-sm py-4"
          >
            Buy Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-[#8B4A4A]">Explore</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover all artists, auctions, and patronage opportunities across our platform
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artists, specialties, or collections..."
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
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="active">Active Auctions</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="resale">Resale Market</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getFilteredItems("all").map(renderCard)}
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getFilteredItems("active").map(renderCard)}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getFilteredItems("completed").map(renderCard)}
            </div>
          </TabsContent>

          <TabsContent value="resale">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getFilteredItems("resale").map(renderCard)}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {getFilteredItems(activeTab).length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl text-muted-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
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