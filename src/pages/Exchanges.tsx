import { ArrowUpRight, Shield, Zap, Users, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import binanceLogo from "@/assets/binance-logo-square.jpg";
import mexcLogo from "@/assets/mexc-logo-square.jpg";
import alchemyPayLogo from "@/assets/alchemy-pay-logo-square.jpg";
import bitcoinIcon from "@/assets/bitcoin-icon.png";
import simpleswapLogo from "@/assets/simpleswap-logo.png";
import godexLogo from "@/assets/godex-logo.png";
import stealthexLogo from "@/assets/stealthex-logo.png";
import dcrdexLogo from "@/assets/dcrdex-symbol.png";

const Exchanges = () => {
  const exchanges = [
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
      description: "Leading cryptocurrency exchange with extensive altcoin offerings",
      type: "Centralized Exchange",
      features: ["Wide Selection", "Competitive Fees", "Fast Trading", "Mobile App"],
      url: "https://www.mexc.com/exchange/DCR_USDT",
      badge: "High Volume",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "DCRDEX",
      logo: dcrdexLogo,
      description: "Decred's native DEX for trustless, peer-to-peer atomic swaps",
      type: "Decentralized Exchange",
      features: ["No KYC", "Non-Custodial", "Bitcoin Trading", "Zero Trading Fees"],
      url: "https://dex.decred.org/",
      badge: "Recommended",
      icon: <Shield className="w-5 h-5" />,
      tradingPairs: true
    },
    {
      name: "Alchemy Pay",
      logo: alchemyPayLogo,
      description: "Buy DCR instantly with debit card - fast and easy onboarding",
      type: "Fiat Gateway",
      features: ["Debit Card", "Instant Purchase", "Fiat to Crypto", "Easy Onboarding"],
      url: "https://ramp.alchemypay.org/",
      badge: "Fastest",
      icon: <CreditCard className="w-5 h-5" />,
      usdSupported: true
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Decred (DCR)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade, swap, or purchase DCR on these featured exchanges and platforms
            </p>
          </div>

          {/* Exchanges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {exchanges.map((exchange) => (
              <Card key={exchange.name} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {exchange.logo ? (
                        <div className={`w-16 h-16 rounded-lg bg-background flex items-center justify-center ${exchange.name === "Binance" ? "p-0" : "p-1.5"}`}>
                          <img 
                            src={exchange.logo} 
                            alt={exchange.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                          {exchange.icon}
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-2xl mb-1">{exchange.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {exchange.type}
                          </Badge>
                          {exchange.usdSupported && (
                            <Badge variant="outline" className="text-xs bg-green-500/10 text-green-500 border-green-500/30">
                              $ USD Supported
                            </Badge>
                          )}
                        </div>
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
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {exchange.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${feature === "Non-USA" ? "bg-yellow-500" : feature === "Bitcoin Trading" ? "bg-orange-500" : "bg-primary"}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
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

          {/* Instant Swaps Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Instant Crypto Swaps
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick and simple crypto-to-crypto exchanges. Note: These are custodial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-2 flex items-center justify-center">
                      <img 
                        src={simpleswapLogo} 
                        alt="SimpleSwap"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">SimpleSwap</CardTitle>
                        <Badge variant="outline" className="text-xs">Custodial</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    Fast and easy crypto swaps with competitive rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No registration required
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      400+ cryptocurrencies
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Fixed & floating rates
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://simpleswap.io/', '_blank')}
                    >
                      Visit SimpleSwap
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-2 flex items-center justify-center">
                      <img 
                        src={godexLogo} 
                        alt="Godex"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Godex</CardTitle>
                        <Badge variant="outline" className="text-xs">Custodial</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    Anonymous crypto exchange with no limits
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No KYC or limits
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Fast transactions
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Wide coin selection
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://godex.io/', '_blank')}
                    >
                      Visit Godex
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-2 flex items-center justify-center">
                      <img 
                        src={stealthexLogo} 
                        alt="StealthEX"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">StealthEX</CardTitle>
                        <Badge variant="outline" className="text-xs">Custodial</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    Private crypto exchange with instant swaps
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Privacy-focused
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      700+ crypto assets
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Unlimited exchanges
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://stealthex.io/?to=dcr', '_blank')}
                    >
                      Visit StealthEX
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Warning Card */}
            <Card className="bg-yellow-500/10 border-yellow-500/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-yellow-500">Custodial Service Notice</h4>
                    <p className="text-sm text-muted-foreground">
                      These instant swap services are custodial, meaning you must trust them with your funds during the exchange process. While they offer speed and simplicity, for maximum security and privacy, consider using DCRDEX for trustless, non-custodial atomic swaps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Different Platforms?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Centralized Exchanges
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Best for high liquidity, advanced trading features, and fiat on-ramps. Binance and MEXC offer deep order books and competitive fees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      DCRDEX
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      For maximum security and privacy, use DCRDEX. Non-custodial atomic swaps mean you maintain full control of your funds with no KYC required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      Alchemy Pay
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The fastest way for newcomers to purchase DCR directly with a debit card. Simple, quick, and beginner-friendly onboarding.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Choose What's Best
                    </h4>
                    <p className="text-sm text-muted-foreground">
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

export default Exchanges;
