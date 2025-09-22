import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6 text-[#8B4A4A]">
            About Mecenas
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Reviving the ancient tradition of artistic patronage
            for the modern era
          </p>
        </div>

        {/* Caius Maecenas Section */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-[#8B4A4A] flex items-center gap-3">
              <div className="w-2 h-8 bg-[#8B4A4A] rounded"></div>
              Caius Maecenas (70-8 BC)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              Gaius Cilnius Maecenas was a Roman statesman and
              political advisor to Emperor Augustus, but his
              lasting legacy lies in his revolutionary approach
              to supporting the arts. As one of history's most
              influential patrons, Maecenas provided financial
              support, protection, and guidance to some of
              Rome's greatest poets, including Virgil and
              Horace.
            </p>
            <p className="text-lg leading-relaxed">
              More than mere sponsorship, Maecenas created a
              model of patronage that fostered artistic
              independence while ensuring artists could focus
              entirely on their craft. His name became
              synonymous with enlightened patronage, and the
              term "mecenas" still represents the highest form
              of artistic support across many cultures today.
            </p>
            <div className="bg-[#8B4A4A]/10 p-6 rounded-lg">
              <p className="italic text-[#8B4A4A]">
                "Without Maecenas, we might never have had
                Virgil's Aeneid or Horace's Odes—works that have
                shaped Western literature for over two
                millennia."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Historical Tradition Section */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-[#8B4A4A] flex items-center gap-3">
              <div className="w-2 h-8 bg-[#8B4A4A] rounded"></div>
              The Tradition of Patronage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              Throughout history, the greatest artistic
              achievements have flourished under the protection
              of enlightened patrons. From the Medici family
              supporting Renaissance masters like Michelangelo
              and Leonardo da Vinci, to wealthy merchants
              commissioning symphonies from Mozart and
              Beethoven, patronage has been the cornerstone of
              artistic innovation.
            </p>
            <p className="text-lg leading-relaxed">
              These relationships went beyond financial
              transactions—they were partnerships built on
              mutual respect, shared vision, and the
              understanding that great art requires both
              creative genius and sustained support. Patrons
              didn't just buy art; they invested in artists'
              entire creative journeys.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-3xl text-[#8B4A4A] mb-2">
                  🏛️
                </div>
                <h4 className="text-lg mb-2 text-[#8B4A4A]">
                  Ancient Rome
                </h4>
                <p className="text-sm text-muted-foreground">
                  Maecenas supports Virgil & Horace
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl text-[#8B4A4A] mb-2">
                  🎨
                </div>
                <h4 className="text-lg mb-2 text-[#8B4A4A]">
                  Renaissance
                </h4>
                <p className="text-sm text-muted-foreground">
                  Medici family backs Michelangelo
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl text-[#8B4A4A] mb-2">
                  🎼
                </div>
                <h4 className="text-lg mb-2 text-[#8B4A4A]">
                  Classical Era
                </h4>
                <p className="text-sm text-muted-foreground">
                  Aristocrats commission Mozart
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modern Platform Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-[#8B4A4A] flex items-center gap-3">
              <div className="w-2 h-8 bg-[#8B4A4A] rounded"></div>
              Mecenas Platform: Patronage Reimagined
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              Our platform brings the noble tradition of
              artistic patronage into the digital age. Instead
              of simply selling individual artworks, we auction
              the privilege of becoming an artist's exclusive
              mecenas—their primary supporter and creative
              partner for a full year.
            </p>
            <p className="text-lg leading-relaxed">
              When you win an auction, you're not just acquiring
              art; you're investing in an artist's creative
              journey. You receive exclusive access to their
              work, personal attention, and the satisfaction of
              knowing you're enabling exceptional art to
              flourish.
            </p>

            <div className="bg-gradient-to-r from-[#8B4A4A]/10 to-[#8B4A4A]/5 p-8 rounded-lg">
              <h4 className="text-xl text-[#8B4A4A] mb-4">
                How It Works
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg text-[#8B4A4A] mb-2">
                    1. Discover Artists
                  </h5>
                  <p className="text-muted-foreground">
                    Browse talented artists across various
                    disciplines
                  </p>
                </div>
                <div>
                  <h5 className="text-lg text-[#8B4A4A] mb-2">
                    2. Bid for Patronage
                  </h5>
                  <p className="text-muted-foreground">
                    Participate in auctions to become their
                    mecenas
                  </p>
                </div>
                <div>
                  <h5 className="text-lg text-[#8B4A4A] mb-2">
                    3. Receive Exclusive Benefits
                  </h5>
                  <p className="text-muted-foreground">
                    Enjoy personalized artworks and unique
                    experiences
                  </p>
                </div>
                <div>
                  <h5 className="text-lg text-[#8B4A4A] mb-2">
                    4. Support Artistic Growth
                  </h5>
                  <p className="text-muted-foreground">
                    Enable artists to focus on their craft
                    full-time
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-lg leading-relaxed">
                By reviving this ancient tradition through
                modern technology, we create meaningful
                connections between patrons and artists,
                ensuring that exceptional creativity continues
                to thrive in our rapidly changing world.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}