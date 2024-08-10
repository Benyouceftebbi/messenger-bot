import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Connectez vos pages",
    description:
      "Commencez par connecter vos comptes Messenger, Instagram, WhatsApp et chat sur le site web à notre plateforme.",
  },
  {
    icon: <MapIcon />,
    title: "Remplissez l'inventaire",
    description:
      "Ajoutez facilement vos produits dans l'inventaire en utilisant notre interface conviviale.",
  },
  {
    icon: <PlaneIcon />,
    title: "Récupérez toutes les commandes",
    description:
      "Utilisez notre bouton Récupérer pour obtenir instantanément toutes les commandes passées pendant la journée.",
  },
  {
    icon: <GiftIcon />,
    title: "Ciblez les clients potentiels",
    description:
      "Avec un simple bouton, retargetez tous les clients potentiels qui ont montré de l'intérêt pour vos produits.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Comment {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        ça marche : {" "}
        </span>
  
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Guide étape par étape
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
