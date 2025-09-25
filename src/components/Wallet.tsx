import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { QrCode, Calendar, Gift, Star, CheckCircle, Clock, Palette, Music, PenTool, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ownedTokens = [
  {
    id: 1,
    artistName: "Vincent Moreau",
    artistTitle: "Impressionist Landscape Painter",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsYW5kc2NhcGUlMjBwYWludGVyJTIwYXJ0aXN0fGVufDF8fHx8MTc1ODUzNjA2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Painter",
    purchasePrice: "5.2 ETH",
    purchaseDate: "March 15, 2024",
    timeRemaining: "8 months, 12 days",
    status: "active",
    benefits: [
      { title: "Annual Portrait Session", completed: true, nextDate: "April 1, 2024" },
      { title: "Studio Visit Q2", completed: false, nextDate: "June 15, 2024" },
      { title: "Custom Commission 20% Off", completed: false, nextDate: "Available anytime" },
      { title: "First Purchase Rights", completed: true, nextDate: "Ongoing" }
    ]
  },
  {
    id: 2,
    artistName: "Aria Nakamura",
    artistTitle: "Contemporary Classical Composer",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjb21wb3NlciUyMG11c2ljaWFuJTIwcGlhbm98ZW58MXx8fHwxNzU4NTM2MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Musician",
    purchasePrice: "4.8 ETH",
    purchaseDate: "February 28, 2024",
    timeRemaining: "7 months, 28 days",
    status: "active",
    benefits: [
      { title: "Birthday Performance", completed: false, nextDate: "Your birthday 2024" },
      { title: "Monthly Music Lesson", completed: true, nextDate: "March 28, 2024" },
      { title: "Concert VIP Access", completed: true, nextDate: "Ongoing" },
      { title: "Exclusive Recordings", completed: false, nextDate: "April 10, 2024" }
    ]
  },
  {
    id: 3,
    artistName: "Elena Vasquez",
    artistTitle: "Contemporary Fiction Writer",
    image: "https://images.unsplash.com/photo-1584297186739-20d617b477b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3cml0ZXIlMjBhdXRob3IlMjB0eXBld3JpdGVyfGVufDF8fHx8MTc1ODUzNjA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Writer",
    purchasePrice: "2.9 ETH",
    purchaseDate: "January 10, 2024",
    timeRemaining: "6 months, 10 days",
    status: "expired",
    benefits: [
      { title: "Personal Short Story", completed: true, nextDate: "Completed" },
      { title: "Signed First Editions", completed: true, nextDate: "Completed" },
      { title: "Writing Workshop", completed: true, nextDate: "Completed" },
      { title: "Literary Events VIP", completed: true, nextDate: "Completed" }
    ]
  }
];

const QRCodeDialog = ({ token }: { token: any }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <QrCode className="h-4 w-4" />
          Show QR
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Patronage Token QR Code</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg inline-block border">
              {/* QR Code placeholder - in real app this would be generated */}
              <div className="w-48 h-48 bg-gradient-to-br from-[#8B4A4A] to-[#8B4A4A]/60 rounded flex items-center justify-center">
                <QrCode className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Token ID: #{token.id}</p>
              <p className="text-sm font-medium">{token.artistName}</p>
            </div>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Use this QR code to verify your patronage status when claiming benefits 
              or attending exclusive events.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BenefitsDetailDialog = ({ token }: { token: any }) => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Painter": return <Palette className="h-5 w-5" />;
      case "Musician": return <Music className="h-5 w-5" />;
      case "Writer": return <PenTool className="h-5 w-5" />;
      default: return <Gift className="h-5 w-5" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8B4A4A] hover:bg-[#8B4A4A]/90 flex items-center gap-2">
          <Gift className="h-4 w-4" />
          View Benefits
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#8B4A4A]">Patronage Benefits</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img 
              src={token.image} 
              alt={token.artistName}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl text-[#8B4A4A]">{token.artistName}</h3>
              <p className="text-muted-foreground">{token.artistTitle}</p>
              <Badge 
                className={`mt-2 ${
                  token.status === "active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {token.status === "active" ? "Active Patronage" : "Expired"}
              </Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <h4 className="text-lg text-[#8B4A4A] mb-2">Your Benefits Status</h4>
            {token.benefits.map((benefit: any, index: number) => (
              <Card key={index} className="border-l-4 border-l-[#8B4A4A]">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-[#8B4A4A] mt-1">
                      {getIconForCategory(token.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-semibold text-[#8B4A4A]">{benefit.title}</h5>
                        {benefit.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Clock className="h-4 w-4 text-orange-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {benefit.completed ? "Completed" : "Pending"}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span className="text-muted-foreground">{benefit.nextDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#8B4A4A]/10 to-[#8B4A4A]/5 p-6 rounded-lg">
            <h5 className="text-lg text-[#8B4A4A] mb-2">Patronage Details</h5>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Purchase Price:</span>
                <p className="text-[#8B4A4A]">{token.purchasePrice}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Purchase Date:</span>
                <p className="text-[#8B4A4A]">{token.purchaseDate}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Time Remaining:</span>
                <p className="text-[#8B4A4A]">{token.timeRemaining}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Token ID:</span>
                <p className="text-[#8B4A4A]">#{token.id}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export function Wallet() {
  const [activeTab, setActiveTab] = useState("active");

  const activeTokens = ownedTokens.filter(token => token.status === "active");
  const expiredTokens = ownedTokens.filter(token => token.status === "expired");

  const renderTokenCard = (token: any) => (
    <Card key={token.id} className="overflow-hidden border-0 shadow-lg">
      <div className="relative">
        <img 
          src={token.image} 
          alt={token.artistName}
          className="w-full h-48 object-cover"
        />
        <Badge 
          className={`absolute top-3 left-3 ${
            token.status === "active" 
              ? "bg-green-600 text-white" 
              : "bg-gray-500 text-white"
          }`}
        >
          {token.category}
        </Badge>
        <Badge 
          className={`absolute top-3 right-3 ${
            token.status === "active" 
              ? "bg-[#8B4A4A] text-white" 
              : "bg-gray-400 text-white"
          }`}
        >
          {token.status === "active" ? "Active" : "Expired"}
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{token.artistName}</CardTitle>
        <CardDescription>{token.artistTitle}</CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Purchase Price:</span>
            <span className="text-[#8B4A4A]">{token.purchasePrice}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Purchase Date:</span>
            <span>{token.purchaseDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Token ID:</span>
            <span className="text-[#8B4A4A]">#{token.id}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-0">
        <BenefitsDetailDialog token={token} />
        <QRCodeDialog token={token} />
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-blue-600 text-[rgba(139,157,195,1)] hover:bg-blue-600 hover:text-white"
        >
          <ShoppingCart className="h-4 w-4" />
          Sell
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-[rgba(223,194,138,1)]">My Wallet</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Manage your patronage tokens and track your exclusive benefits
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-[#8B4A4A] mb-2">{ownedTokens.length}</div>
              <p className="text-muted-foreground">Total Patronages</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-green-600 mb-2">{activeTokens.length}</div>
              <p className="text-muted-foreground">Active Patronages</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl text-[#8B4A4A] mb-2">
                {ownedTokens.reduce((total, token) => {
                  return total + token.benefits.filter(b => b.completed).length;
                }, 0)}
              </div>
              <p className="text-muted-foreground">Benefits Claimed</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="active">Active Patronages ({activeTokens.length})</TabsTrigger>
            <TabsTrigger value="expired">Past Patronages ({expiredTokens.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {activeTokens.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTokens.map(renderTokenCard)}
              </div>
            ) : (
              <div className="text-center py-16">
                <Gift className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl text-muted-foreground mb-2">No Active Patronages</h3>
                <p className="text-muted-foreground mb-6">Start supporting artists by participating in auctions</p>
                <Button className="bg-[#8B4A4A] hover:bg-[#8B4A4A]/90">
                  Browse Auctions
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="expired">
            {expiredTokens.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expiredTokens.map(renderTokenCard)}
              </div>
            ) : (
              <div className="text-center py-16">
                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl text-muted-foreground mb-2">No Past Patronages</h3>
                <p className="text-muted-foreground">Your completed patronages will appear here</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}