import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Shuffle } from "lucide-react";

const MixingAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Define mixing nodes in a network layout
  const mixNodes = [
    { id: 1, x: 25, y: 20 },
    { id: 2, x: 50, y: 10 },
    { id: 3, x: 75, y: 20 },
    { id: 4, x: 25, y: 50 },
    { id: 5, x: 50, y: 50 },
    { id: 6, x: 75, y: 50 },
    { id: 7, x: 25, y: 80 },
    { id: 8, x: 50, y: 90 },
    { id: 9, x: 75, y: 80 },
  ];

  // Transaction particles that flow through the network
  const [particles] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      color: ["hsl(var(--primary))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"][i % 4],
      delay: i * 0.8,
    }))
  );

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Mixnet Visualization
          </h2>
          <p className="text-muted-foreground text-lg">
            Transactions flowing through the decentralized mixing network
          </p>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="mt-4 px-6 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
          >
            {isAnimating ? "Pause" : "Resume"}
          </button>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="relative h-[500px]">
            {/* Mixing Nodes */}
            {mixNodes.map((node) => (
              <div
                key={node.id}
                className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="w-full h-full rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center backdrop-blur-sm">
                  <Shuffle className="w-8 h-8 text-primary animate-pulse" />
                </div>
                {/* Node glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: `${node.id * 0.2}s` }} />
              </div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Horizontal connections */}
              <line x1="25%" y1="20%" x2="50%" y2="10%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="10%" x2="75%" y2="20%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="25%" y1="80%" x2="50%" y2="90%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="90%" x2="75%" y2="80%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              
              {/* Vertical connections */}
              <line x1="25%" y1="20%" x2="25%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="25%" y1="50%" x2="25%" y2="80%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="10%" x2="50%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="75%" y1="20%" x2="75%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="75%" y1="50%" x2="75%" y2="80%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              
              {/* Diagonal connections */}
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="hsl(var(--primary) / 0.2)" strokeWidth="2" />
            </svg>

            {/* Animated Transaction Particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}`,
                  animation: isAnimating ? `flow-${particle.id % 4} 6s linear infinite` : "none",
                  animationDelay: `${particle.delay}s`,
                  zIndex: 10,
                }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--primary))" }} />
              <span>Transaction Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <Shuffle className="w-4 h-4 text-primary" />
              <span>Mixing Node</span>
            </div>
          </div>
        </Card>

        {/* Privacy Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            🔒 Each transaction is mixed through multiple nodes, breaking the link between sender and receiver
          </p>
        </div>
      </div>

      <style>{`
        @keyframes flow-0 {
          0% { left: 0%; top: 20%; opacity: 0; }
          5% { opacity: 1; }
          15% { left: 25%; top: 20%; }
          30% { left: 25%; top: 50%; }
          45% { left: 50%; top: 50%; }
          60% { left: 75%; top: 50%; }
          75% { left: 75%; top: 80%; }
          90% { left: 100%; top: 80%; }
          95% { opacity: 1; }
          100% { left: 100%; top: 80%; opacity: 0; }
        }
        
        @keyframes flow-1 {
          0% { left: 0%; top: 50%; opacity: 0; }
          5% { opacity: 1; }
          15% { left: 25%; top: 50%; }
          30% { left: 50%; top: 10%; }
          45% { left: 75%; top: 20%; }
          60% { left: 75%; top: 50%; }
          75% { left: 50%; top: 90%; }
          90% { left: 100%; top: 90%; }
          95% { opacity: 1; }
          100% { left: 100%; top: 90%; opacity: 0; }
        }
        
        @keyframes flow-2 {
          0% { left: 0%; top: 80%; opacity: 0; }
          5% { opacity: 1; }
          15% { left: 25%; top: 80%; }
          30% { left: 50%; top: 50%; }
          45% { left: 75%; top: 80%; }
          60% { left: 75%; top: 50%; }
          75% { left: 50%; top: 10%; }
          90% { left: 100%; top: 10%; }
          95% { opacity: 1; }
          100% { left: 100%; top: 10%; opacity: 0; }
        }
        
        @keyframes flow-3 {
          0% { left: 0%; top: 10%; opacity: 0; }
          5% { opacity: 1; }
          15% { left: 25%; top: 20%; }
          30% { left: 50%; top: 50%; }
          45% { left: 25%; top: 80%; }
          60% { left: 50%; top: 90%; }
          75% { left: 75%; top: 80%; }
          90% { left: 100%; top: 50%; }
          95% { opacity: 1; }
          100% { left: 100%; top: 50%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default MixingAnimation;
