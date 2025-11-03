import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import decredIcon from "@/assets/decred-icon.jpg";

const DecredVsBitcoinChart = () => {
  const comparisonData = [
    {
      category: "GOVERNANCE",
      Decred: 95,
      Bitcoin: 20,
      decredNote: "On-chain voting, binding decisions",
      bitcoinNote: "Informal, contentious forks"
    },
    {
      category: "PRIVACY",
      Decred: 85,
      Bitcoin: 30,
      decredNote: "Built-in mixing, optional privacy",
      bitcoinNote: "Pseudonymous, requires additional tools"
    },
    {
      category: "SECURITY",
      Decred: 90,
      Bitcoin: 85,
      decredNote: "Hybrid PoW+PoS consensus",
      bitcoinNote: "Pure PoW, 51% attack vulnerable"
    },
    {
      category: "COIN CAP",
      Decred: 21000000,
      Bitcoin: 21000000,
      decredNote: "21M max supply",
      bitcoinNote: "21M max supply"
    }
  ];

  const chartConfig = {
    Decred: {
      label: "Decred",
      color: "hsl(var(--primary))",
    },
    Bitcoin: {
      label: "Bitcoin",
      color: "hsl(var(--orange-500))",
    },
  };

  // For the coin cap comparison, we'll show it separately since it's equal
  const metricsData = comparisonData.slice(0, 3);
  const coinCapData = comparisonData[3];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Decred vs Bitcoin: Head-to-Head Comparison
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Decred builds upon Bitcoin's foundation with enhanced governance, privacy, and security
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm animate-fade-in mb-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Feature Comparison Score</h3>
            <ChartContainer config={chartConfig} className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metricsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="category" 
                    className="text-sm"
                    tick={{ fill: 'hsl(var(--foreground))' }}
                  />
                  <YAxis 
                    className="text-sm"
                    tick={{ fill: 'hsl(var(--foreground))' }}
                    domain={[0, 100]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend 
                    wrapperStyle={{ color: 'hsl(var(--foreground))' }}
                    iconType="circle"
                  />
                  <Bar 
                    dataKey="Decred" 
                    fill="hsl(var(--primary))" 
                    radius={[8, 8, 0, 0]}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  <Bar 
                    dataKey="Bitcoin" 
                    fill="hsl(24 95% 53%)" 
                    radius={[8, 8, 0, 0]}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {metricsData.map((item, idx) => (
              <Card key={idx} className="p-6 bg-background/50">
                <h4 className="font-bold text-lg mb-4 text-primary">{item.category}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <img src={decredIcon} alt="Decred" className="w-5 h-5 rounded-full" />
                      <span className="font-semibold">Decred: {item.Decred}/100</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.decredNote}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">₿</span>
                      <span className="font-semibold">Bitcoin: {item.Bitcoin}/100</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.bitcoinNote}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Coin Cap Comparison */}
        <Card className="p-8 bg-primary/5 border-primary/30 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl">🪙</span>
              {coinCapData.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center justify-center gap-3">
                <img src={decredIcon} alt="Decred" className="w-8 h-8 rounded-full" />
                <div className="text-left">
                  <p className="font-bold text-xl">Decred</p>
                  <p className="text-muted-foreground">{coinCapData.decredNote}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">₿</span>
                <div className="text-left">
                  <p className="font-bold text-xl">Bitcoin</p>
                  <p className="text-muted-foreground">{coinCapData.bitcoinNote}</p>
                </div>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">
              Both have identical maximum supply caps
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DecredVsBitcoinChart;
