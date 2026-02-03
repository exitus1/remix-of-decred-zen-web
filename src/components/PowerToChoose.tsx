import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Vote, Shield, Lock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const PowerToChoose = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Vote,
      titleKey: "about.governance.features.onChainVoting.title",
      descriptionKey: "about.governance.features.onChainVoting.description"
    },
    {
      icon: Shield,
      titleKey: "about.governance.features.consensusUpgrades.title",
      descriptionKey: "about.governance.features.consensusUpgrades.description"
    },
    {
      icon: Lock,
      titleKey: "about.governance.features.skinInTheGame.title",
      descriptionKey: "about.governance.features.skinInTheGame.description"
    },
    {
      icon: Users,
      titleKey: "about.governance.features.stakeholderControl.title",
      descriptionKey: "about.governance.features.stakeholderControl.description"
    }
  ];

  const renderTitle = () => {
    const title = t('about.governance.title');
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
    <section className="pt-8 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-3 tracking-wide uppercase">{t('about.governance.sectionLabel')}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {renderTitle()}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('about.governance.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-card/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('about.governance.sovereignty.title')}</h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                {t('about.governance.sovereignty.description')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PowerToChoose;