import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basique",
    popular: 0,
    price: 5,
    description:
      "Récupération des commandes toutes les 24 heures, génération automatique des factures, produits illimités dans l'inventaire, et plus encore.",
    buttonText: "Contactez-nous",
    benefitList: [
      "Récupération automatique des commandes toutes les 24 heures",
      "Factures automatiques",
      "Produits illimités dans l'inventaire",
      "Jusqu'à 1 business suite",
    
    ],
  },
  {
    title: "Professionnel",
    popular: 1,
    price: 10,
    description:
      "Récupération illimitée des commandes et toutes les fonctionnalités du plan Basique.",
    buttonText: "Contactez-nous",
    benefitList: [
      "Récupération illimitée des commandes",
      "Produits illimités dans l'inventaire",
      "Factures automatiques",
      "Priority support",
      "Analyses avancées des commandes",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 50,
    description:
      "Ciblez efficacement les clients potentiels et profitez de toutes les fonctionnalités des plans Basique et Professionnel, avec des options supplémentaires.",
    buttonText: "Contactez-nous",
    benefitList: [
      "Retargeting des clients potentiels",
      "Intégration CRM",
      "Rapports personnalisés",
      "Priority support",
      "Automatisation marketing",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">

        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Pricing{" "}
        </span>

      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis. */}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">DZD{pricing.price}</span>
                <span className="text-muted-foreground"> /commande</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
