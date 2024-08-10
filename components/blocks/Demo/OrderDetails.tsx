"use client"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Package2Icon } from "../Icons"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChatProps, Message} from "@/types/messages";
import {httpsCallable } from 'firebase/functions';
import { functions } from "@/firebaseConfig/firebase-config"

const OrderDetails: React.FC<ChatProps> = ({ messages }) => {
  const [order,setOrder]=useState()
  const messagesToString = (messages:Message[]) => {
 
    const string=messages.map(msg => `${msg.role}: ${msg.message}`).join('\n')

    return string;
  };
  async function triggerCloudFunction() {
    const orderRetriever = httpsCallable(functions, 'orderRetriever');
    const textPrompt=messagesToString(messages)
    try {
      const response = await orderRetriever({
        shop: 'SabyAnge', // Replace with your actual shop name
        conversation: {
          text: textPrompt
        },
      });
  setOrder(response.data)
      console.log('Cloud Function successfully triggered:', response.data);
    } catch (error) {
      console.error('Error triggering Cloud Function:', error);
    }
  }
    return(
        <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-[60px] items-center px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="">Acme Shop</span>
          </Link>
        </div>
       <div className="flex-1">
           <div className="grid gap-4 px-4 py-6 ">
           {!order?(<Button variant="default" className="self-center" onClick={()=>triggerCloudFunction()}>
            Retrieve order
        </Button>):(
           <>
           <div className="grid gap-2">
             <h2 className="text-lg font-semibold">Order Details</h2>
             <div className="grid gap-1 text-sm">

               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Customer</span>
                 <span>{order.shippingDetails.consumerName}</span>
               </div>
                    <div className="flex items-center justify-between">
                 <span className="text-muted-foreground"> Phone Number</span>
                 <span>{order.shippingDetails.consumerPhoneNumber}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Delivery
                 </span>
                 <span>{order.shippingDetails.deliveryMethod}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Address
                 </span>
                 <span>{order.shippingDetails.shippingAddress}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Items</span>
                 <span>{order.orders.length}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Total</span>
                 <span>{order.totalOrderPrice}</span>
               </div>
               <div className="flex items-center justify-between">
                 <span className="text-muted-foreground">Status</span>
                 <span className={`text-${order.status === 'Confirmed' ? 'green-500' : 'red-500'}`}>{order.status?order.status:'non-confrimed'}</span>
               </div>
             </div>
           </div>
           <Separator />
           <div className="grid gap-2">
             <h2 className="text-lg font-semibold">Order Items</h2>
             <div className="grid gap-4">
               {order.orders.map((item, index) => (
                 <div key={index} className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <img
                       src={item.imageUrl}
                       alt="Product Image"
                       width={40}
                       height={40}
                       className="rounded-md"
                     />
                     <div className="grid gap-1">
                       <p className="font-medium">{item.productName}</p>
                       <p className="text-sm text-muted-foreground">Size: {item.size}, Color: {item.productColor}</p>
                     </div>
                   </div>
                   <p>{item.price}</p>
                 </div>
               ))}
             </div>
           </div>
           <Button variant="default" className="self-center">
             Ship Order
           </Button>
         </>)}
          </div>
        </div> 
 
      </div>
    )
}
export default OrderDetails;