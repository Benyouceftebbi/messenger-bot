import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocale } from "@react-aria/i18n";
import { CalendarIcon, Clock4 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function LeftPanel({
	showForm,
}: {
	showForm: boolean | null;
}) {
	const { locale } = useLocale();

	const searchParams = useSearchParams();
	const slotParam = searchParams.get("slot");

	return (
		<div className="flex flex-col gap-4 w-[280px] border-r pr-6">
			<div className="grid gap-1">
				<Tooltip>
					<TooltipTrigger asChild>
						<img
							alt="Shadcn Cal"
							src="/avatar.jpeg"
							className="rounded-full border"
							width={24}
							height={24}
						/>
					</TooltipTrigger>
					<TooltipContent>Clicki w Livri Cal</TooltipContent>
				</Tooltip>
				<p className="text-gray-11 text-sm font-semibold">Clicki w Livri Cal</p>
			</div>
			<div className="grid gap-3">
				<p className="text-gray-12 text-2xl font-bold">Demo</p>
				{showForm && (
					<div className="flex text-gray-12">
						<CalendarIcon className="size-4 mr-2" />
						<div className="flex flex-col text-sm font-semibold">
							<p>
								{new Date(slotParam as string).toLocaleString(locale, {
									dateStyle: "full",
								})}
							</p>
							<p>
								{new Date(slotParam as string).toLocaleString(locale, {
									timeStyle: "short",
								})}
							</p>
						</div>
					</div>
				)}
				<div className="flex items-center text-gray-12">
					<Clock4 className="size-4 mr-2" />
					<p className="text-sm font-semibold">15 mins</p>
				</div>
				<div className="flex items-center text-gray-12">
					<img
						alt="Cal video"
						src="/cal-video.svg"
						className="mr-2"
						width={16}
						height={16}
					/>
					<Tooltip>
						<TooltipTrigger asChild>
							<p className="text-sm font-semibold">Cal video</p>
						</TooltipTrigger>
						<TooltipContent>Cal video</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
