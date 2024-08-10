import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../../assets/cube-leg.png";
import Image from "next/image";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Récupération Automatique des Commandes",
    description:
      "Clicki w Livri automatise la récupération des commandes à partir des chats des médias sociaux, garantissant un traitement fluide et efficace.",
    icon: <ChartIcon />,
  },
  {
    title: "Génération de Factures avec Suivi",
    description:
      "Générez facilement des factures avec des identifiants de suivi, offrant transparence et facilité de suivi pour vos clients.",
    icon: <WalletIcon />,
  },
  {
    title: "Retargeting des Clients sur les Médias Sociaux",
    description:
      "Retargetez efficacement les clients potentiels depuis les médias sociaux, maximisant l'engagement et les taux de conversion pour votre entreprise.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Services Centrés {" "}
            </span>
            sur le Client
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          Chez Clicki w Livri, nous plaçons vos besoins au cœur de notre service. Nous nous engageons à fournir une expérience utilisateur exceptionnelle, en facilitant la gestion des commandes et en optimisant vos processus opérationnels
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
