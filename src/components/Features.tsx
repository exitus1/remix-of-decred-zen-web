import { Shield, Users, Zap, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Hybrid PoW/PoS",
    description: "Combines the security of Proof-of-Work with the governance of Proof-of-Stake for unparalleled protection."
  },
  {
    icon: Users,
    title: "Community Governed",
    description: "Stakeholders vote on consensus rule changes and project treasury spending through Politeia."
  },
  {
    icon: Zap,
    title: "Lightning Network",
    description: "Instant, low-fee transactions with the Lightning Network integration for seamless payments."
  },
  {
    icon: Lock,
    title: "Self-Custodial",
    description: "True ownership with non-custodial wallets. Your keys, your coins, your control."
  }
];

const Features = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Decred combines innovation with security to deliver a cryptocurrency designed to last.
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
