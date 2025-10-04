const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Striking diagonal lines - more visible */}
      <div className="absolute top-[15%] left-[5%] w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45" />
      <div className="absolute top-[25%] right-[10%] w-[500px] h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent -rotate-45" />
      <div className="absolute top-[70%] right-[20%] w-[700px] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -rotate-12" />
      <div className="absolute bottom-[25%] left-[15%] w-[450px] h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent rotate-25" />
      <div className="absolute top-[50%] left-[40%] w-[350px] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-60" />
      
      {/* Vertical tech lines */}
      <div className="absolute top-[10%] left-[25%] w-[2px] h-[400px] bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
      <div className="absolute top-[30%] right-[30%] w-[2px] h-[500px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-[10%] left-[60%] w-[2px] h-[350px] bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
      
      {/* Tech blocks and rectangles */}
      <div className="absolute top-[20%] right-[15%] w-40 h-40 border-2 border-primary/20 rotate-12 animate-glow-pulse" />
      <div className="absolute bottom-[30%] left-[10%] w-32 h-32 border-2 border-primary/15 -rotate-12" />
      <div className="absolute top-[60%] right-[40%] w-28 h-28 border border-primary/20 rotate-45" />
      <div className="absolute bottom-[15%] right-[25%] w-36 h-36 border border-primary/15 -rotate-6" />
      <div className="absolute top-[40%] left-[35%] w-24 h-24 border-2 border-primary/20 rotate-30" />
      
      {/* Grid patterns */}
      <div className="absolute top-[35%] right-[8%] w-48 h-48 opacity-20">
        <div className="grid grid-cols-4 gap-3 h-full">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-primary/30" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[40%] left-[5%] w-40 h-40 opacity-15 rotate-12">
        <div className="grid grid-cols-3 gap-4 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-primary/30" />
          ))}
        </div>
      </div>
      
      {/* Particle dots - more visible */}
      <div className="absolute top-[12%] left-[45%] w-3 h-3 bg-primary/40 rounded-full animate-glow-pulse" />
      <div className="absolute top-[18%] left-[48%] w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute bottom-[35%] left-[22%] w-3 h-3 bg-primary/40 rounded-full" />
      <div className="absolute bottom-[38%] left-[26%] w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute top-[75%] right-[32%] w-3 h-3 bg-primary/40 rounded-full animate-glow-pulse" />
      <div className="absolute top-[78%] right-[36%] w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute top-[45%] right-[18%] w-2 h-2 bg-primary/35 rounded-full" />
      <div className="absolute bottom-[20%] left-[55%] w-3 h-3 bg-primary/40 rounded-full" />
      <div className="absolute top-[55%] left-[15%] w-2 h-2 bg-primary/30 rounded-full" />
      
      {/* Corner accent blocks */}
      <div className="absolute top-[8%] left-[8%] w-20 h-20 border-l-2 border-t-2 border-primary/25" />
      <div className="absolute top-[8%] right-[8%] w-20 h-20 border-r-2 border-t-2 border-primary/25" />
      <div className="absolute bottom-[8%] left-[8%] w-20 h-20 border-l-2 border-b-2 border-primary/25" />
      <div className="absolute bottom-[8%] right-[8%] w-20 h-20 border-r-2 border-b-2 border-primary/25" />
      
      {/* Glowing orbs - subtle */}
      <div className="absolute top-[25%] left-[30%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-[30%] right-[20%] w-[450px] h-[450px] bg-primary/8 rounded-full blur-[140px]" />
    </div>
  );
};

export default BackgroundShapes;
