import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Vote, Wallet, Repeat, Eye, Zap, Database, Lock, CheckCircle2, Code, DollarSign, FileText, AlertCircle, ArrowRight, Users } from "lucide-react";

const WhyDecred = () => {
  const features = [
    {
      icon: Shield,
      title: "Hybrid Consensus",
      description: "Decred combines PoW mining with PoS validation, making 51% attacks exponentially more difficult and expensive."
    },
    {
      icon: Vote,
      title: "On-Chain Governance",
      description: "DCR holders vote directly on protocol changes and budget allocations through Politeia with no central authority."
    },
    {
      icon: Wallet,
      title: "Self-Funding Treasury",
      description: "10% of every block reward flows into a decentralized treasury controlled by stakeholders for sustainable development."
    },
    {
      icon: Repeat,
      title: "Atomic Swaps",
      description: "Trustless, peer-to-peer trading across multiple blockchains with no accounts, custody, or trading fees."
    },
    {
      icon: Eye,
      title: "Privacy Features",
      description: "Built-in mixing through CoinShuffle++ enables optional transaction privacy without compromising network transparency."
    },
    {
      icon: Zap,
      title: "Lightning Network",
      description: "Instant, low-cost transactions through the Lightning Network for everyday payments with on-chain security."
    },
    {
      icon: Database,
      title: "Optimized Nodes",
      description: "Efficient full node design ensures anyone can run one, keeping the network truly decentralized."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Fully open-source with transparent development funded and directed entirely by the community."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Terminal-style header */}
          <div className="bg-black/90 border-2 border-primary/30 rounded-lg p-8 mb-8 shadow-2xl backdrop-blur-sm">
            <h1 className="text-2xl md:text-3xl font-semibold font-mono text-[#00ff00] mb-6 tracking-tighter">
              Decred: Decentralized Credits
            </h1>
            <div className="font-mono text-sm md:text-base text-primary/80 space-y-2 overflow-hidden">
              <div className="animate-fade-in">
                <span className="text-primary/60">{'>'}</span> votebits: <span className="text-green-400">0x0001</span>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                <span className="text-primary/60">{'>'}</span> stakeholder.vote(<span className="text-yellow-400">"consensus"</span>) → <span className="text-green-400">true</span>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
                <span className="text-primary/60">{'>'}</span> treasury.balance: <span className="text-green-400">841,629 DCR</span>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'backwards' }}>
                <span className="text-primary/60">{'>'}</span> pow + pos = <span className="text-green-400">hybrid_security</span>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}>
                <span className="text-primary/60">{'>'}</span> governance: <span className="text-green-400">BINDING</span> <span className="animate-pulse">▊</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 pl-6 border-l-4 border-green-500">
            <p className="font-mono text-green-500 text-sm md:text-base mb-2">
              # Decred is a community-driven cryptocurrency built for long-term
            </p>
            <p className="font-mono text-green-500 text-sm md:text-base mb-2">
              # resilience and stakeholder sovereignty. It combines the security
            </p>
            <p className="font-mono text-green-500 text-sm md:text-base mb-2">
              # of Bitcoin-style mining with an innovative governance system that
            </p>
            <p className="font-mono text-green-500 text-sm md:text-base">
              # puts decision-making power directly in the hands of DCR holders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/90 border-2 border-green-500/30 hover:border-green-500 transition-all duration-300 rounded p-4 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-green-500 text-sm">{'>'}</span>
                  <feature.icon className="w-5 h-5 text-green-500" />
                  <span className="font-mono text-xs text-green-500/60">0{index + 1}</span>
                </div>
                <h3 className="font-mono text-green-500 font-semibold text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="font-mono text-green-500/80 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Binding Governance Section */}
      <section className="relative py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Truly Binding Governance</h2>
            <p className="text-lg text-muted-foreground">
              Unlike advisory votes in other projects, Decred's stakeholder decisions are automatically enforced by the protocol
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* How It Works */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Binding Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Lock DCR to Buy Tickets</p>
                    <p className="text-xs text-muted-foreground">Stakeholders commit funds to participate</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary mx-auto" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Vote className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Vote On-Chain</p>
                    <p className="text-xs text-muted-foreground">Cryptographically verifiable votes recorded on blockchain</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-primary mx-auto" />
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Automatic Enforcement</p>
                    <p className="text-xs text-muted-foreground">Protocol implements approved changes—no override possible</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Decred vs Others
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-semibold text-sm text-primary mb-2">✓ Decred: Binding</p>
                  <p className="text-xs text-muted-foreground">
                    Stakeholder votes automatically enforced by code. Results cannot be ignored or overridden by any authority.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 border border-border">
                  <p className="font-semibold text-sm text-muted-foreground mb-2">✗ Most Projects: Advisory</p>
                  <p className="text-xs text-muted-foreground">
                    Foundation or core team can choose whether to implement community preferences. Governance is often symbolic.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Types of Binding Votes */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Consensus Rules</h3>
                <p className="text-sm text-muted-foreground">Protocol upgrades automatically activate after stakeholder approval</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Treasury Spending</h3>
                <p className="text-sm text-muted-foreground">Fund allocation requires stakeholder approval—guaranteed by protocol</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Policy Decisions</h3>
                <p className="text-sm text-muted-foreground">Major project direction changes enforced through stakeholder consensus</p>
              </CardContent>
            </Card>
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
