import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Vote, CheckCircle, TrendingUp, Users, FileText, X } from "lucide-react";
import decredIcon from "@/assets/decred-icon-2.jpg";
import bitcoinIcon from "@/assets/bitcoin-icon.png";
import { Card } from "@/components/ui/card";

const Governance = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              True Stakeholder Governance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Most cryptocurrencies have no formal governance—they're controlled by centralized figures, 
              mining cartels, or venture capital interests. Decred is different.
            </p>
            <p className="text-xl leading-relaxed">
              <span className="font-semibold text-primary">Decred's governance is purely by coinholders.</span> Through on-chain voting, 
              stakeholders have binding votes on consensus changes, treasury spending, and project policies via Proposals—your vote isn't advisory, it's final.
            </p>
          </div>
          
          {/* Bitcoin vs Decred Comparison Infographic */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Bitcoin vs Decred: Evolution of Cryptocurrency</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bitcoin Column */}
              <Card className="p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <img src={bitcoinIcon} alt="Bitcoin" className="w-12 h-12" />
                  <h3 className="text-3xl font-bold text-orange-500">Bitcoin</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Vote className="w-4 h-4" />
                      <span>GOVERNANCE</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">No formal governance—changes require social consensus among developers and miners</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Coins className="w-4 h-4" />
                      <span>FUNDING</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Relies on donations and external funding—no sustainable built-in mechanism</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>CONSENSUS</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Pure Proof-of-Work—vulnerable to 51% attacks and miner centralization</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>UPGRADES</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <X className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Contentious hard forks (Bitcoin Cash, Bitcoin SV) split the community</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decred Column */}
              <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  EVOLVED
                </div>
                
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <img src={decredIcon} alt="Decred" className="w-12 h-12 rounded-full" />
                  <h3 className="text-3xl font-bold text-primary">Decred</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Vote className="w-4 h-4" />
                      <span>GOVERNANCE</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">On-chain governance with binding stakeholder votes on all protocol changes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Coins className="w-4 h-4" />
                      <span>FUNDING</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">Self-funded treasury receives 10% of block rewards—sustainable development forever</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>CONSENSUS</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">Hybrid PoW+PoS—stakeholders can override miners, making attacks exponentially harder</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>UPGRADES</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium">Smooth, coordinated upgrades via stakeholder approval—no chain splits</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="text-lg font-semibold mb-2">Stake DCR</h3>
              <p className="text-sm text-muted-foreground">
                Lock DCR to purchase tickets. Each ticket grants voting rights on consensus rules and treasury proposals.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="text-lg font-semibold mb-2">Vote On-Chain</h3>
              <p className="text-sm text-muted-foreground">
                Cast binding votes on protocol upgrades, policy changes, and contractor payments from the treasury.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="text-lg font-semibold mb-2">Earn Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Receive ~10% annual rewards for participating in governance and securing the network.
              </p>
            </div>
          </div>
          
          {/* Visual Governance Flow */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">How Governance Works</h3>
            
            <div className="grid md:grid-cols-4 gap-6 items-start relative">
              {/* Step 1: Stake DCR */}
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 animate-pulse">
                      <Coins className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">1</div>
                    <h4 className="text-xl font-bold mb-3">Stake DCR</h4>
                    <p className="text-sm text-muted-foreground">
                      Lock your DCR to purchase tickets and gain voting power
                    </p>
                  </div>
                </Card>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              </div>

              {/* Step 2: Community Proposes */}
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <FileText className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">2</div>
                    <h4 className="text-xl font-bold mb-3">Proposals</h4>
                    <p className="text-sm text-muted-foreground">
                      Community submits proposals for protocol changes or treasury spending
                    </p>
                  </div>
                </Card>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              </div>

              {/* Step 3: Vote */}
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Vote className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <h4 className="text-xl font-bold mb-3">Cast Vote</h4>
                    <p className="text-sm text-muted-foreground">
                      Your tickets vote Yes or No—binding, on-chain decisions
                    </p>
                  </div>
                </Card>
                <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />
              </div>

              {/* Step 4: Earn Rewards */}
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:border-primary transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 hover-glow">
                      <TrendingUp className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">4</div>
                    <h4 className="text-xl font-bold mb-3">Earn Rewards</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive ~10% annual rewards for participating in governance
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Stakeholder Control</p>
              </Card>
              
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">Binding</div>
                <p className="text-sm text-muted-foreground">On-Chain Votes</p>
              </Card>
              
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">~10%</div>
                <p className="text-sm text-muted-foreground">Annual Rewards</p>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
            >
              Explore Politeia
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
