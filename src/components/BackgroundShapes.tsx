const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
      {/* Large circular shapes */}
      <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] border border-primary/5 rounded-full" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] border border-primary/5 rounded-full" />
      <div className="absolute top-[60%] right-[40%] w-[400px] h-[400px] border border-primary/5 rounded-full" />
      
      {/* Diagonal lines */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-45" />
      <div className="absolute top-[70%] right-[25%] w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent -rotate-45" />
      <div className="absolute top-[45%] left-[50%] w-[250px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-12" />
      
      {/* Soft glowing orbs */}
      <div className="absolute top-[25%] left-[30%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-[50%] left-[60%] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
      
      {/* Small accent dots */}
      <div className="absolute top-[15%] left-[45%] w-2 h-2 bg-primary/20 rounded-full" />
      <div className="absolute bottom-[40%] left-[25%] w-2 h-2 bg-primary/20 rounded-full" />
      <div className="absolute top-[80%] right-[35%] w-2 h-2 bg-primary/20 rounded-full" />
      
      {/* Rectangular shapes */}
      <div className="absolute top-[40%] right-[10%] w-32 h-32 border border-primary/5 rotate-12" />
      <div className="absolute bottom-[15%] left-[40%] w-24 h-24 border border-primary/5 -rotate-12" />
    </div>
  );
};

export default BackgroundShapes;
