import { Lock, TrendingUp, Shield, Vault } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SupplyShock = () => {
  const totalCirculating = 17074999;
  const treasury = 905031;
  const staked = 10298939;
  const totalLocked = 11203970;
  const percentageLocked = 65.62;
  const circulating = totalCirculating - totalLocked;
  const percentageCirculating = 100 - percentageLocked;

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

          {/* Main Visual - Circular Progress */}
          <div className="mb-16">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Circular Chart */}
                  <div className="relative w-64 h-64 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="hsl(var(--muted))"
                        strokeWidth="12"
                        opacity="0.2"
                      />
                      {/* Locked supply arc */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="12"
                        strokeDasharray={`${percentageLocked * 2.513} ${(100 - percentageLocked) * 2.513}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                        style={{
                          filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.5))"
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold gradient-text">{percentageLocked}%</div>
                      <div className="text-sm text-muted-foreground mt-1">Locked</div>
                    </div>
                  </div>

                  {/* Stats Breakdown */}
                  <div className="flex-1 space-y-6 w-full">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 rounded-lg bg-primary/10">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Staked (PoS Security)</span>
                            <span className="text-xl font-bold">{staked.toLocaleString()} DCR</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all duration-1000"
                              style={{ width: `${(staked / totalCirculating) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 rounded-lg bg-primary/10">
                          <Vault className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Treasury (Development Fund)</span>
                            <span className="text-xl font-bold">{treasury.toLocaleString()} DCR</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary/70 rounded-full transition-all duration-1000"
                              style={{ width: `${(treasury / totalCirculating) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 p-2 rounded-lg bg-muted/50">
                          <TrendingUp className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="text-sm font-medium text-muted-foreground">Circulating Supply</span>
                            <span className="text-xl font-bold text-muted-foreground">{circulating.toLocaleString()} DCR</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-muted-foreground/50 rounded-full transition-all duration-1000"
                              style={{ width: `${percentageCirculating}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-medium">Total Supply</span>
                        <span className="text-2xl font-bold">{totalCirculating.toLocaleString()} DCR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Network Security</h3>
                <p className="text-sm text-muted-foreground">
                  60% of supply staked provides robust proof-of-stake security layer
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supply Pressure</h3>
                <p className="text-sm text-muted-foreground">
                  Reduced circulating supply creates natural scarcity and price support
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Vault className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Long-term Funding</h3>
                <p className="text-sm text-muted-foreground">
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
