import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";

const DecredVsBitcoinChart = () => {
  const comparisonCategories = [
    {
      category: "GOVERNANCE",
      decredFeature: "On-chain voting with binding decisions",
      decredStatus: true,
      bitcoinFeature: "Informal, contentious hard forks",
      bitcoinStatus: false,
    },
    {
      category: "PRIVACY",
      decredFeature: "Built-in CoinShuffle++ mixing",
      decredStatus: true,
      bitcoinFeature: "Pseudonymous, requires external tools",
      bitcoinStatus: false,
    },
    {
      category: "SECURITY",
      decredFeature: "Hybrid PoW+PoS consensus",
      decredStatus: true,
      bitcoinFeature: "Pure PoW (51% attack vulnerable)",
      bitcoinStatus: "partial",
    },
    {
      category: "FUNDING",
      decredFeature: "Self-sustaining treasury (10% block reward)",
      decredStatus: true,
      bitcoinFeature: "Relies on donations and volunteers",
      bitcoinStatus: false,
    },
    {
      category: "COIN CAP",
      decredFeature: "21 million maximum supply",
      decredStatus: true,
      bitcoinFeature: "21 million maximum supply",
      bitcoinStatus: true,
    },
  ];

  const renderIcon = (status: boolean | string) => {
    if (status === true) {
      return <Check className="w-6 h-6 text-green-500" />;
    } else if (status === "partial") {
      return <Check className="w-6 h-6 text-yellow-500" />;
    }
    return <X className="w-6 h-6 text-red-500" />;
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Decred vs Bitcoin: Head-to-Head Comparison
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Decred builds upon Bitcoin&apos;s foundation with enhanced governance, privacy, security, and funding
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm animate-fade-in overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header Row */}
            <div className="grid grid-cols-[180px_1fr_80px_1fr_80px] gap-4 mb-8 items-center">
              <div className="font-bold text-lg">Category</div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img src={decredIcon} alt="Decred" className="w-8 h-8 rounded-full" />
                  <span className="font-bold text-xl">Decred</span>
                </div>
              </div>
              <div></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">₿</span>
                  <span className="font-bold text-xl">Bitcoin</span>
                </div>
              </div>
              <div></div>
            </div>

            {/* Comparison Rows */}
            {comparisonCategories.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[180px_1fr_80px_1fr_80px] gap-4 py-6 border-t border-border/50 items-center ${
                  item.category === "COIN CAP" ? "bg-primary/5 -mx-4 px-4 rounded-lg" : ""
                }`}
              >
                <div className="font-bold text-primary">{item.category}</div>
                <div className="text-sm text-muted-foreground">{item.decredFeature}</div>
                <div className="flex justify-center">
                  {renderIcon(item.decredStatus)}
                </div>
                <div className="text-sm text-muted-foreground">{item.bitcoinFeature}</div>
                <div className="flex justify-center">
                  {renderIcon(item.bitcoinStatus)}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Strong Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Partial Support</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-sm text-muted-foreground">Weak/Not Available</span>
            </div>
          </div>
        </Card>

        {/* Key Insight */}
        <Card className="mt-12 p-8 bg-primary/5 border-primary/30 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Decred Advantage</h3>
            <p className="text-muted-foreground">
              Decred takes Bitcoin&apos;s proven security model and adds critical missing pieces: formal governance, 
              sustainable funding, enhanced security through hybrid consensus, and optional privacy. 
              While maintaining the same 21M supply cap, Decred evolves the cryptocurrency design for{" "}
              <span className="font-semibold text-foreground">long-term sustainability and stakeholder control</span>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DecredVsBitcoinChart;
