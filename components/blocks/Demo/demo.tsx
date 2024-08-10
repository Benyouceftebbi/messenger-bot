
"use client"
import Link from "next/link"
import { Package2Icon} from "../Icons"
import { Card,} from "@/components/ui/card"
import OrderDetails from "./OrderDetails"
import { useState } from "react"
import Chat from "./Chat"
import { Message } from "@/types/messages"
export const Demo = () => {
  const [messages, setMessages] = useState<Message[]>( [
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 4, 2024, 2:52 AM",
      message: "Salam .. le prix svp",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 4, 2024, 2:52 AM",
      message: "Bonjour, merci de nous avoir contactés. Nous avons reçu votre message et apprécions votre prise de contact.",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 4, 2024, 2:52 AM",
      message: "https://firebasestorage.googleapis.com/v0/b/chatbot-test-425613.appspot.com/o/SabyAnge%2FWhatsApp%20Image%202024-06-17%20at%2016.55.52_fcec52c1.jpg?alt=media&token=9fa77a84-3697-4def-ac03-b880d224bcd6",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 4, 2024, 3:46 AM",
      message: "2650 DA",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 4, 2024, 3:53 AM",
      message: "A aimé un message",
      bgColor: "#55efc4"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 6:03 AM",
      message: "W la livraison l biskra ch7al svp ?! W es que tel7a9ni 9bal l3id",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 6:36 AM",
      message: "700 Da",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 6:37 AM",
      message: "Oui bien sûr",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 6:39 AM",
      message: "je vais commander une ... La taille : 3 a 6 mois La couleur : comme la photo Le nom : saada majd L adresse : bureau biskra Le num: 0663065926",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 6:41 AM",
      message: "3 ou 6 mois ?",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 6:42 AM",
      message: "Puisque chaque une toute seule..",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 7:50 AM",
      message: "?",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 8:53 AM",
      message: "L age ta3o 5 mois",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 8:54 AM",
      message: "Alors il faut mieux 6 ou 9 mois ..",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 8:55 AM",
      message: "6 mois",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 8:56 AM",
      message: "Ok 👍",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 8:56 AM",
      message: "Merci",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 9:01 AM",
      message: "De rien ☺️",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 9:01 AM",
      message: "2650+700=3350 Da",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 9:50 AM",
      message: "Es que n9der nzid un article f la mm commande ?!",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:30 AM",
      message: "Quel article svp?",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:30 AM",
      message: "Le mm age et la mm couleur comme la photo svp",
      bgColor: "#55efc4"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:30 AM",
      message: "https://firebasestorage.googleapis.com/v0/b/chatbot-test-425613.appspot.com/o/SabyAnge%2F438101861_716335137186953_4861480025230484822_n_716335133853620.jpg?alt=media&token=76cb56a1-172c-4108-8284-ba47b619be78",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:31 AM",
      message: "Le bleu nuit reste en 3 et 9 mois seulement",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:31 AM",
      message: "Si vous voulez en vert pistache",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:32 AM",
      message: "Disponible",
      bgColor: "#ffeaa7"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:32 AM",
      message: "Alors ?",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:36 AM",
      message: "Le gris dispo ?",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:40 AM",
      message: "Non",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:43 AM",
      message: "Ok dirili en vert",
      bgColor: "#55efc4"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:52 AM",
      message: "Ok 👍",
      bgColor: "#55efc4"
    },
    {
      role: "Shop Owner",
      icon: "🤠",
      time: "Jun 5, 2024, 10:52 AM",
      message: "Alors 1950+2650+700=5300 Da",
      bgColor: "#ffeaa7"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:53 AM",
      message: "A aimé un message",
      bgColor: "#55efc4"
    },
    {
      role: "Customer",
      icon: "🛒",
      time: "Jun 5, 2024, 10:54 AM",
      message: "D'accord",
      bgColor: "#55efc4"
    },
  ]);
  return (
    <section className="w-full " id='demo'>
 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                 Demo:
                </span>
           
              </h2>
    <div className="container px-4 md:px-6 ">
      <Card className="grid min-h-[500px] w-full overflow-hidden lg:grid-cols-[320px_1fr] ">
        <OrderDetails messages={messages}/>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            <Link href="#" className="lg:hidden" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
            </Link>
            <div className="flex-1">
              <h1 className="font-semibold text-lg">Order Conversation</h1>
            </div>
          </header>
          <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
    <Chat messages={messages}/>
          </main>
        </div>
      </Card>
    </div>
  </section>
  )
}

