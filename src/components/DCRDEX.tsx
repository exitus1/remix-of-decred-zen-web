import { ArrowLeftRight, Shield, AlertTriangle, Lock, Unlock, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import decredIcon from "@/assets/decred-icon.jpg";
import usdcLogo from "@/assets/usdc-logo.png";

const DCRDEX = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            DCRDEX: True Peer-to-Peer Trading
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atomic swaps enable direct peer-to-peer cryptocurrency trading without custodians, intermediaries, or counterparty risk.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-primary">
            <CheckCircle2 className="w-6 h-6" />
            <span className="text-xl font-semibold">Full USDC Support</span>
            <img src={usdcLogo} alt="USDC" className="w-8 h-8" />
          </div>
        </div>

        {/* Comparison Infographic */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Centralized Exchange */}
          <Card className="border-2 border-destructive/50 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-destructive/20">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Centralized Exchanges</CardTitle>
              </div>
              <CardDescription className="text-base">You trust them with your funds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flow diagram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Deposit Your Coins</p>
                    <p className="text-sm text-muted-foreground">You lose custody</p>
                  </div>
                  <Lock className="w-6 h-6 text-destructive" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Trust the Exchange</p>
                    <p className="text-sm text-muted-foreground">They control your funds</p>
                  </div>
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Hope to Withdraw</p>
                    <p className="text-sm text-muted-foreground">If they allow it...</p>
                  </div>
                  <Lock className="w-6 h-6 text-destructive" />
                </div>
              </div>

              {/* Risks */}
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                <h4 className="font-bold mb-2 text-destructive flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Common Risks
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Exchange hacks and theft (FTX, Mt. Gox, etc.)</li>
                  <li>• Frozen accounts and withdrawals</li>
                  <li>• KYC surveillance and data breaches</li>
                  <li>• Insolvency and mismanagement</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* DCRDEX Atomic Swaps */}
          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">DCRDEX Atomic Swaps</CardTitle>
              </div>
              <CardDescription className="text-base">You keep your funds secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Flow diagram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Connect Directly</p>
                    <p className="text-sm text-muted-foreground">Peer-to-peer matching</p>
                  </div>
                  <Users className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Atomic Swap Execute</p>
                    <p className="text-sm text-muted-foreground">Cryptographic guarantee</p>
                  </div>
                  <ArrowLeftRight className="w-6 h-6 text-primary" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Instant Settlement</p>
                    <p className="text-sm text-muted-foreground">Direct to your wallet</p>
                  </div>
                  <Unlock className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Benefits */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <h4 className="font-bold mb-2 text-primary flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Key Benefits
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• No custody - you always control your keys</li>
                  <li>• No counterparty risk or trust required</li>
                  <li>• No KYC - complete privacy</li>
                  <li>• No exchange can steal or freeze funds</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Atomic Swap Visual Example */}
        <Card className="bg-card/50 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How an Atomic Swap Works</CardTitle>
            <CardDescription className="text-center text-base">
              Example: Trading DCR for USDC directly between peers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Alice */}
              <div className="text-center space-y-4">
                <div className="inline-block p-6 rounded-full bg-primary/10 border-2 border-primary">
                  <img src={decredIcon} alt="Decred" className="w-16 h-16 rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-lg">Alice</p>
                  <p className="text-sm text-muted-foreground">Has DCR</p>
                  <p className="text-sm text-muted-foreground">Wants USDC</p>
                </div>
              </div>

              {/* Swap Process */}
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <ArrowLeftRight className="w-12 h-12 text-primary animate-pulse" />
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center space-y-2">
                  <p className="font-bold text-sm">Atomic Swap Contract</p>
                  <p className="text-xs text-muted-foreground">
                    Either both trades complete, or neither does. No middleman needed.
                  </p>
                  <div className="pt-2">
                    <Shield className="w-6 h-6 mx-auto text-primary" />
                    <p className="text-xs font-semibold text-primary mt-1">Trustless</p>
                  </div>
                </div>
              </div>

              {/* Bob */}
              <div className="text-center space-y-4">
                <div className="inline-block p-6 rounded-full bg-primary/10 border-2 border-primary">
                  <img src={usdcLogo} alt="USDC" className="w-16 h-16" />
                </div>
                <div>
                  <p className="font-bold text-lg">Bob</p>
                  <p className="text-sm text-muted-foreground">Has USDC</p>
                  <p className="text-sm text-muted-foreground">Wants DCR</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <p className="text-lg font-semibold mb-2">Result: Both parties get what they want</p>
              <p className="text-muted-foreground">
                No exchange custody. No theft risk. No frozen accounts. Just pure peer-to-peer trading.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center hover-glow">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold mb-2">0</p>
              <p className="text-sm text-muted-foreground">Custody of Your Funds</p>
              <p className="text-xs text-muted-foreground mt-2">You always hold the keys</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-glow">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold mb-2">P2P</p>
              <p className="text-sm text-muted-foreground">Direct Peer Trading</p>
              <p className="text-xs text-muted-foreground mt-2">No intermediaries</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-glow">
            <CardContent className="pt-6">
              <Unlock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold mb-2">∞</p>
              <p className="text-sm text-muted-foreground">No KYC Required</p>
              <p className="text-xs text-muted-foreground mt-2">Complete privacy</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DCRDEX;
