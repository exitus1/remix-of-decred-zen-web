import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wallet, Shuffle, Gamepad2, Code } from "lucide-react";

const Roadmap = () => {
  const roadmapCategories = [
    {
      icon: Shuffle,
      title: "DCRDEX",
      description: "Decentralized Exchange Evolution",
      items: [
        "XMR (Monero) support for enhanced privacy trading",
        "Mesh network architecture for improved resilience",
        "Electrum wallet integration for broader accessibility",
        "MEXC arbitrage bots for automated trading opportunities",
        "Coinbase arbitrage bots for centralized exchange integration",
        "Private swaps with zero-knowledge proofs",
        "BASE network support for Layer 2 scaling",
        "Liquidity verification tools for potential Market Makers"
      ]
    },
    {
      icon: Wallet,
      title: "Cake Wallet",
      description: "Mobile Wallet Enhancements",
      items: [
        "Significant improvements to sync times for new and restored wallets",
        "Ledger hardware wallet support for enhanced security",
        "BTCPayServer support for merchant integrations",
        "iOS platform bug fixes and stability improvements"
      ]
    },
    {
      icon: Gamepad2,
      title: "Schnorr P2P Betting",
      description: "Self-Custody Decentralized Gaming",
      items: [
        "Pong - Classic arcade gaming with on-chain bets",
        "Poker - Strategic card gaming with cryptographic fairness"
      ]
    },
    {
      icon: Code,
      title: "dcrd Core",
      description: "Protocol & Node Improvements",
      items: [
        "Version 2.1.0 release with performance optimizations",
        "Mixing coordination improvements for better privacy",
        "Convert netsync to synchronous model for reliability"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Upcoming features and improvements driving Decred's evolution toward greater decentralization, privacy, and user sovereignty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {roadmapCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Roadmap items are subject to change based on community priorities and technical considerations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;