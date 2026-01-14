import { useEffect, useState } from "react";

interface StatsData {
  supplyMined: number | null;
  supplyStaked: number | null;
  treasury: number | null;
  loading: boolean;
  error: string | null;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toLocaleString();
};

const LiveStats = () => {
  const [stats, setStats] = useState<StatsData>({
    supplyMined: null,
    supplyStaked: null,
    treasury: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch all data in parallel
        const [supplyRes, stakePoolRes, treasuryRes] = await Promise.all([
          fetch("https://dcrdata.decred.org/api/supply/circulating?dcr=true"),
          fetch("https://dcrdata.decred.org/api/stake/pool"),
          fetch("https://dcrdata.decred.org/api/treasury/balance"),
        ]);

        if (!supplyRes.ok || !stakePoolRes.ok || !treasuryRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const supplyMined = await supplyRes.json();
        const stakePool = await stakePoolRes.json();
        const treasury = await treasuryRes.json();

        setStats({
          supplyMined: supplyMined,
          supplyStaked: stakePool.value,
          treasury: treasury.balance / 100000000, // Convert from atoms to DCR
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load live data",
        }));
      }
    };

    fetchStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const MAX_SUPPLY = 21000000;

  const statsItems = [
    {
      label: "Supply Mined",
      sublabel: "(21M Max)",
      value: stats.supplyMined,
      suffix: " DCR",
      percentage: stats.supplyMined ? ((stats.supplyMined / MAX_SUPPLY) * 100).toFixed(1) + "% of max supply" : null,
    },
    {
      label: "Supply Staked",
      value: stats.supplyStaked,
      suffix: " DCR",
      percentage: stats.supplyStaked && stats.supplyMined ? ((stats.supplyStaked / stats.supplyMined) * 100).toFixed(1) + "% of circulating" : null,
    },
    {
      label: "Treasury",
      value: stats.treasury,
      suffix: " DCR",
      percentage: stats.treasury && stats.supplyMined ? ((stats.treasury / stats.supplyMined) * 100).toFixed(2) + "% of circulating" : null,
    },
  ];

  if (stats.error) {
    return null; // Silently fail - don't show broken stats
  }

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">Quick Stats</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {statsItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stats.loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : stat.value !== null ? (
                  formatNumber(stat.value) + stat.suffix
                ) : (
                  "—"
                )}
              </div>
              {stat.percentage && !stats.loading && (
                <div className="text-sm text-primary/70 mb-1">
                  {stat.percentage}
                </div>
              )}
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
                {stat.sublabel && (
                  <span className="text-xs text-muted-foreground/70 ml-1">{stat.sublabel}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual separator */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
