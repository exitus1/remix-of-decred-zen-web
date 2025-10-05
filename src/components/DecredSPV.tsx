import { Shield, Server, Smartphone, CheckCircle2, XCircle, Zap } from "lucide-react";
import { Card } from "./ui/card";
import cakeWalletSymbol from "@/assets/cw-dark.webp";
import decredIcon from "@/assets/decred-icon-2.jpg";
const DecredSPV = () => {
  return <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <img src={cakeWalletSymbol} alt="Cake Wallet" className="h-24 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Most crypto users unknowingly rely on centralized services for syncing.</p>
          <p className="text-xl text-primary max-w-3xl mx-auto">Decred's syncing process is different.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Centralized Services */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/30 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-12 h-12 text-destructive" />
              <h3 className="text-2xl font-bold text-destructive">Centralized Services</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Trust Required</p>
                  <p className="text-sm text-muted-foreground">You must trust the service provider</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Privacy Risk</p>
                  <p className="text-sm text-muted-foreground">Your addresses and balance are exposed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Single Point of Failure</p>
                  <p className="text-sm text-muted-foreground">Service downtime affects your access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Censorship Risk</p>
                  <p className="text-sm text-muted-foreground">Provider can block your transactions</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-destructive/10 rounded-lg border border-destructive/20">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Your Wallet</p>
                <div className="my-4 h-1 w-full bg-gradient-to-r from-destructive/50 to-destructive" />
                <Server className="w-12 h-12 text-destructive mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Centralized Server</p>
                <p className="text-xs text-destructive mt-2 font-semibold">All your data passes through them</p>
              </div>
            </div>
          </Card>

          {/* Decred SPV */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 glow-primary animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <img src={decredIcon} alt="Decred" className="w-12 h-12 rounded" />
              <h3 className="text-2xl font-bold gradient-text">Decred SPV</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Trustless Verification</p>
                  <p className="text-sm text-muted-foreground">Verify directly from the blockchain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Full Privacy</p>
                  <p className="text-sm text-muted-foreground">No third party sees your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Decentralized Network</p>
                  <p className="text-sm text-muted-foreground">Connect to multiple peers directly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Censorship Resistant</p>
                  <p className="text-sm text-muted-foreground">No one can block your access</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Your Wallet</p>
                <div className="my-4 flex items-center justify-center gap-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary/50 to-primary" />
                  <Zap className="w-5 h-5 text-primary" />
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <img src={decredIcon} alt="Decred Peer" className="w-8 h-8 rounded mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Peer</p>
                  </div>
                  <div className="text-center">
                    <img src={decredIcon} alt="Decred Peer" className="w-8 h-8 rounded mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Peer</p>
                  </div>
                  <div className="text-center">
                    <img src={decredIcon} alt="Decred Peer" className="w-8 h-8 rounded mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Peer</p>
                  </div>
                </div>
                <p className="text-xs text-primary mt-2 font-semibold">Direct peer-to-peer verification</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Efficiency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center hover-glow">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold gradient-text mb-2">Super Efficient</h4>
            <p className="text-sm text-muted-foreground">
              Lightweight client requires minimal data download
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center hover-glow">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold gradient-text mb-2">Fully Secure</h4>
            <p className="text-sm text-muted-foreground">
              Cryptographic verification of all transactions
            </p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm text-center hover-glow">
            <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-3xl font-bold gradient-text mb-2">Mobile Ready</h4>
            <p className="text-sm text-muted-foreground">
              Perfect for mobile wallets without compromising security
            </p>
          </Card>
        </div>
      </div>
    </section>;
};
export default DecredSPV;