import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MessageCircle, Send, Hash, Users, Vote, FileText, Radio } from "lucide-react";
import discordLogo from "@/assets/discord-logo.webp";
import xLogo from "@/assets/x-logo.png";
import elementLogo from "@/assets/element-logo.svg";
import redditLogo from "@/assets/reddit-logo.png";

const Community = () => {
  const socialPlatforms = [
    {
      name: "X (Twitter)",
      description: "Follow Decred on X for the latest news and updates",
      icon: Hash,
      logo: xLogo,
      link: "https://x.com/decredproject",
      color: "text-blue-400",
    },
    {
      name: "Chat.Decred.org (Matrix)",
      description: "Official Decred chat",
      icon: MessageCircle,
      logo: elementLogo,
      link: "https://chat.decred.org/",
      color: "text-green-400",
    },
    {
      name: "GitHub",
      description: "Explore Decred's open-source codebase",
      icon: Github,
      link: "https://github.com/decred",
      color: "text-foreground",
    },
    {
      name: "Telegram",
      description: "Connect on Telegram",
      icon: Send,
      link: "https://t.me/decred",
      color: "text-blue-500",
    },
    {
      name: "Discord",
      description: "Chat on Discord",
      icon: Users,
      logo: discordLogo,
      link: "https://discord.gg/decred",
      color: "text-indigo-400",
    },
    {
      name: "Reddit",
      description: "Join discussions on the Decred subreddit",
      icon: MessageCircle,
      logo: redditLogo,
      link: "https://reddit.com/r/decred",
      color: "text-orange-500",
    },
  ];

  const governancePlatforms = [
    {
      name: "Voting Dashboard",
      description: "Participate in Decred's on-chain governance voting",
      icon: Vote,
      link: "https://voting.decred.org/",
      color: "text-primary",
    },
    {
      name: "Proposals",
      description: "Review, discuss, and submit governance proposals",
      icon: FileText,
      link: "https://proposals.decred.org/",
      color: "text-accent",
    },
    {
      name: "Bison Relay",
      description: "Private, decentralized communication and commerce platform",
      icon: Radio,
      link: "https://bisonrelay.org/",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Join Decred
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with the Decred community across multiple platforms and participate in governance
            </p>
          </div>

          {/* Social Media Platforms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Social Media</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {socialPlatforms.map((platform) => (
                <Card key={platform.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border">
                          {platform.logo ? (
                            <img 
                              src={platform.logo} 
                              alt={platform.name}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          ) : (
                            <platform.icon className={`w-5 h-5 ${platform.color}`} />
                          )}
                        </div>
                        <CardTitle className="text-lg">{platform.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <CardDescription className="text-sm mb-3">
                      {platform.description}
                    </CardDescription>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center py-1.5 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Visit
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Governance & Communication */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Governance & Communication</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {governancePlatforms.map((platform) => (
                <Card key={platform.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-border">
                        <platform.icon className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <CardTitle className="text-xl">{platform.name}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      Visit
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Community;
