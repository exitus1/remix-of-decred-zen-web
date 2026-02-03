import { ArrowRight, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import bitcoinIcon from "@/assets/bitcoin-logo-round.png";
import decredIcon from "@/assets/decred-icon.jpg";
import { useTranslation } from "react-i18next";

const DecredEvolution = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.evolution.title').split('<gradient>')[0]}
            <span className="gradient-text">
              {t('about.evolution.title').split('<gradient>')[1]?.split('</gradient>')[0]}
            </span>
            {t('about.evolution.title').split('</gradient>')[1] || ''}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.evolution.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            {/* Bitcoin */}
            <Card className="p-6 md:p-10 bg-card border-border w-full md:w-80">
              <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                <img src={bitcoinIcon} alt="Bitcoin" className="w-10 h-10 rounded-full" />
                <h3 className="text-xl md:text-2xl font-bold">Bitcoin</h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{t('about.evolution.bitcoin.powSecurity')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{t('about.evolution.bitcoin.supplyCap')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{t('about.evolution.bitcoin.decentralized')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{t('about.evolution.bitcoin.noGovernance')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{t('about.evolution.bitcoin.outsideFunding')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{t('about.evolution.bitcoin.minerOnly')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">{t('about.evolution.bitcoin.noPrivacy')}</span>
                </div>
              </div>
            </Card>

            {/* Arrow */}
            <div className="flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-primary rotate-90 md:rotate-0" />
            </div>

            {/* Decred */}
            <Card className="p-6 md:p-10 bg-card border-primary/50 hover-glow w-full md:w-80">
              <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                <img src={decredIcon} alt="Decred" className="w-10 h-10 rounded-full" />
                <h3 className="text-xl md:text-2xl font-bold text-primary">Decred</h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.hybridSecurity')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.supplyCap')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.decentralized')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.onChainGovernance')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.selfFunded')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.stakeholderConsensus')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{t('about.evolution.decred.privacyMixnet')}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Innovations */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card 
              className="p-6 bg-card/50 border-primary/20 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h4 className="font-bold mb-2 text-primary">{t('about.evolution.innovations.governance.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('about.evolution.innovations.governance.description')}
              </p>
            </Card>
            <Card 
              className="p-6 bg-card/50 border-primary/20 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h4 className="font-bold mb-2 text-primary">{t('about.evolution.innovations.security.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('about.evolution.innovations.security.description')}
              </p>
            </Card>
            <Card 
              className="p-6 bg-card/50 border-primary/20 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById('privacy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h4 className="font-bold mb-2 text-primary">{t('about.evolution.innovations.privacy.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('about.evolution.innovations.privacy.description')}
              </p>
            </Card>
            <Card 
              className="p-6 bg-card/50 border-primary/20 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById('funding')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <h4 className="font-bold mb-2 text-primary">{t('about.evolution.innovations.funding.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('about.evolution.innovations.funding.description')}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecredEvolution;