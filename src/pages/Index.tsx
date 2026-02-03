import { ArrowUpRight, Shield, Zap, Users, CreditCard, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import cakewalletLogo from "@/assets/cakewallet-square.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
import bitmartLogo from "@/assets/bitmart-logo-square.png";
import trocadorLogo from "@/assets/trocador-logo.png";
import changenowLogo from "@/assets/changenow-logo.webp";
import exolixLogo from "@/assets/exolix-logo.jpg";
import swapzoneLogo from "@/assets/swapzone-logo.jpg";
import flypMeLogo from "@/assets/flypme-logo.jpg";
import nearIntentsLogo from "@/assets/near-intents-logo.png";

const Index = () => {
  const { t } = useTranslation();

  const primaryExchanges = [
    {
      name: "Binance",
      logo: binanceLogo,
      descriptionKey: "index.exchanges.binance.description",
      typeKey: "index.exchanges.binance.type",
      features: ["index.features.highLiquidity", "index.features.lowFees", "index.features.advancedTrading", "index.features.nonUSA"],
      url: "https://www.binance.com/en/trade/DCR_USDT",
      badgeKey: "index.exchanges.binance.badge",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "MEXC",
      logo: mexcLogo,
      descriptionKey: "index.exchanges.mexc.description",
      typeKey: "index.exchanges.mexc.type",
      features: ["index.features.mayRequireVPN", "index.features.competitiveFees", "index.features.noKYC", "index.features.mobileApp"],
      url: "https://www.mexc.com/exchange/DCR_USDT",
      badgeKey: "index.exchanges.mexc.badge",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const mainExchanges = [
    {
      name: "Bison Wallet",
      logo: bisonWalletLogo,
      descriptionKey: "index.exchanges.bisonWallet.description",
      typeKey: "index.exchanges.bisonWallet.type",
      features: ["index.features.noKYC", "index.features.nonCustodial", "index.features.bitcoinTrading", "index.features.zeroTradingFees"],
      url: "https://bisonwallet.org/",
      badgeKey: "index.exchanges.bisonWallet.badge",
      icon: <Shield className="w-5 h-5" />,
      tradingPairs: true
    },
    {
      name: "Alchemy Pay",
      logo: alchemyPayLogo,
      descriptionKey: "index.exchanges.alchemyPay.description",
      typeKey: "index.exchanges.alchemyPay.type",
      features: ["index.features.debitCard", "index.features.instantPurchase", "index.features.fiatToCrypto", "index.features.usAllowed"],
      url: "https://ramp.alchemypay.org/",
      badgeKey: "index.exchanges.alchemyPay.badge",
      icon: <CreditCard className="w-5 h-5" />
    }
  ];

  const alternativeExchanges = [
    {
      name: "KuCoin",
      logo: kucoinLogo,
      descriptionKey: "index.altExchanges.kucoin",
      url: "https://www.kucoin.com/price/DCR"
    },
    {
      name: "Gate.io",
      logo: gateioLogo,
      descriptionKey: "index.altExchanges.gateio",
      url: "https://www.gate.com/price/decred-dcr"
    },
    {
      name: "HolyTransaction",
      logo: holytransactionLogo,
      descriptionKey: "index.altExchanges.holytransaction",
      url: "https://holytransaction.com/"
    },
    {
      name: "Novadax",
      logo: novadaxLogo,
      descriptionKey: "index.altExchanges.novadax",
      url: "https://www.novadax.com.br/en-US",
      badge: "Brazil"
    },
    {
      name: "Guarda",
      logo: guardaLogo,
      descriptionKey: "index.altExchanges.guarda",
      url: "https://guarda.com/"
    },
    {
      name: "NonKYC",
      logo: nonkycLogo,
      descriptionKey: "index.altExchanges.nonkyc",
      url: "https://nonkyc.io/market/DCR_USDT"
    },
    {
      name: "BasicSwap",
      logo: basicswapLogo,
      descriptionKey: "index.altExchanges.basicswap",
      url: "https://basicswapdex.com/",
      badge: "DEX"
    },
    {
      name: "Bitmart",
      logo: bitmartLogo,
      descriptionKey: "index.altExchanges.bitmart",
      url: "https://www.bitmart.com/trade/DCR_USDT?type=spot"
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
              {t('index.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('index.subtitle').split('<dcr>').map((part, i) => 
                i === 0 ? part : (
                  <span key={i}>
                    <span className="text-primary font-semibold">{part.split('</dcr>')[0]}</span>
                    {part.split('</dcr>')[1]}
                  </span>
                )
              )}
            </p>
          </div>

          {/* Primary Exchanges */}
          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">{t('index.primary')}</h2>
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
                            {t(exchange.typeKey)}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                        {t(exchange.badgeKey)}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {t(exchange.descriptionKey)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {exchange.features.map((featureKey) => {
                          const feature = t(featureKey);
                          return (
                            <div 
                              key={featureKey}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${featureKey.includes("nonUSA") ? "bg-red-500" : featureKey.includes("mayRequireVPN") ? "bg-yellow-500" : "bg-primary"}`} />
                              {feature}
                            </div>
                          );
                        })}
                      </div>
                      <Button 
                        className="w-full group-hover:scale-[1.02] transition-transform"
                        onClick={() => window.open(exchange.url, '_blank')}
                      >
                        {t('index.visit')} {exchange.name}
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
                          {t(exchange.typeKey)}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="default" className={exchange.name === "Alchemy Pay" ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-primary/20 text-primary border-primary/30"}>
                      {t(exchange.badgeKey)}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {t(exchange.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {exchange.features.map((featureKey) => {
                        const feature = t(featureKey);
                        return (
                          <div 
                            key={featureKey}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              featureKey.includes("bitcoinTrading") ? "bg-orange-500" : 
                              featureKey.includes("nonUSA") ? "bg-yellow-500" : 
                              featureKey.includes("usAllowed") ? "bg-green-500" :
                              "bg-primary"
                            }`} />
                            {feature}
                          </div>
                        );
                      })}
                    </div>
                    <Button 
                      className="w-full group-hover:scale-[1.02] transition-transform"
                      onClick={() => window.open(exchange.url, '_blank')}
                    >
                      {t('index.visit')} {exchange.name}
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
                    <h3 className="text-xl font-semibold mb-2 text-white">{t('index.requestListing.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('index.requestListing.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Exchanges */}
          <div className="mb-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">{t('index.alternative')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alternativeExchanges.map((exchange) => (
                <Card key={exchange.name} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
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
                                : "bg-green-500/10 text-green-500 border-green-500/30"
                            }`}
                          >
                            {exchange.name === "Novadax" && "🇧🇷 "}
                            {exchange.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {t(exchange.descriptionKey)}
                    </p>
                    <Button 
                      className="w-full mt-auto"
                      variant="outline"
                      onClick={() => window.open(exchange.url, '_blank')}
                    >
                      {t('index.visit')} {exchange.name}
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
                {t('index.instantSwaps.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('index.instantSwaps.subtitle').split('<note>').map((part, i) => 
                  i === 0 ? part : (
                    <span key={i}>
                      <span className="text-yellow-500">{part.split('</note>')[0]}</span>
                      {part.split('</note>')[1]}
                    </span>
                  )
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {instantSwaps.map((swap) => (
                <Card key={swap.name} className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-[3.25rem] h-[3.25rem] rounded-lg bg-background flex items-center justify-center p-0.5">
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
                      {t('index.visit')}
                      <ArrowUpRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cake Wallet Notice */}
            <Card className="border-primary/30 bg-primary/5 backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img src={cakewalletLogo} alt="Cake Wallet" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-white">{t('index.cakeWalletSwap.title')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('index.cakeWalletSwap.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Custodial Service Notice */}
          <div className="mt-8 max-w-6xl mx-auto">
            <Card className="border-yellow-500/30 bg-yellow-500/5 backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-yellow-500">{t('index.custodialNotice.title')}</h3>
                    <p className="text-muted-foreground">
                      {t('index.custodialNotice.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-muted-foreground">{t('index.soon')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-dashed border-2 border-primary/30 bg-card/30 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                      <img src={nearIntentsLogo} alt="NEAR Intents" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{t('index.nearIntents.title')}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1 bg-primary/10 text-primary border-primary/30">
                        {t('index.comingSoon')}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {t('index.nearIntentsDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Different Platforms */}
          <div className="mt-16 max-w-6xl mx-auto mb-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="py-10 px-8">
                <h2 className="text-3xl font-bold mb-10 text-white">{t('index.whyChoose.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">{t('index.whyChoose.centralizedExchanges.title')}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {t('index.whyChoose.centralizedExchanges.description')}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">{t('index.whyChoose.dcrdex.title')}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {t('index.whyChoose.dcrdex.description')}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">{t('index.whyChoose.alchemyPay.title')}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {t('index.whyChoose.alchemyPay.description')}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-white">{t('index.whyChoose.chooseWhats.title')}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {t('index.whyChoose.chooseWhats.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
