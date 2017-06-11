class Program {
  constructor(workoutDays, weeks, startDate, today, history = []) {
    this.workoutDays = workoutDays;
    this.weeks = weeks;
    this.startDate = startDate;
    this.today = today;
    this.history = history;

    // idenfify missing workouts
    if (this.history.length) {
      const date = new Date(this.history[this.history.length - 1].date);
      for (date.setDate(date.getDate() + 1); date < this.today; date.setDate(date.getDate() + 1)) {
        if (this.workoutDays.includes(date.getDay())) {
          this.history.push({ date: new Date(date), completed: false, restored: false });
        }
      }
    }
  }

  get totalWorkoutDays() {
    return this.weeks * this.workoutDays.length;
  }

  get streak() {
    let brokeStreak = false;

    const streakHistory = this._reversedHistory.filter(workout => {
      if (!brokeStreak) {
        brokeStreak = !workout.completed && !workout.restored;
      }
      return !brokeStreak && !workout.restored;
    });

    return streakHistory.length;
  }

  get missedWorkoutDays() {
    return this._reversedHistory.findIndex(workout => workout.completed || workout.restored);
  }

  restoreStreak() {
    if (!this.canRestoreStreak()) {
      console.warn('Can not restore streak.');
      return;
    }

    this.history[this.history.length - 1].restored = true;
  }

  canRestoreStreak() {
    return this.missedWorkoutDays < 2;
  }

  canContinue() {
    return this.missedWorkoutDays < 3;
  }

  // continueAtPreviousWeek() {
  //   const restartAtDay = this._reversedHistory.filter(workout => workout.completed).slice(2).day;
  // }

  get _reversedHistory() {
    return this.history.slice(0).reverse();
  }
}

export default Program;
