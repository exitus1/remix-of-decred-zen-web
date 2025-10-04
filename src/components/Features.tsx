import { Shield, Vote, Coins, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Hybrid PoW/PoS Consensus",
    description: "Dual-layer security: miners propose blocks, stakeholders approve them. Checks and balances prevent centralization."
  },
  {
    icon: Lock,
    title: "StakeShuffle Privacy",
    description: "Trustless, decentralized mixing via CoinShuffle++. Financial privacy without third-party reliance."
  },
  {
    icon: Coins,
    title: "Self-Funded Treasury",
    description: "10% of block rewards fund development. Stakeholders vote on spending—sustainable, independent growth."
  },
  {
    icon: Vote,
    title: "Stakeholder Governance",
    description: "On-chain voting on consensus changes, treasury proposals, and project direction. Real power, not suggestions."
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
