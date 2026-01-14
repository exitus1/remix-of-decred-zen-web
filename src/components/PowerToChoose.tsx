import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Shield, Lock, Users } from "lucide-react";

const PowerToChoose = () => {
  const features = [
    {
      icon: Vote,
      title: "On-Chain Voting",
      description: "Direct stakeholder voting with binding on-chain results"
    },
    {
      icon: Shield,
      title: "Consensus Upgrades",
      description: "Vote to approve or reject protocol changes and network upgrades"
    },
    {
      icon: Lock,
      title: "Skin-in-the-Game Governance",
      description: "Voting power requires locked capital, aligning decisions with long-term network health"
    },
    {
      icon: Users,
      title: "Stakeholder Control",
      description: "Every ticket holder has a voice in the network's future"
    }
  ];

  return (
    <section className="pt-8 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">Coinholder Governance</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">The Power to Choose</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voting on-chain to upgrade the network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">True Coinholder Sovereignty</h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Unlike traditional cryptocurrencies where changes are decided by a small group of developers or miners, 
                Decred gives the power directly to coinholders. Through time-locked tickets, stakeholders vote on-chain 
                to approve consensus rule changes, treasury spending, and network policies. Every vote is recorded on the 
                blockchain and automatically executed—no politics, no compromises, just pure stakeholder governance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PowerToChoose;
