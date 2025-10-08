import { ArrowUpRight, Shield, Zap, Users, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import binanceLogo from "@/assets/binance-logo-square.jpg";
import mexcLogo from "@/assets/mexc-logo.svg";
import alchemyPayLogo from "@/assets/alchemy-pay-logo-new.png";
import bitcoinIcon from "@/assets/bitcoin-icon.png";
import simpleswapLogo from "@/assets/simpleswap-logo.webp";
import godexLogo from "@/assets/godex-logo.png";
import stealthexLogo from "@/assets/stealthex-logo.png";
import dcrdexLogo from "@/assets/dcrdex-logo.png";
import kucoinLogo from "@/assets/kucoin-logo-square.png";
import gateioLogo from "@/assets/gateio-logo-square.jpg";
import htxLogo from "@/assets/htx-logo-square.jpg";
import holytransactionLogo from "@/assets/holytransaction-logo.jpg";
import novadaxLogo from "@/assets/novadax-logo-square.jpg";
import swyftxLogo from "@/assets/swyftx-logo-square.jpg";
import nonkycLogo from "@/assets/nonkyc-logo-square.jpg";
import basicswapLogo from "@/assets/basicswap-logo-square.jpg";
import bitvavoLogo from "@/assets/bitvavo-logo-square.png";
import trocadorLogo from "@/assets/trocador-logo.png";
import changenowLogo from "@/assets/changenow-logo.webp";
import exolixLogo from "@/assets/exolix-logo.jpg";
import swapzoneLogo from "@/assets/swapzone-logo.jpg";

const Exchanges = () => {
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
      description: "Leading cryptocurrency exchange with extensive altcoin offerings",
      type: "Centralized Exchange",
      features: ["Wide Selection", "Competitive Fees", "Fast Trading", "Mobile App"],
      url: "https://www.mexc.com/exchange/DCR_USDT",
      badge: "High Volume",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const mainExchanges = [
    {
      name: "DCRDEX",
      logo: dcrdexLogo,
      description: "Decred's native DEX for trustless, peer-to-peer atomic swaps",
      type: "Decentralized Exchange",
      features: ["No KYC", "Non-Custodial", "Bitcoin Trading", "Zero Trading Fees"],
      url: "https://dex.decred.org/",
      badge: "Maximum Security",
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
      name: "Swyftx",
      logo: swyftxLogo,
      description: "Australian cryptocurrency exchange with easy fiat onramp",
      url: "https://swyftx.com/au/buy/decred/",
      badge: "Australia"
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

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Decred
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trade, swap, or purchase DCR on these featured exchanges and platforms
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
                        {exchange.logo ? (
                          <div className={`w-16 h-16 rounded-lg bg-background flex items-center justify-center ${exchange.name === "Binance" ? "p-0" : exchange.name === "MEXC" ? "p-0.5" : "p-1.5"}`}>
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
                      <div className="grid grid-cols-2 gap-2">
                        {exchange.features.map((feature) => (
                          <div 
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${feature === "Non-USA" ? "bg-yellow-500" : "bg-primary"}`} />
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
                      {exchange.logo ? (
                        <div className={`w-16 h-16 rounded-lg bg-background flex items-center justify-center ${exchange.name === "Binance" ? "p-0" : exchange.name === "DCRDEX" ? "p-0.5" : exchange.name === "MEXC" ? "p-0.5" : exchange.name === "KuCoin" ? "p-0.5" : "p-1.5"}`}>
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
                        </div>
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
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {exchange.features.map((feature) => (
                        <div 
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${feature === "Non-USA" ? "bg-yellow-500" : "bg-primary"}`} />
                          {feature}
                          {feature === "Bitcoin Trading" && (
                            <img src={bitcoinIcon} alt="Bitcoin" className="w-3.5 h-3.5 ml-1" />
                          )}
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
                              exchange.name === "Swyftx" 
                                ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                                : exchange.name === "BasicSwap"
                                ? "bg-purple-500/10 text-purple-500 border-purple-500/30"
                                : exchange.name === "Bitvavo"
                                ? "bg-blue-500/10 text-blue-500 border-blue-500/30"
                                : "bg-green-500/10 text-green-500 border-green-500/30"
                            }`}
                          >
                            {exchange.name === "Novadax" && "🇧🇷 "}
                            {exchange.name === "Swyftx" && "🇦🇺 "}
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
                Quick and simple crypto-to-crypto exchanges. Note: These are custodial services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                      <CardTitle className="text-xl">SimpleSwap</CardTitle>
                    </div>
                  </div>
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
                      <CardTitle className="text-xl">Godex</CardTitle>
                    </div>
                  </div>
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
                      <CardTitle className="text-xl">StealthEX</CardTitle>
                    </div>
                  </div>
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

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-1 flex items-center justify-center">
                      <img 
                        src={trocadorLogo} 
                        alt="Trocador"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  <div className="flex-1">
                      <CardTitle className="text-xl">Trocador</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Compare multiple exchanges
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Best rates guaranteed
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://trocador.app/en/', '_blank')}
                    >
                      Visit Trocador
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
                        src={exolixLogo} 
                        alt="Exolix"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  <div className="flex-1">
                      <CardTitle className="text-xl">Exolix</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No registration needed
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Fast processing
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://exolix.com/currencies/dcr', '_blank')}
                    >
                      Visit Exolix
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-0.5 flex items-center justify-center">
                      <img 
                        src={changenowLogo} 
                        alt="ChangeNOW"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  <div className="flex-1">
                      <CardTitle className="text-xl">ChangeNOW</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No account required
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      500+ cryptocurrencies
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://changenow.io/?from=btc&to=dcr', '_blank')}
                    >
                      Visit ChangeNOW
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-1 flex items-center justify-center">
                      <img 
                        src={swapzoneLogo} 
                        alt="Swapzone"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  <div className="flex-1">
                      <CardTitle className="text-xl">Swapzone</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Best price aggregator
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No account needed
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://swapzone.io/exchange/btc/dcr', '_blank')}
                    >
                      Visit Swapzone
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-background p-2 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                  <div className="flex-1">
                      <CardTitle className="text-xl">Flyp.me</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No signup required
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Quick exchanges
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant="outline"
                      onClick={() => window.open('https://flyp.me/en/', '_blank')}
                    >
                      Visit Flyp.me
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
