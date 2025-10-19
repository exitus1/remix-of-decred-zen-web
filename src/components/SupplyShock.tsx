import { Lock, TrendingUp, Shield, Vault } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SupplyShock = () => {
  const maxSupply = 21000000;
  const totalCirculating = 17074999;
  const treasury = 905031;
  const staked = 10298939;
  const totalLocked = 11203970;
  const percentageLocked = (totalLocked / totalCirculating) * 100;
  const circulating = totalCirculating - totalLocked;
  const percentageCirculating = (circulating / totalCirculating) * 100;
  const notYetMined = maxSupply - totalCirculating;

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Supply Shock Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Two-Thirds of Supply <span className="gradient-text">Locked Away</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nearly two-thirds of all existing Decred is currently locked up, securing the network 
              and funding future development
            </p>
          </div>

          {/* Main Visual - Single Line Supply Bar */}
          <div className="mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 md:p-8">
                {/* Total Supply Label */}
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">Maximum Supply</h3>
                  <span className="text-2xl md:text-3xl font-bold gradient-text">{maxSupply.toLocaleString()} DCR</span>
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  Current circulating: {totalCirculating.toLocaleString()} DCR ({((totalCirculating / maxSupply) * 100).toFixed(1)}% mined)
                </div>

                {/* Single Supply Bar */}
                <div className="relative h-32 md:h-40 bg-muted/30 rounded-lg overflow-hidden mb-6">
                  {/* Staked Section */}
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 flex items-center justify-center group"
                    style={{ 
                      width: `${(staked / maxSupply) * 100}%`,
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)"
                    }}
                  >
                    <div className="flex items-center gap-2 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      <Shield className="w-5 h-5" />
                      <span className="font-bold text-sm hidden md:inline">Staked</span>
                    </div>
                  </div>

                  {/* Treasury Section */}
                  <div 
                    className="absolute top-0 h-full bg-gradient-to-r from-primary/60 to-primary/40 transition-all duration-1000 flex items-center justify-center group"
                    style={{ 
                      left: `${(staked / maxSupply) * 100}%`,
                      width: `${(treasury / maxSupply) * 100}%`,
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.05)"
                    }}
                  >
                    <div className="flex items-center gap-2 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                      <Vault className="w-5 h-5" />
                      <span className="font-bold text-sm hidden md:inline">Treasury</span>
                    </div>
                  </div>

                  {/* Circulating Section */}
                  <div 
                    className="absolute top-0 h-full bg-muted/50 transition-all duration-1000 flex items-center justify-center group"
                    style={{ 
                      left: `${((staked + treasury) / maxSupply) * 100}%`,
                      width: `${(circulating / maxSupply) * 100}%`
                    }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-bold text-sm hidden md:inline">Circulating</span>
                    </div>
                  </div>

                  {/* Not Yet Mined Section */}
                  <div 
                    className="absolute right-0 top-0 h-full bg-muted/20 transition-all duration-1000 flex items-center justify-center group border-l-2 border-dashed border-muted-foreground/30"
                    style={{ 
                      width: `${(notYetMined / maxSupply) * 100}%`
                    }}
                  >
                    <div className="flex items-center gap-2 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
                      <Lock className="w-5 h-5" />
                      <span className="font-bold text-sm hidden md:inline">Not Yet Mined</span>
                    </div>
                  </div>

                  {/* Divider Lines */}
                  <div 
                    className="absolute top-0 h-full w-px bg-background/50"
                    style={{ left: `${(staked / maxSupply) * 100}%` }}
                  />
                  <div 
                    className="absolute top-0 h-full w-px bg-background/50"
                    style={{ left: `${((staked + treasury) / maxSupply) * 100}%` }}
                  />
                  <div 
                    className="absolute top-0 h-full w-px bg-background/50"
                    style={{ left: `${(totalCirculating / maxSupply) * 100}%` }}
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-1">Staked (PoS Security)</div>
                      <div className="text-xl font-bold">{staked.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{((staked / maxSupply) * 100).toFixed(1)}% of max supply</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Vault className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-1">Treasury (Development)</div>
                      <div className="text-xl font-bold">{treasury.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{((treasury / maxSupply) * 100).toFixed(1)}% of max supply</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="p-2 rounded-lg bg-muted/50">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-1">Available to Trade</div>
                      <div className="text-xl font-bold text-muted-foreground">{circulating.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{((circulating / maxSupply) * 100).toFixed(1)}% of max supply</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-dashed border-muted-foreground/30">
                    <div className="p-2 rounded-lg bg-muted/30">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-1">Not Yet Mined</div>
                      <div className="text-xl font-bold text-muted-foreground">{notYetMined.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{((notYetMined / maxSupply) * 100).toFixed(1)}% of max supply</div>
                    </div>
                  </div>
                </div>

                {/* Locked Percentage Highlight */}
                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
                  <div className="text-4xl font-bold gradient-text mb-1">{percentageLocked.toFixed(2)}%</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    of circulating supply is locked (Staked + Treasury)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Network Security</h3>
                <p className="text-xs text-muted-foreground">
                  60% of supply staked provides robust proof-of-stake security layer
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Supply Pressure</h3>
                <p className="text-xs text-muted-foreground">
                  Reduced circulating supply creates natural scarcity and price support
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                  <Vault className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Long-term Funding</h3>
                <p className="text-xs text-muted-foreground">
                  Treasury ensures sustainable development without relying on donations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyShock;
