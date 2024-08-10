import { Statistics } from "./Statistics";
import pilot from "../../assets/pilot.png";
import Image from "next/image";
export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Qui{" "}
                </span>
                sommes-nous?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Clicki w Livri est une nouvelle plateforme révolutionnaire qui simplifie la gestion des commandes et des livraisons, 
              en automatisant la récupération des commandes depuis vos conversations sur Messenger,
               Instagram, WhatsApp et votre site web. Imaginez : 
               plus de saisies manuelles! Avec notre système, 
               vous créez des colis automatiquement et ciblez efficacement vos clients potentiels sur les réseaux sociaux 
               et les sites web grâce à des campagnes de reciblage personnalisées. Rejoignez-nous dès aujourd'hui et découvrez comment 
               Clicki w Livri peut propulser votre activité vers de nouveaux sommets !
              </p>
            </div>
{/* 
            <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
