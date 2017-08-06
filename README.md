History / Event / Day:

date:
	The date of this day.

day:
	The numeric day in the program (1 to 18 for a 6 week program).

workoutState:
	This indicates the state of the program on this day. Options are:

	NotInProgram
		The day is not in the program. This means that the day is before the fitness test day and after the projected last day of the program.

	Rest
		The day is a rest day

	PendingTest
		The fitness test needs to be completed

	Pending
		There is a normal workout to complete

	PendingMakeup
		A workout was missed and there is a makeup workout to complete

	Completed
		A workout was completed

	Missed
		A workout was missed

	Future
		There is a future workout to be completed

workoutType:
	This indicates what type of workout was completed. Options are:

	FitnessTest
		Indicates a fitness test

	Normal
		Indicates a normal workout

	Redo
		Indicates a normal workout that was repeated

	Restore
		Indicates a workout that restores a streak

	Restart
		Indicates a workout that restarts a failed program

	Final
		Indicates a final workout
