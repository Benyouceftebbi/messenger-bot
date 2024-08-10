"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Meeting } from './createMeeting'

export function Demo() {
  const [open, setOpen] = React.useState(false)
  return  (
    <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger >  <Button variant="default" className="px-20">Open Drawer</Button></DrawerTrigger>
  <DrawerContent>

    <DrawerHeader>
      <DrawerTitle>{'schedule-an-appointment'}</DrawerTitle>
      <DrawerDescription> {'pick-a-time-that-works-best-for-you'} </DrawerDescription>
    </DrawerHeader>
<Meeting setOpen={setOpen}/>


  </DrawerContent>
</Drawer>
 
  );
}

