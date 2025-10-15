import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Users } from "lucide-react";
import moneroLogo from "@/assets/monero-logo.png";
import decredIcon from "@/assets/decred-icon.jpg";

const MoneroComparison = () => {
  const decredStrengths = [
    "Hybrid PoW/PoS consensus for superior security",
    "On-chain governance with Politeia proposals",
    "Self-funded treasury for sustainable development",
    "Optional privacy via CoinShuffle++",
    "Stakeholder voting on protocol changes",
    "Deterministic development roadmap",
  ];

  const decredWeaknesses = [
    "Privacy not enabled by default",
    "Smaller market cap and liquidity",
    "Less widespread adoption",
  ];

  const moneroStrengths = [
    "Privacy by default with ring signatures",
    "Strong focus on fungibility",
    "Larger community and adoption",
    "Dynamic block size for scalability",
    "Tail emission for continuous mining incentives",
  ];

  const moneroWeaknesses = [
    "No formal governance system",
    "Community-funded development (donations)",
    "Proof-of-Work only consensus",
    "Larger blockchain size due to privacy features",
    "No stakeholder voting mechanism",
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Decred vs Monero
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two privacy-focused projects with a shared origin
          </p>
        </div>

        {/* Tacotime Connection */}
        <Card className="mb-12 border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <CardTitle>Shared Roots</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Both Decred and Monero share a connection through{" "}
              <span className="text-primary font-semibold">tacotime</span>, a pseudonymous 
              developer who was instrumental in the early development of both projects. 
              Tacotime co-authored Decred's initial implementation and contributed to 
              Monero's CryptoNote protocol. While both projects emerged from similar 
              privacy-focused principles, they evolved to take fundamentally different 
              approaches to cryptocurrency design and governance.
            </p>
          </CardContent>
        </Card>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Decred */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={decredIcon} 
                  alt="Decred" 
                  className="w-12 h-12 rounded-full"
                />
                <CardTitle className="text-2xl">Decred</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Strengths */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {decredStrengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Weaknesses
                </h4>
                <ul className="space-y-2">
                  {decredWeaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Monero */}
          <Card className="border-border bg-card/50 backdrop-blur animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src={moneroLogo} 
                  alt="Monero" 
                  className="w-12 h-12 rounded-full"
                />
                <CardTitle className="text-2xl">Monero</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Strengths */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {moneroStrengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Weaknesses
                </h4>
                <ul className="space-y-2">
                  {moneroWeaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Takeaway */}
        <Card className="mt-8 border-primary/20 bg-primary/5 backdrop-blur animate-fade-in">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-lg mb-2">Key Insight</h4>
            <p className="text-muted-foreground leading-relaxed">
              While Monero focuses exclusively on privacy by default, Decred takes a 
              more comprehensive approach by combining optional privacy with robust 
              governance, sustainable funding, and enhanced security through hybrid 
              consensus. Decred's stakeholder governance ensures the protocol evolves 
              through community consensus rather than informal coordination.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MoneroComparison;
