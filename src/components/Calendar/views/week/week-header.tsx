import moment from 'moment';
import { cn } from '@/lib/utils';

interface WeekHeaderProps {
	days: moment.Moment[];
	view: CalendarView;
}

export function WeekHeader({ days, view }: WeekHeaderProps) {
	return (
		<div className={cn(
			"ml-10 grid",
			view === "week" && "grid-cols-5",
			view === "3day" && "grid-cols-3"
		)}>
			{days.map((day, index) => (
				<div
					key={day.format()}
					className={cn(
						"p-2 text-center font-semibold py-2 h-16 flex flex-col items-center justify-center rounded-xl",
						index === 6 && "border-r-0",
						day.isSame(moment(), "day") && "bg-blue-400/50"
					)}
				>
					<span className="text-xl font-semibold">{day.format("D")}</span>
					<span className={cn(
						"text-sm font-normal",
						!day.isSame(moment(), "day") && "text-neutral-500 dark:text-neutral-400"
					)}>
						{day.format("ddd")}
					</span>
				</div>
			))}
		</div>
	);
}
