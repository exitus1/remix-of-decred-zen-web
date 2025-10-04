import { Shield, Vote, Coins, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Hybrid PoW/PoS Consensus",
    description: "Unique dual-layer security combining Proof-of-Work miners with Proof-of-Stake voters. Miners propose blocks, but stakeholders must approve them—creating checks and balances that prevent centralization."
  },
  {
    icon: Lock,
    title: "StakeShuffle Privacy",
    description: "CoinShuffle++ implementation that provides trustless, decentralized mixing. Keep your transactions private without relying on third parties—sovereignty over your financial privacy."
  },
  {
    icon: Coins,
    title: "Self-Funded Treasury",
    description: "10% of block rewards fund a decentralized treasury controlled by stakeholders. No reliance on external funding—the project sustains itself and votes determine how funds are spent."
  },
  {
    icon: Vote,
    title: "Stakeholder Governance",
    description: "Ticket holders collectively govern Decred through on-chain voting. Vote on consensus changes, treasury proposals, and project direction—real power, not just suggestions."
  }
];

const Features = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Decred?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Superior security architecture, real stakeholder power, and sustainable funding—built to preserve sovereignty for generations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover-glow group"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
