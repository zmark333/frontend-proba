import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Clock, Gavel, Gift, Star, Calendar, Music, Palette, PenTool, Hammer } from "lucide-react";

interface Artist {
  id: number;
  name: string;
  title: string;
  currentBid: string;
  image: string;
  category: string;
  totalBids: number;
  auctionEnds: string;
  status: string;
}

interface ArtistDetailModalProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

const getBenefits = (category: string) => {
  switch (category) {
    case "Painter":
      return [
        {
          icon: <Palette className="h-5 w-5" />,
          title: "Annual Portrait Session",
          description: "A personal portrait painted exclusively for you each year"
        },
        {
          icon: <Star className="h-5 w-5" />,
          title: "First Purchase Rights",
          description: "Pre-purchase access to all new paintings before public release"
        },
        {
          icon: <Gift className="h-5 w-5" />,
          title: "Studio Visits",
          description: "Quarterly private studio visits to see works in progress"
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Custom Commissions",
          description: "Priority booking for custom artwork with 20% discount"
        }
      ];
    case "Musician":
      return [
        {
          icon: <Music className="h-5 w-5" />,
          title: "Private Concerts",
          description: "Annual private concert performance at your location"
        },
        {
          icon: <Star className="h-5 w-5" />,
          title: "Early Access",
          description: "Exclusive first listen to new compositions and albums"
        },
        {
          icon: <Gift className="h-5 w-5" />,
          title: "Recording Sessions",
          description: "VIP access to recording sessions and behind-the-scenes content"
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Concert Priority",
          description: "Priority seating at all public concerts and events"
        }
      ];
    case "Writer":
      return [
        {
          icon: <PenTool className="h-5 w-5" />,
          title: "Dedicated Stories",
          description: "Annual short story or poem written specifically for you"
        },
        {
          icon: <Star className="h-5 w-5" />,
          title: "First Edition Books",
          description: "Signed first editions of all published works"
        },
        {
          icon: <Gift className="h-5 w-5" />,
          title: "Writing Workshops",
          description: "Quarterly private writing workshops and feedback sessions"
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Literary Events",
          description: "VIP access to book launches and literary events"
        }
      ];
    case "Sculptor":
      return [
        {
          icon: <Hammer className="h-5 w-5" />,
          title: "Mini Sculpture",
          description: "Annual custom mini sculpture created exclusively for you"
        },
        {
          icon: <Star className="h-5 w-5" />,
          title: "First Acquisition Rights",
          description: "Priority access to purchase new sculptures before public sale"
        },
        {
          icon: <Gift className="h-5 w-5" />,
          title: "Workshop Access",
          description: "Quarterly visits to the sculpture workshop and creative process"
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          title: "Installation Consultation",
          description: "Professional consultation for art installations in your space"
        }
      ];
    default:
      return [];
  }
};

export function ArtistDetailModal({ artist, isOpen, onClose }: ArtistDetailModalProps) {
  if (!artist) return null;

  const benefits = getBenefits(artist.category);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Mecenas Benefits</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Artist Info */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                {artist.category}
              </Badge>
              {artist.status === "ending_soon" && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground animate-pulse">
                  Ending Soon
                </Badge>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl text-primary mb-2">{artist.name}</h3>
                <p className="text-lg text-muted-foreground">{artist.title}</p>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Gavel className="h-4 w-4" />
                    {artist.totalBids} bids
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {artist.auctionEnds}
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Bid</span>
                  <span className="text-2xl text-primary">{artist.currentBid}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl text-primary mb-4">As This Artist's Mecenas, You'll Receive:</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-l-4 border-l-primary shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary mb-1">{benefit.title}</h5>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <h5 className="text-lg text-primary mb-2">Exclusive Patronage</h5>
              <p className="text-sm text-muted-foreground mb-4">
                As the winning mecenas, you'll become this artist's exclusive patron for one year, 
                receiving all the benefits above plus a special recognition in their upcoming works.
              </p>
              <p className="text-xs text-muted-foreground italic">
                * Benefits begin immediately after auction completion and last for 12 months
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
            size="lg"
          >
            Place Bid
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg py-6"
            size="lg"
          >
            Watch Auction
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}