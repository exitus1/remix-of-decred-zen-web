import { ArrowRight, TrendingUp, Wallet, Users, FileText, MessageSquare, Vote, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Treasury = () => {
  const [treasuryDCR, setTreasuryDCR] = useState<number | null>(null);
  const [treasuryUSD, setTreasuryUSD] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreasuryData = async () => {
      try {
        // Fetch treasury balance and DCR price in parallel
        const [treasuryRes, priceRes] = await Promise.all([
          fetch('https://dcrdata.decred.org/api/treasury/balance'),
          fetch('https://api.coingecko.com/api/v3/simple/price?ids=decred&vs_currencies=usd')
        ]);

        const treasuryData = await treasuryRes.json();
        const priceData = await priceRes.json();

        // Balance is in atoms (1 DCR = 100,000,000 atoms)
        const dcrBalance = treasuryData.balance / 100000000;
        const dcrPrice = priceData.decred?.usd || 0;

        setTreasuryDCR(dcrBalance);
        setTreasuryUSD(dcrBalance * dcrPrice);
      } catch (error) {
        console.error('Error fetching treasury data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreasuryData();
  }, []);

  const formatNumber = (num: number, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Wallet className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sustainable Funding</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Self-Funding Treasury
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            10% of every block reward flows directly to the treasury—no foundations, no VCs, 
            just stakeholder-controlled sustainable development.
          </p>
        </div>

        {/* Main Distribution Visual */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Distribution Chart */}
            <div className="relative">
              <div className="relative w-72 h-72 mx-auto">
                {/* Outer ring */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="42" fill="none" className="stroke-muted/20" strokeWidth="12" />
                  {/* PoW - 1% */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    className="stroke-muted-foreground/40" 
                    strokeWidth="12"
                    strokeDasharray="2.64 261.36"
                    strokeLinecap="round"
                  />
                  {/* PoS - 89% */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    className="stroke-primary/50" 
                    strokeWidth="12"
                    strokeDasharray="234.96 29.04"
                    strokeDashoffset="-2.64"
                    strokeLinecap="round"
                  />
                  {/* Treasury - 10% */}
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    className="stroke-primary" 
                    strokeWidth="12"
                    strokeDasharray="26.4 237.6"
                    strokeDashoffset="-237.6"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">10%</div>
                    <div className="text-sm text-muted-foreground mt-1">to Treasury</div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                  <span className="text-sm text-muted-foreground">1% Miners</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <span className="text-sm text-muted-foreground">89% Voters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">10% Treasury</span>
                </div>
              </div>
            </div>

            {/* Right: Stats Cards */}
            <div className="space-y-4">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Treasury Value</p>
                    <div className="text-4xl font-bold">
                      {loading ? (
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      ) : treasuryUSD ? (
                        <>${formatNumber(treasuryUSD)}</>
                      ) : (
                        '$--'
                      )}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground mb-1">DCR Held</p>
                  <div className="text-2xl font-bold">
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    ) : treasuryDCR ? (
                      <>{formatNumber(treasuryDCR)}</>
                    ) : (
                      '--'
                    )}
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Control</p>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-xs text-muted-foreground">Stakeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - Modern Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center">How Treasury Spending Works</h3>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: FileText, title: "Propose", desc: "Submit on Politeia" },
              { icon: MessageSquare, title: "Discuss", desc: "Community debate" },
              { icon: Vote, title: "Vote", desc: "60% approval needed" },
              { icon: CheckCircle, title: "Execute", desc: "The work is done" },
              { icon: Wallet, title: "Treasury Spend", desc: "Funds released" },
            ].map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group px-8"
          >
            View Treasury Balance
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Treasury;
