import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArtisticBackground from "@/components/ArtisticBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, MessageCircle, Send, Hash, Users } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import discordLogo from "@/assets/discord-logo.webp";
import xLogo from "@/assets/x-logo.png";
import elementLogo from "@/assets/element-logo.svg";
import redditLogo from "@/assets/reddit-logo.png";
import politeiaIcon from "@/assets/politeia-icon.svg";
import decreditonLogo from "@/assets/decrediton-logo.svg";
import bisonRelayLogo from "@/assets/bison-relay-logo.png";

const Community = () => {
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      nameKey: "community.platforms.xTwitter.name",
      descriptionKey: "community.platforms.xTwitter.description",
      icon: Hash,
      logo: xLogo,
      link: "https://x.com/decredproject",
      color: "text-blue-400",
    },
    {
      nameKey: "community.platforms.matrix.name",
      descriptionKey: "community.platforms.matrix.description",
      icon: MessageCircle,
      logo: elementLogo,
      link: "https://chat.decred.org/",
      color: "text-green-400",
    },
    {
      nameKey: "community.platforms.github.name",
      descriptionKey: "community.platforms.github.description",
      icon: Github,
      link: "https://github.com/decred",
      color: "text-foreground",
    },
    {
      nameKey: "community.platforms.telegram.name",
      descriptionKey: "community.platforms.telegram.description",
      icon: Send,
      link: "https://t.me/decred",
      color: "text-blue-500",
    },
    {
      nameKey: "community.platforms.discord.name",
      descriptionKey: "community.platforms.discord.description",
      icon: Users,
      logo: discordLogo,
      link: "https://discord.gg/JvhGDE4gZH",
      color: "text-indigo-400",
    },
    {
      nameKey: "community.platforms.reddit.name",
      descriptionKey: "community.platforms.reddit.description",
      icon: MessageCircle,
      logo: redditLogo,
      link: "https://reddit.com/r/decred",
      color: "text-orange-500",
    },
  ];

  const governancePlatforms = [
    {
      nameKey: "community.governancePlatforms.votingDashboard.name",
      descriptionKey: "community.governancePlatforms.votingDashboard.description",
      icon: null,
      logo: decreditonLogo,
      link: "https://voting.decred.org/",
      color: "text-primary",
    },
    {
      nameKey: "community.governancePlatforms.proposals.name",
      descriptionKey: "community.governancePlatforms.proposals.description",
      icon: null,
      logo: politeiaIcon,
      link: "https://proposals.decred.org/",
      color: "text-accent",
    },
    {
      nameKey: "community.governancePlatforms.bisonRelay.name",
      descriptionKey: "community.governancePlatforms.bisonRelay.description",
      icon: null,
      logo: bisonRelayLogo,
      link: "https://bisonrelay.org/",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <ArtisticBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              {t('community.title')}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              <Trans i18nKey="community.subtitle" components={{ dcr: <span className="text-primary font-semibold" /> }} />
            </p>
          </div>

          {/* Social Media Platforms */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('community.socialMedia')}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {socialPlatforms.map((platform) => (
                <Card key={platform.nameKey} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                          {platform.logo ? (
                            <img 
                              src={platform.logo} 
                              alt={t(platform.nameKey)}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          ) : (
                            <platform.icon className={`w-5 h-5 ${platform.color}`} />
                          )}
                        </div>
                        <CardTitle className="text-lg">{t(platform.nameKey)}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <CardDescription className="text-sm mb-3">
                      {t(platform.descriptionKey)}
                    </CardDescription>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center py-1.5 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      {t('community.visit')}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Governance & Communication */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('community.governance')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {governancePlatforms.map((platform) => {
                const name = t(platform.nameKey);
                return (
                  <Card key={platform.nameKey} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center">
                          {platform.logo ? (
                            <img 
                              src={platform.logo} 
                              alt={name}
                              className={`object-contain ${platform.nameKey.includes("votingDashboard") || platform.nameKey.includes("bisonRelay") ? "w-12 h-12" : "w-8 h-8"}`}
                            />
                          ) : platform.icon ? (
                            <platform.icon className={`w-6 h-6 ${platform.color}`} />
                          ) : null}
                        </div>
                        <CardTitle className="text-xl">{name}</CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {t(platform.descriptionKey)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        {t('community.visit')}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
