import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Terminal } from "lucide-react";
import cakewalletLogo from "@/assets/cakewallet-square.png";
import decreditonLogo from "@/assets/decrediton-logo.svg";
import bisonWalletLogo from "@/assets/bison-wallet-logo.jpg";
import trustwalletLogo from "@/assets/trustwallet-logo.png";
import exodusLogo from "@/assets/exodus-logo.webp";

const Wallets = () => {
  const desktopWallets = [
    {
      name: "Decrediton",
      description: "Official full-featured Decred wallet with governance, staking, and mixing capabilities",
      platforms: ["Windows", "Mac", "Linux"],
      labels: ["Recommended", "Trezor", "Ledger"],
      logo: decreditonLogo,
      link: "https://decred.org/wallets/",
    },
    {
      name: "Bison Wallet",
      description: "Multicurrency wallet with built-in DEX for Atomic-Swap trading. Supports staking and privacy mixing.",
      platforms: ["Windows", "Mac", "Linux"],
      labels: ["DEX"],
      logo: bisonWalletLogo,
      link: "https://dex.decred.org/",
    },
    {
      name: "Command-line Suite",
      description: "Non-graphical command-line tools for advanced users and automation",
      platforms: ["Windows", "Mac", "Linux"],
      labels: ["CLI"],
      link: "https://docs.decred.org/wallets/cli/cli-installation/",
      icon: Terminal,
    },
  ];

  const mobileWallets = [
    {
      name: "Cake Wallet",
      description: "Privacy-focused multi-currency mobile wallet with Decred support for iOS and Android",
      platforms: ["iOS", "Android"],
      labels: ["Recommended"],
      logo: cakewalletLogo,
      link: "https://cakewallet.com/",
    },
    {
      name: "Trust Wallet",
      description: "Multi-currency mobile wallet trusted by millions worldwide with Decred support",
      platforms: ["iOS", "Android"],
      logo: trustwalletLogo,
      link: "https://trustwallet.com/",
    },
  ];

  const otherWallets = [
    {
      name: "Exodus",
      description: "Multi-currency desktop and mobile wallet with hardware wallet integration",
      platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
      labels: ["Trezor"],
      logo: exodusLogo,
      link: "https://www.exodus.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 mt-20">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your <span className="text-primary font-semibold">DCR</span> with official wallets designed for desktop, mobile, and advanced users
            </p>
          </div>

          {/* Desktop Wallets */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Desktop Wallets</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {desktopWallets.map((wallet) => (
                <Card key={wallet.name} className="hover:shadow-lg transition-shadow relative">
                  {wallet.labels && wallet.labels.some(l => l === "Trezor" || l === "Ledger") && (
                    <div className="absolute top-4 right-4 flex gap-2">
                      {wallet.labels.filter(l => l === "Trezor" || l === "Ledger").map((label) => (
                        <Badge 
                          key={label}
                          variant="outline" 
                          className="border-accent text-accent"
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {(wallet.icon || wallet.logo) && (
                          <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center border border-border">
                            {wallet.icon ? (
                              <wallet.icon className="w-full h-full text-primary" />
                            ) : (
                              <img 
                                src={wallet.logo} 
                                alt={wallet.name}
                                className="w-full h-full object-contain"
                              />
                            )}
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl mb-2">{wallet.name}</CardTitle>
                          {wallet.labels && (
                            <div className="flex flex-wrap gap-2">
                              {wallet.labels.filter(l => l !== "Trezor" && l !== "Ledger").map((label) => (
                                <Badge 
                                  key={label}
                                  variant="outline" 
                                  className={
                                    label === "Recommended" ? "border-green-500 text-green-500" :
                                    label === "DEX" ? "border-primary text-primary" :
                                    "border-muted-foreground text-muted-foreground"
                                  }
                                >
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {wallet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2 text-muted-foreground">Platforms:</p>
                        <div className="flex flex-wrap gap-2">
                          {wallet.platforms.map((platform) => (
                            <Badge key={platform} variant="secondary">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
                        href={wallet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mobile Wallets */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Mobile Wallets</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mobileWallets.map((wallet) => (
                <Card key={wallet.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {wallet.logo && (
                          <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center p-2">
                            <img 
                              src={wallet.logo} 
                              alt={wallet.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl mb-2">{wallet.name}</CardTitle>
                          {wallet.labels && (
                            <div className="flex flex-wrap gap-2">
                              {wallet.labels.map((label) => (
                                <Badge 
                                  key={label}
                                  variant="outline" 
                                  className="border-green-500 text-green-500"
                                >
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {wallet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2 text-muted-foreground">Platforms:</p>
                        <div className="flex flex-wrap gap-2">
                          {wallet.platforms.map((platform) => (
                            <Badge key={platform} variant="secondary">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
                        href={wallet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Other Wallets */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Other Wallets</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherWallets.map((wallet) => (
                <Card key={wallet.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {wallet.logo && (
                          <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center p-2">
                            <img 
                              src={wallet.logo} 
                              alt={wallet.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-xl mb-2">{wallet.name}</CardTitle>
                          {wallet.labels && (
                            <div className="flex flex-wrap gap-2">
                              {wallet.labels.map((label) => (
                                <Badge 
                                  key={label}
                                  variant="outline" 
                                  className="border-accent text-accent"
                                >
                                  {label}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {wallet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2 text-muted-foreground">Platforms:</p>
                        <div className="flex flex-wrap gap-2">
                          {wallet.platforms.map((platform) => (
                            <Badge key={platform} variant="secondary">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <a
                        href={wallet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Visit Website
                      </a>
                    </div>
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

export default Wallets;

