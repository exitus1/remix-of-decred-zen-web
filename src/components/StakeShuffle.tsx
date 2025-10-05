import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, ArrowRight, Lock } from "lucide-react";

const StakeShuffle = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            StakeShuffle Privacy Mixing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-coordinated privacy mixing that anonymizes your funds through opt-in participation
          </p>
        </div>

        {/* Visual Flow */}
        <div className="grid md:grid-cols-5 gap-6 items-center mb-16 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Peer Network</h3>
            <p className="text-sm text-muted-foreground">Decentralized coordination</p>
          </Card>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center border-primary/50">
            <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Opt-In Mixing</h3>
            <p className="text-sm text-muted-foreground">Voluntary privacy enhancement</p>
          </Card>

          <div className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center border-primary/50">
            <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="font-bold text-lg mb-2">Anonymous Funds</h3>
            <p className="text-sm text-muted-foreground">Untraceable transactions</p>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader>
              <Users className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Peer-Coordinated</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                No central coordinator needed. Privacy mixing happens directly between peers on the network.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader>
              <Shield className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Opt-In Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Users choose when to enhance their privacy. No forced participation, complete control over your funds.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
            <CardHeader>
              <Lock className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>Fund Anonymization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Breaks the link between sender and receiver, making transactions untraceable while maintaining network security.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StakeShuffle;
