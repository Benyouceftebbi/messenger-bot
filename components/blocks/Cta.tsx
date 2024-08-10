
"use client"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
export const Cta = () => {
  const router =useRouter()
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
          Gérez Vos 
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Commandes et Clients {" "}
            </span>
            dans une Seule Interface
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Automatisez la récupération des commandes, générez des factures et ciblez efficacement les clients potentiels depuis les réseaux sociaux.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Demandez une Démo</Button>
          <Button
          onClick={()=>router.push('#features')}
            variant="outline"
            className="w-full md:w-auto"
          >
            les fonctionnalités
          </Button>
        </div>
      </div>
    </section>
  );
};
