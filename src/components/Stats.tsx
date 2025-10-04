const stats = [
  { value: "99.99%", label: "Uptime Since 2016" },
  { value: "21M", label: "Max Supply" },
  { value: "60%", label: "Staked Supply" },
  { value: "$2B+", label: "Market Cap" }
];

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
