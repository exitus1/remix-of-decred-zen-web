import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";
import moneroLogo from "@/assets/monero-logo.png";

const GovernanceComparison = () => {
  const features = [
    { name: "On-Chain Voting", description: "Built into protocol" },
    { name: "Binding Decisions", description: "Results are enforced" },
    { name: "Treasury Control", description: "Stakeholders approve spending" },
    { name: "Upgrade Approval", description: "Votes control hard forks" },
    { name: "No Hard Fork Wars", description: "Coordinated upgrades" },
  ];

  const cryptocurrencies = [
    {
      name: "Decred",
      icon: decredIcon,
      isImage: true,
      color: "primary",
      governance: [true, true, true, true, true],
      highlight: true,
    },
    {
      name: "Bitcoin",
      icon: "₿",
      isImage: false,
      color: "orange-500",
      governance: [false, false, false, false, false],
    },
    {
      name: "Ethereum",
      icon: "Ξ",
      isImage: false,
      color: "purple-500",
      governance: ["partial", false, false, "partial", false],
    },
    {
      name: "Monero",
      icon: moneroLogo,
      isImage: true,
      color: "orange-600",
      governance: [false, false, false, false, false],
    },
    {
      name: "Zcash",
      icon: "ⓩ",
      isImage: false,
      color: "yellow-600",
      governance: [false, false, "partial", false, false],
    },
  ];

  const renderIcon = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-6 h-6 text-green-500" />;
    } else if (value === "partial") {
      return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    }
    return <X className="w-6 h-6 text-red-500" />;
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Built-In Governance: The Decred Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While other cryptocurrencies rely on informal processes and off-chain coordination,
            Decred has governance built directly into the protocol
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm animate-fade-in overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mb-8">
              <div className="font-bold text-lg">Cryptocurrency</div>
              {features.map((feature, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-bold text-sm mb-1">{feature.name}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </div>
              ))}
            </div>

            {/* Cryptocurrency Rows */}
            {cryptocurrencies.map((crypto, cryptoIdx) => (
              <div
                key={cryptoIdx}
                className={`grid grid-cols-[200px_repeat(5,1fr)] gap-4 py-6 border-t border-border/50 items-center ${
                  crypto.highlight
                    ? "bg-primary/5 -mx-4 px-4 rounded-lg border-2 border-primary/30"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {crypto.isImage ? (
                    <img src={crypto.icon} alt={crypto.name} className="w-10 h-10 rounded-full" />
                  ) : (
                    <span className="text-3xl">{crypto.icon}</span>
                  )}
                  <div>
                    <div className="font-bold text-lg">{crypto.name}</div>
                    {crypto.highlight && (
                      <Badge className="mt-1 bg-primary text-primary-foreground text-xs">
                        Full Governance
                      </Badge>
                    )}
                  </div>
                </div>
                {crypto.governance.map((value, featureIdx) => (
                  <div key={featureIdx} className="flex justify-center">
                    {renderIcon(value)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Full Support</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Partial/Informal</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-sm text-muted-foreground">Not Available</span>
            </div>
          </div>
        </Card>

        {/* Key Insight */}
        <Card className="mt-12 p-8 bg-primary/5 border-primary/30 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
            <p className="text-muted-foreground">
              Without formal governance, other cryptocurrencies face contentious hard forks, community splits,
              and unclear upgrade paths. Decred's stakeholder voting ensures{" "}
              <span className="font-semibold text-foreground">coordinated, legitimate upgrades</span> without
              risking network splits or governance crises.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GovernanceComparison;
