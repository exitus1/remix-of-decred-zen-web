import { ArrowUpRight, Shield, Zap, Users, CreditCard, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import binanceLogo from "@/assets/binance-logo-square.jpg";
import mexcLogo from "@/assets/mexc-logo.svg";
import alchemyPayLogo from "@/assets/alchemy-pay-logo-new.png";
import simpleswapLogo from "@/assets/simpleswap-logo.webp";
import godexLogo from "@/assets/godex-logo-new.jpg";
import stealthexLogo from "@/assets/stealthex-logo-new.png";
import bisonWalletLogo from "@/assets/bison-wallet-logo.jpg";
import kucoinLogo from "@/assets/kucoin-logo-square.png";
import gateioLogo from "@/assets/gateio-logo-square.jpg";
import holytransactionLogo from "@/assets/holytransaction-logo.jpg";
import novadaxLogo from "@/assets/novadax-logo-square.jpg";
import guardaLogo from "@/assets/guarda-logo.png";
import nonkycLogo from "@/assets/nonkyc-logo-square.jpg";
import basicswapLogo from "@/assets/basicswap-logo-square.jpg";
import bitvavoLogo from "@/assets/bitvavo-logo-square.png";
import trocadorLogo from "@/assets/trocador-logo.png";
import changenowLogo from "@/assets/changenow-logo.webp";
import exolixLogo from "@/assets/exolix-logo.jpg";
import swapzoneLogo from "@/assets/swapzone-logo.jpg";
import flypMeLogo from "@/assets/flypme-logo.jpg";
import nearIntentsLogo from "@/assets/near-intents-logo.png";

const Index = () => {
  const primaryExchanges = [
    {
      name: "Binance",
      logo: binanceLogo,
      description: "World's largest cryptocurrency exchange by trading volume",
      type: "Centralized Exchange",
      features: ["High Liquidity", "Low Fees", "Advanced Trading", "Non-USA"],
      url: "https://www.binance.com/en/trade/DCR_USDT",
      badge: "Most Popular",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "MEXC",
      logo: mexcLogo,
      description: "Popular altcoin exchange. US users must use a VPN to access.",
      type: "Centralized Exchange",
      features: ["Set VPN to non-USA", "Competitive Fees", "No KYC", "Mobile App"],
      url: "https://www.mexc.com/exchange/DCR_USDT",
      badge: "High Volume",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const mainExchanges = [
    {
      name: "Bison Wallet",
      logo: bisonWalletLogo,
      description: "Decred's native DEX for trustless, peer-to-peer atomic swaps",
      type: "Decentralized Exchange",
      features: ["No KYC", "Non-Custodial", "Bitcoin Trading", "Zero Trading Fees"],
      url: "https://bisonwallet.org/",
      badge: "Maximum Security",
      icon: <Shield className="w-5 h-5" />,
      tradingPairs: true
    },
    {
      name: "Alchemy Pay",
      logo: alchemyPayLogo,
      description: "Buy DCR instantly with debit card - fast and easy onboarding",
      type: "Fiat Gateway",
      features: ["Debit Card", "Instant Purchase", "Fiat to Crypto", "US Allowed"],
      url: "https://ramp.alchemypay.org/",
      badge: "$ USD Supported",
      icon: <CreditCard className="w-5 h-5" />
    }
  ];

  const alternativeExchanges = [
    {
      name: "KuCoin",
      logo: kucoinLogo,
      description: "Global cryptocurrency exchange with spot and futures trading",
      url: "https://www.kucoin.com/price/DCR"
    },
    {
      name: "Gate.io",
      logo: gateioLogo,
      description: "Comprehensive trading platform with wide coin selection",
      url: "https://www.gate.com/price/decred-dcr"
    },
    {
      name: "HolyTransaction",
      logo: holytransactionLogo,
      description: "Multi-currency wallet and exchange platform",
      url: "https://holytransaction.com/"
    },
    {
      name: "Novadax",
      logo: novadaxLogo,
      description: "Brazilian cryptocurrency exchange with local support",
      url: "https://www.novadax.com.br/en-US",
      badge: "Brazil"
    },
    {
      name: "Guarda",
      logo: guardaLogo,
      description: "Multi-currency wallet with built-in exchange functionality",
      url: "https://guarda.com/"
    },
    {
      name: "NonKYC",
      logo: nonkycLogo,
      description: "Privacy-focused exchange with no KYC requirements",
      url: "https://nonkyc.io/market/DCR_USDT"
    },
    {
      name: "BasicSwap",
      logo: basicswapLogo,
      description: "Cross-chain DEX for peer-to-peer atomic swaps",
      url: "https://basicswapdex.com/",
      badge: "DEX"
    },
    {
      name: "Bitvavo",
      logo: bitvavoLogo,
      description: "European cryptocurrency exchange platform",
      url: "https://bitvavo.com/en",
      badge: "Europe"
    }
  ];

  const instantSwaps = [
    { name: "SimpleSwap", logo: simpleswapLogo, url: "https://simpleswap.io/" },
    { name: "Godex", logo: godexLogo, url: "https://godex.io/" },
    { name: "StealthEx", logo: stealthexLogo, url: "https://stealthex.io/" },
    { name: "Trocador", logo: trocadorLogo, url: "https://trocador.app/" },
    { name: "ChangeNOW", logo: changenowLogo, url: "https://changenow.io/" },
    { name: "Exolix", logo: exolixLogo, url: "https://exolix.com/" },
    { name: "Swapzone", logo: swapzoneLogo, url: "https://swapzone.io/" },
    { name: "Flyp.me", logo: flypMeLogo, url: "https://flyp.me/" }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get Decred
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trade, swap, or purchase <span className="text-primary font-semibold">DCR</span> on these featured exchanges and platforms
            </p>
          </div>

          {/* Primary Exchanges */}
          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Primary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {primaryExchanges.map((exchange) => (
                <Card key={exchange.name} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-lg bg-background flex items-center justify-center ${exchange.name === "Binance" ? "p-0" : exchange.name === "MEXC" ? "p-0.5" : "p-1.5"}`}>
                          <img 
                            src={exchange.logo} 
                            alt={exchange.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-1">{exchange.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {exchange.type}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                        {exchange.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {exchange.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {exchange.features.map((feature) => (
                          <div 
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${feature === "Non-USA" || feature === "Set VPN to non-USA" ? "bg-yellow-500" : "bg-primary"}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button 
                        className="w-full group-hover:scale-[1.02] transition-transform"
                        onClick={() => window.open(exchange.url, '_blank')}
                      >
                        Visit {exchange.name}
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Exchanges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {mainExchanges.map((exchange) => (
              <Card key={exchange.name} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-lg bg-background flex items-center justify-center ${exchange.name === "Bison Wallet" ? "p-0.5" : "p-1.5"}`}>
                        <img 
                          src={exchange.logo} 
                          alt={exchange.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">{exchange.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {exchange.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="default" className={exchange.name === "Alchemy Pay" ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-primary/20 text-primary border-primary/30"}>
                      {exchange.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {exchange.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {exchange.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            feature === "Bitcoin Trading" ? "bg-orange-500" : 
                            feature === "Non-USA" ? "bg-yellow-500" : 
                            feature === "US Allowed" ? "bg-green-500" :
                            "bg-primary"
                          }`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full group-hover:scale-[1.02] transition-transform"
                      onClick={() => window.open(exchange.url, '_blank')}
                    >
                      Visit {exchange.name}
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Request Listing CTA */}
          <div className="mb-12 max-w-4xl mx-auto">
            <Card className="border-green-500/30 bg-green-500/5 backdrop-blur-sm">
              <CardContent className="py-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">Want DCR on Coinbase, Kraken, or other major exchanges?</h3>
                    <p className="text-muted-foreground">
                      Community demand matters! Reach out to your favorite exchanges directly and request that they list Decred. 
                      The more requests they receive, the more likely they are to add DCR support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Exchanges */}
          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Alternative</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alternativeExchanges.map((exchange) => (
                <Card key={exchange.name} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center p-0.5">
                        <img 
                          src={exchange.logo} 
                          alt={exchange.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{exchange.name}</CardTitle>
                        {exchange.badge && (
                          <Badge 
                            variant="outline" 
                            className={`text-xs mt-1 ${
                              exchange.name === "BasicSwap"
                                ? "bg-purple-500/10 text-purple-500 border-purple-500/30"
                                : exchange.name === "Bitvavo"
                                ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                                : "bg-green-500/10 text-green-500 border-green-500/30"
                            }`}
                          >
                            {exchange.name === "Novadax" && "🇧🇷 "}
                            {exchange.name === "Bitvavo" && "🇪🇺 "}
                            {exchange.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exchange.description}
                    </p>
                    <Button 
                      className="w-full"
                      variant="outline"
                      onClick={() => window.open(exchange.url, '_blank')}
                    >
                      Visit {exchange.name}
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Instant Swaps Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Instant Crypto Swaps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick and simple crypto-to-crypto exchanges. <span className="text-yellow-500">Note:</span> These are custodial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {instantSwaps.map((swap) => (
                <Card key={swap.name} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`rounded-lg bg-background flex items-center justify-center ${swap.name === "Godex" || swap.name === "Swapzone" || swap.name === "SimpleSwap" || swap.name === "ChangeNOW" || swap.name === "Trocador" ? "w-12 h-12 p-0.5" : "w-10 h-10 p-1"}`}>
                        <img 
                          src={swap.logo} 
                          alt={swap.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-lg">{swap.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full"
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(swap.url, '_blank')}
                    >
                      Visit
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Custodial Service Notice */}
          <div className="mt-8 max-w-6xl mx-auto">
            <Card className="border-yellow-500/30 bg-yellow-500/5 backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-500">Custodial Service Notice</h3>
                    <p className="text-muted-foreground">
                      These instant swap services are custodial, meaning you must trust them with your funds during the exchange process. While they offer speed and simplicity, for maximum security and privacy, consider using Bison Wallet for trustless, non-custodial atomic swaps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-dashed border-2 border-primary/30 bg-card/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <img src={nearIntentsLogo} alt="NEAR Intents" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">NEAR Intents</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1 bg-primary/10 text-primary border-primary/30">
                        Coming Soon
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    Cross-chain swap infrastructure powered by NEAR Protocol
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Different Platforms */}
          <div className="mt-16 max-w-6xl mx-auto mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="py-10 px-8">
                <h2 className="text-3xl font-bold mb-10 text-white">Why Choose Different Platforms?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">Centralized Exchanges</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Best for high liquidity, advanced trading features, and fiat on-ramps. Binance and MEXC offer deep order books and competitive fees.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">DCRDEX</h3>
                    </div>
                    <p className="text-muted-foreground">
                      For maximum security and privacy, use Bison Wallet. Non-custodial atomic swaps mean you maintain full control of your funds with no KYC required.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">Alchemy Pay</h3>
                    </div>
                    <p className="text-muted-foreground">
                      The fastest way for newcomers to purchase DCR directly with a debit card. Simple, quick, and beginner-friendly onboarding.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">Choose What's Best</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Each platform serves different needs. Consider your priorities: convenience, privacy, fees, or trading features.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;
