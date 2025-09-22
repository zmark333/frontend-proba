import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { Eye, EyeOff, User, Palette } from "lucide-react";

interface RegisterProps {
  onNavigate: (page: string) => void;
}

export function Register({ onNavigate }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("mecenas");
  
  const [mecenasData, setMecenasData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    interests: ""
  });

  const [artistData, setArtistData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    artistName: "",
    artForm: "",
    portfolio: "",
    bio: ""
  });

  const handleMecenasSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mecenas registration:", mecenasData);
    // Handle mecenas registration logic
    onNavigate("home");
  };

  const handleArtistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Artist registration:", artistData);
    // Handle artist registration logic
    onNavigate("home");
  };

  const handleMecenasChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMecenasData({
      ...mecenasData,
      [e.target.name]: e.target.value
    });
  };

  const handleArtistChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArtistData({
      ...artistData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#8B4A4A] mb-2">Join Mecenas</h1>
          <p className="text-muted-foreground">Choose your path in the world of modern patronage</p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Select whether you're joining as a patron or an artist
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mecenas" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Mecenas (Patron)
                </TabsTrigger>
                <TabsTrigger value="artist" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Artist
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mecenas" className="mt-6">
                <form onSubmit={handleMecenasSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={mecenasData.firstName}
                        onChange={handleMecenasChange}
                        required
                        className="bg-input-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={mecenasData.lastName}
                        onChange={handleMecenasChange}
                        required
                        className="bg-input-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={mecenasData.email}
                      onChange={handleMecenasChange}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create password"
                          value={mecenasData.password}
                          onChange={handleMecenasChange}
                          required
                          className="bg-input-background pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={mecenasData.confirmPassword}
                          onChange={handleMecenasChange}
                          required
                          className="bg-input-background pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Art Interests</Label>
                    <Textarea
                      id="interests"
                      name="interests"
                      placeholder="Tell us about your artistic interests and what you're looking to support..."
                      value={mecenasData.interests}
                      onChange={handleMecenasChange}
                      rows={3}
                      className="bg-input-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90"
                  >
                    Create Mecenas Account
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="artist" className="mt-6">
                <form onSubmit={handleArtistSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={artistData.firstName}
                        onChange={handleArtistChange}
                        required
                        className="bg-input-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={artistData.lastName}
                        onChange={handleArtistChange}
                        required
                        className="bg-input-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artistName">Artist Name / Stage Name</Label>
                    <Input
                      id="artistName"
                      name="artistName"
                      placeholder="Your professional artist name"
                      value={artistData.artistName}
                      onChange={handleArtistChange}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={artistData.email}
                      onChange={handleArtistChange}
                      required
                      className="bg-input-background"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create password"
                          value={artistData.password}
                          onChange={handleArtistChange}
                          required
                          className="bg-input-background pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          value={artistData.confirmPassword}
                          onChange={handleArtistChange}
                          required
                          className="bg-input-background pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="artForm">Primary Art Form</Label>
                    <Select onValueChange={(value) => setArtistData({...artistData, artForm: value})}>
                      <SelectTrigger className="bg-input-background">
                        <SelectValue placeholder="Select your primary art form" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="sculpture">Sculpture</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="writing">Writing</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="digital">Digital Art</SelectItem>
                        <SelectItem value="performance">Performance Art</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio Website (Optional)</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="https://your-portfolio.com"
                      value={artistData.portfolio}
                      onChange={handleArtistChange}
                      className="bg-input-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Artist Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Tell us about your artistic journey, style, and what you're passionate about creating..."
                      value={artistData.bio}
                      onChange={handleArtistChange}
                      rows={4}
                      className="bg-input-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#8B4A4A] hover:bg-[#8B4A4A]/90"
                  >
                    Create Artist Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <Separator className="my-6" />

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Already have an account?
              </p>
              <Button
                variant="outline"
                className="w-full border-[#8B4A4A] text-[#8B4A4A] hover:bg-[#8B4A4A] hover:text-white"
                onClick={() => onNavigate("login")}
              >
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button
            variant="link"
            className="text-muted-foreground hover:text-[#8B4A4A]"
            onClick={() => onNavigate("home")}
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}