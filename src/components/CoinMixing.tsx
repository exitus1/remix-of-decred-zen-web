import { Card } from "@/components/ui/card";
import { Shield, Lock, FileText, EyeOff, Shuffle, Eye } from "lucide-react";
import decredIcon from "@/assets/decred-icon.jpg";
import { useTranslation } from "react-i18next";

const CoinMixing = () => {
  const { t } = useTranslation();

  const renderTitle = () => {
    const title = t('about.privacy.title');
    const parts = title.split(/<gradient>|<\/gradient>/);
    if (parts.length === 3) {
      return (
        <>
          <span className="gradient-text">{parts[1]}</span>{parts[2]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">{t('about.privacy.sectionLabel')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 justify-center">
            <img src={decredIcon} alt="Decred" className="w-10 h-10 rounded-full" />
            <span>{renderTitle()}</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            {t('about.privacy.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary font-semibold">
                {t('about.privacy.badges.noTrustedSetup')}
              </span>
            </div>
            <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary font-semibold">
                {t('about.privacy.badges.supplyMixed')}
              </span>
            </div>
            <div className="px-6 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary font-semibold">
                {t('about.privacy.badges.auditable')}
              </span>
            </div>
          </div>
        </div>

        {/* 5-Step Flow Diagram */}
        <div className="mb-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1: Initiate */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{t('about.privacy.steps.initiate.title')}</h3>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> A: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> B: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-primary">•</span> C: 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('about.privacy.steps.initiate.description')}
                </p>
              </div>
            </Card>

            {/* Step 2: Key Exchange */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{t('about.privacy.steps.keyExchange.title')}</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-3 border border-primary/30">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">{t('about.privacy.steps.keyExchange.ephemeralKeys')}</p>
                  <p className="text-xs text-muted-foreground text-center">{t('about.privacy.steps.keyExchange.tempKeys')}</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('about.privacy.steps.keyExchange.description')}
                </p>
              </div>
            </Card>

            {/* Step 3: Shuffle */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{t('about.privacy.steps.shuffle.title')}</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="relative w-16 h-16 mb-3">
                    <div className="absolute inset-0 rounded-lg bg-primary/30 blur-sm animate-glow-pulse"></div>
                    <div className="relative w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center border border-primary">
                      <Shuffle className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">{t('about.privacy.steps.shuffle.mixing')}</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('about.privacy.steps.shuffle.description')}
                </p>
              </div>
            </Card>

            {/* Step 4: Sign */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{t('about.privacy.steps.sign.title')}</h3>
                
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mb-3 border border-primary/30">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">{t('about.privacy.steps.sign.coinJoin')}</p>
                  <p className="text-xs text-muted-foreground text-center mb-1">{t('about.privacy.steps.sign.allSign')}</p>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('about.privacy.steps.sign.description')}
                </p>
              </div>
            </Card>

            {/* Step 5: Broadcast */}
            <Card className="p-6 bg-green-500/10 backdrop-blur-sm border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 mx-auto">
                  <EyeOff className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center">{t('about.privacy.steps.broadcast.title')}</h3>
                
                <div className="text-center mb-3">
                  <p className="text-sm font-semibold text-green-500 flex items-center gap-1.5 justify-center">
                    {t('about.privacy.steps.broadcast.mixed')}
                  </p>
                </div>
                
                <div className="space-y-2 mb-4 flex-grow">
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                  <div className="px-3 py-2 rounded bg-green-500/10 border border-green-500/20">
                    <p className="text-sm flex items-center gap-1.5"><span className="text-green-500">•</span> ??? 10 DCR <img src={decredIcon} alt="DCR" className="w-4 h-4 rounded-full" /></p>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  {t('about.privacy.steps.broadcast.description')}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.privacy.features.noTrustedSetup.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.privacy.features.noTrustedSetup.description')}
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.privacy.features.auditable.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.privacy.features.auditable.description')}
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover-scale">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('about.privacy.features.prunable.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.privacy.features.prunable.description')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoinMixing;