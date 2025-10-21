import Navigation from "@/components/Navigation";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Vote, Wallet, Repeat, Eye, Zap, Database, Pickaxe, Ticket, ArrowRight, Users, CheckCircle2, Lock, Unlock, Server, ArrowLeftRight } from "lucide-react";

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
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            Decred (DCR): Secure, Sustainable, Self-Governing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Decred is a community-driven cryptocurrency built for long-term resilience and stakeholder sovereignty. 
            It combines the security of Bitcoin-style mining with an innovative governance system that puts 
            decision-making power directly in the hands of DCR holders.
          </p>
        </div>
      </section>

      {/* Why Decred Matters */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">Why Decred Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Traditional cryptocurrencies often face challenges around centralized development, contentious forks, 
                and misaligned incentives. Decred solves these problems through a unique hybrid consensus system and 
                built-in governance mechanisms that ensure the network evolves according to stakeholder consensus—not 
                developer or miner preference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground">Seven pillars of Decred's technological advantage</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature 1: Hybrid PoW/PoS */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Hybrid Proof-of-Work/Proof-of-Stake Consensus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Pickaxe className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">PoW Miners</Badge>
                      <p className="text-xs text-muted-foreground mt-1 text-center">Create Blocks</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary mx-4" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Ticket className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">PoS Voters</Badge>
                      <p className="text-xs text-muted-foreground mt-1 text-center">Approve Blocks</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary mx-4" />
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">Confirmed</Badge>
                      <p className="text-xs text-muted-foreground mt-1 text-center">Double Security</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Decred combines PoW mining with PoS validation, requiring both miners and stakeholders to approve blocks. This dual-layer security makes 51% attacks exponentially more difficult and expensive.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 2: On-Chain Governance */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Vote className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">On-Chain Governance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Proposal Submitted</p>
                        <p className="text-xs text-muted-foreground">Via Politeia</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Community Discussion</p>
                        <p className="text-xs text-muted-foreground">Stakeholder input</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Vote className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">On-Chain Vote</p>
                        <p className="text-xs text-muted-foreground">Direct stakeholder decision</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  DCR holders vote directly on protocol changes, budget allocations, and project direction through Politeia, Decred's proposal system. Every stakeholder has a voice—no central authority controls the roadmap.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 3: Self-Funding Treasury */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Wallet className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Self-Funding Treasury</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="text-center mb-4">
                    <p className="text-sm font-medium mb-3">Block Reward Distribution</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-muted rounded-full h-8 flex items-center overflow-hidden">
                        <div className="bg-primary/40 h-full flex items-center justify-center" style={{ width: '60%' }}>
                          <span className="text-xs font-medium px-2">PoW 60%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-muted rounded-full h-8 flex items-center overflow-hidden">
                        <div className="bg-primary/60 h-full flex items-center justify-center" style={{ width: '30%' }}>
                          <span className="text-xs font-medium px-2">PoS 30%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-muted rounded-full h-8 flex items-center overflow-hidden">
                        <div className="bg-primary h-full flex items-center justify-center" style={{ width: '10%' }}>
                          <span className="text-xs font-medium px-2 whitespace-nowrap">Treasury 10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  10% of every block reward flows into a decentralized treasury controlled by stakeholders. This ensures sustainable development funding without relying on external investors or ICOs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 4: DCRDEX Atomic Swaps */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Repeat className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">DCRDEX Atomic-Swap Trading</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">User A</Badge>
                    </div>
                    <div className="flex flex-col items-center mx-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                        <ArrowLeftRight className="w-6 h-6 text-primary" />
                      </div>
                      <Badge className="text-xs mb-1">Direct P2P</Badge>
                      <div className="flex gap-1">
                        <Badge variant="secondary" className="text-[10px] px-1">No Custody</Badge>
                        <Badge variant="secondary" className="text-[10px] px-1">No Fees</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">User B</Badge>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">Trustless atomic swaps across blockchains</p>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Decred's decentralized exchange enables trustless, peer-to-peer trading across multiple blockchains without intermediaries. No accounts, no custody, no trading fees—just direct atomic swaps that eliminate counterparty risk.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 5: Privacy Features */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Privacy Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg border-2 border-primary/40 flex items-center justify-center mb-2">
                        <Unlock className="w-8 h-8 text-primary/60" />
                      </div>
                      <p className="text-xs text-muted-foreground text-center">Standard<br/>Transaction</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary" />
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-2">
                        <Repeat className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                      <p className="text-xs font-medium text-center">CoinShuffle++<br/>Mixing</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary" />
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-lg border-2 border-primary flex items-center justify-center mb-2">
                        <Lock className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-center">Private<br/>Transaction</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Built-in mixing through CoinShuffle++ enables optional transaction privacy, giving users control over their financial privacy without compromising network transparency.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 6: Lightning Network */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Network Integration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Lightning Network</span>
                      </div>
                      <Badge className="bg-primary">Instant</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-background/50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-primary">&lt;1s</p>
                        <p className="text-xs text-muted-foreground">Transaction Speed</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-primary">~$0</p>
                        <p className="text-xs text-muted-foreground">Transaction Cost</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <Database className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">On-Chain</span>
                      </div>
                      <Badge variant="outline">High Security</Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Decred supports instant, low-cost transactions through the Lightning Network, making it practical for everyday payments while maintaining on-chain security for larger transactions.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Feature 7: Optimized Node Performance */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/50 backdrop-blur-sm lg:col-span-2">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Optimized Node Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infographic */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                        <Server className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium mb-1">Efficient dcrd Node</p>
                      <p className="text-xs text-muted-foreground">Optimized resource usage</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium mb-1">Low Entry Barrier</p>
                      <p className="text-xs text-muted-foreground">Anyone can run a node</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium mb-1">True Decentralization</p>
                      <p className="text-xs text-muted-foreground">Network remains accessible</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  Great care has been taken to ensure that dcrd, Decred's full node, remains efficient so anyone can run one. This accessibility ensures the network stays truly decentralized, with low barriers to participation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/30 shadow-xl bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
            <CardContent className="pt-8 text-center">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-foreground">
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