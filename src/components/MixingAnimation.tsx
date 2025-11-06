import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Shuffle, ArrowRight, CheckCircle } from "lucide-react";

const MixingAnimation = () => {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const participants = [
    { id: 1, color: "bg-blue-500" },
    { id: 2, color: "bg-green-500" },
    { id: 3, color: "bg-purple-500" },
    { id: 4, color: "bg-orange-500" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Watch the Mix in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Live visualization of the StakeShuffle mixing process
          </p>
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="mt-4 px-6 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors"
          >
            {isAnimating ? "Pause" : "Resume"}
          </button>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm">
          <div className="relative">
            {/* Step Indicator */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Shuffle className="w-5 h-5 text-primary" />
                <span className="font-semibold">
                  {step === 0 && "Participants Joining"}
                  {step === 1 && "Key Exchange"}
                  {step === 2 && "Shuffling Inputs"}
                  {step === 3 && "Signing Transaction"}
                  {step === 4 && "Broadcast Complete"}
                </span>
              </div>
            </div>

            {/* Animation Container */}
            <div className="relative h-80 flex items-center justify-center">
              {/* Input Side */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
                {participants.map((p, idx) => (
                  <div
                    key={`input-${p.id}`}
                    className={`flex items-center gap-3 transition-all duration-700 ${
                      step >= 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full ${p.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {p.id}
                    </div>
                    <div className="text-sm font-mono bg-background/50 px-3 py-1 rounded">
                      {(1.5 + idx * 0.3).toFixed(2)} DCR
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Mixing Box */}
              <div className="relative">
                <div
                  className={`w-40 h-40 border-4 border-primary rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    step >= 1 && step <= 3 ? "bg-primary/20 scale-110 rotate-180" : "bg-background"
                  }`}
                  style={{
                    animation: step >= 1 && step <= 3 ? "spin 3s linear infinite" : "none",
                  }}
                >
                  <Shuffle
                    className={`w-16 h-16 transition-all duration-500 ${
                      step >= 1 && step <= 3 ? "text-primary scale-125" : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Connection Lines */}
                {step >= 1 && (
                  <>
                    {participants.map((_, idx) => (
                      <div
                        key={`line-in-${idx}`}
                        className="absolute w-32 h-0.5 bg-primary/50 top-1/2 -left-32"
                        style={{
                          transform: `translateY(${(idx - 1.5) * 20}px)`,
                          animation: "pulse 2s infinite",
                          animationDelay: `${idx * 200}ms`,
                        }}
                      />
                    ))}
                    {participants.map((_, idx) => (
                      <div
                        key={`line-out-${idx}`}
                        className="absolute w-32 h-0.5 bg-primary/50 top-1/2 -right-32"
                        style={{
                          transform: `translateY(${(idx - 1.5) * 20}px)`,
                          animation: "pulse 2s infinite",
                          animationDelay: `${idx * 200}ms`,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Output Side */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4">
                {participants.map((p, idx) => {
                  const shuffledIdx = (idx + 2) % participants.length;
                  const shuffledParticipant = participants[shuffledIdx];
                  
                  return (
                    <div
                      key={`output-${p.id}`}
                      className={`flex items-center gap-3 transition-all duration-700 ${
                        step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                      }`}
                      style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                      <div className="text-sm font-mono bg-background/50 px-3 py-1 rounded">
                        {(1.5 + shuffledIdx * 0.3).toFixed(2)} DCR
                      </div>
                      <div className={`w-12 h-12 rounded-full ${shuffledParticipant.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                        ?
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Success Indicator */}
              {step === 4 && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-fade-in">
                  <div className="flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/50">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-green-500">Transaction Broadcasted!</span>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-12">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${((step + 1) / 5) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Start</span>
                <span>Complete</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Privacy Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            🔒 All participants' identities are protected through cryptographic shuffling
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default MixingAnimation;
