import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { PhoneInput } from "../phone-input";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FormMeetingData,formMeetingSchema } from "@/validators/meeting";
import { LoadingButton } from "@/components/ui/loadingButton";
import { fromZonedTime, } from "date-fns-tz";
import { addMinutes } from "date-fns";
import { functions } from "@/firebaseConfig/firebase-config";
import { httpsCallable,HttpsCallableResult } from "firebase/functions";
import { useLocale } from "@react-aria/i18n";

interface GoogleMeetLinkResponse {
	meetLink: string;
  }
interface FormPanelProps {
	setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
	selectedDate: Date;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  export function FormPanel({ setShowForm, selectedDate,setOpen}: FormPanelProps) {
	const router = useRouter();
	const { locale } = useLocale();

	const searchParams = useSearchParams();
	const slotParam = searchParams.get("slot");
	const form = useForm<FormMeetingData>({
		resolver: zodResolver(formMeetingSchema)
	  });
	  const {formState,control } = form;
	  const { fields:guests, append,remove} = useFieldArray({
		name: "guests", 
		control
	});
	const { isSubmitting } = formState;
	const hasGuests = guests.length > 0;
    async function onSubmit(data: FormMeetingData) {

		const guestEmails = data.guests?.flatMap(guest => guest.email) || [];
		const timeZoneAlgeria = 'Africa/Algiers';
		const startTimeUTC = fromZonedTime(new Date(slotParam as string), timeZoneAlgeria)
		const endTimeUTC =addMinutes(startTimeUTC, 15);    
		const createGoogleMeetLink = httpsCallable<{ emails: string[]; startTime: Date; endTime: Date;},GoogleMeetLinkResponse>(functions, 'createGoogleMeetLink');
		const result: HttpsCallableResult<GoogleMeetLinkResponse> = await createGoogleMeetLink({
		  emails: ["youcefmilk@gmail.com",data.email,...guestEmails],
		  startTime: startTimeUTC,
		  endTime: endTimeUTC,
		});
	
		const meetLink = result.data.meetLink;
		
		console.log(meetLink);
		setOpen(false)
		


		  
	}
	return (
		<Form {...form}>
		<form className="flex flex-col gap-5 w-[360px]">
		<div className="flex flex-col space-y-1.5">
		<FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name *</FormLabel>
              <FormControl>
			  <Input id="name" placeholder="Damián Ricobelli" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
			</div>
		
			<div className="flex flex-col space-y-1.5">
		<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address *</FormLabel>
              <FormControl>
			  <Input id="email" type="email" placeholder="dricobelli@gmail.com" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
			</div>
			<div className="flex flex-col space-y-1.5">
		<FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number *</FormLabel>
              <FormControl>
			  <PhoneInput id="phone" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
			</div>
			<div className="flex flex-col space-y-1.5">
		<FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="notes">Additional notes</FormLabel>
              <FormControl>
			  <Textarea
					id="notes"
					placeholder="Please share anything that will help prepare for our meeting" {...field}
				/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
			</div>
			{hasGuests && (
				<>
					<Label htmlFor="email">Add guests</Label>
					<div className="flex flex-col gap-1">
						{guests.map((guest, index) => (
							<div key={index} className="flex items-center space-x-2 relative">
								  <FormField
              control={form.control}
              key={index}
              name={`guests.${index}.email`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} id="guest"
									type="email"
									placeholder="Email"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
						
								<Tooltip>
									<TooltipTrigger asChild>
										<X
											className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 size-4"
											onClick={() => remove(index)}
										/>
									</TooltipTrigger>
									<TooltipContent>Remove email</TooltipContent>
								</Tooltip>
							</div>
						))}
					</div>
				</>
			)}
			<Button
				type="button"
				variant="ghost"
				onClick={() => append({email:""})}
				className="w-fit"
			>
				<UserPlus className="mr-2 size-4" />
				Add guests
			</Button>
			<p className="text-gray-11 text-xs my-4">
				By proceeding, you agree to our{" "}
				<span className="text-gray-12">Terms</span> and{" "}
				<span className="text-gray-12">Privacy Policy</span>.
			</p>
			<div className="flex justify-end gap-2">
				<Button
					variant="ghost"
					onClick={() => {
						setShowForm(false)
						
		const url = new URL(window.location.href);
		url.searchParams.delete("date");
		url.searchParams.delete("slot");
		router.push(url.toString());
					}}
				>
					Back
				</Button>
		 <LoadingButton
            loading={isSubmitting}
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
          >
          Book </LoadingButton>
			</div>
		</form>
		</Form>
	);
}
