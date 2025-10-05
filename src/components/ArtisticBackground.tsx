const ArtisticBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Artistic gradient blocks */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-[100px] animate-pulse" />
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-primary/8 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] blur-[120px]" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-primary/6 rounded-[70%_30%_50%_50%/30%_70%_70%_30%] blur-[110px]" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-[450px] h-[450px] bg-primary/12 rounded-[50%_50%_60%_40%/70%_30%_40%_60%] blur-[130px] animate-pulse" 
           style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-primary/7 rounded-[40%_60%_50%_50%/50%_50%_60%_40%] blur-[100px]" 
           style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default ArtisticBackground;
