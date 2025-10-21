import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Vote, Wallet, Repeat, Eye, Zap, Database } from "lucide-react";

const WhyDecred = () => {
  const features = [
    {
      icon: Shield,
      title: "Hybrid Proof-of-Work/Proof-of-Stake Consensus",
      description: "Decred combines PoW mining with PoS validation, requiring both miners and stakeholders to approve blocks. This dual-layer security makes 51% attacks exponentially more difficult and expensive."
    },
    {
      icon: Vote,
      title: "On-Chain Governance",
      description: "DCR holders vote directly on protocol changes, budget allocations, and project direction through Politeia, Decred's proposal system. Every stakeholder has a voice—no central authority controls the roadmap."
    },
    {
      icon: Wallet,
      title: "Self-Funding Treasury",
      description: "10% of every block reward flows into a decentralized treasury controlled by stakeholders. This ensures sustainable development funding without relying on external investors or ICOs."
    },
    {
      icon: Repeat,
      title: "DCRDEX Atomic-Swap Trading",
      description: "Decred's decentralized exchange enables trustless, peer-to-peer trading across multiple blockchains without intermediaries. No accounts, no custody, no trading fees—just direct atomic swaps that eliminate counterparty risk."
    },
    {
      icon: Eye,
      title: "Privacy Features",
      description: "Built-in mixing through CoinShuffle++ enables optional transaction privacy, giving users control over their financial privacy without compromising network transparency."
    },
    {
      icon: Zap,
      title: "Lightning Network Integration",
      description: "Decred supports instant, low-cost transactions through the Lightning Network, making it practical for everyday payments while maintaining on-chain security for larger transactions."
    },
    {
      icon: Database,
      title: "Optimized Node Performance",
      description: "Great care has been taken to ensure that dcrd, Decred's full node, remains efficient so anyone can run one. This accessibility ensures the network stays truly decentralized, with low barriers to participation."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            Decred (DCR): Secure, Sustainable, Self-Governing
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Decred is a community-driven cryptocurrency built for long-term resilience and stakeholder sovereignty. 
            It combines the security of Bitcoin-style mining with an innovative governance system that puts 
            decision-making power directly in the hands of DCR holders.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Core Features</h2>
            <p className="text-lg text-muted-foreground">Seven pillars of Decred's technological advantage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/30 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
            <CardContent className="pt-8 text-center">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
                Decred represents a fundamental rethinking of cryptocurrency governance—where security, 
                adaptability, and stakeholder alignment create lasting value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default WhyDecred;
