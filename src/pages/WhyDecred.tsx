import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Vote, Wallet, Repeat, Eye, Zap, Database, Lock, CheckCircle2, Code, DollarSign, FileText, AlertCircle, ArrowRight } from "lucide-react";

const WhyDecred = () => {
  const features = [
    {
      icon: Shield,
      title: "Hybrid Proof-of-Work/Proof-of-Stake Consensus",
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
      title: "DCRDEX Atomic-Swap Trading",
      description: "Trustless, peer-to-peer trading across multiple blockchains with no accounts, custody, or trading fees."
    },
    {
      icon: Eye,
      title: "Privacy Features",
      description: "Built-in mixing through CoinShuffle++ enables optional transaction privacy without compromising network transparency."
    },
    {
      icon: Zap,
      title: "Lightning Network Integration",
      description: "Instant, low-cost transactions through the Lightning Network for everyday payments with on-chain security."
    },
    {
      icon: Database,
      title: "Optimized Node Performance",
      description: "Efficient full node design ensures anyone can run one, keeping the network truly decentralized."
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-primary/60 font-mono">decred-terminal</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-mono text-primary mb-6">
              $ Decred: Governed by Code
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
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
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
