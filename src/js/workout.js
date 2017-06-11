class Workout {
  constructor(date, day = undefined, completed = false, restored = false) {
    this.date = date;
    this.day = day;
    this.completed = completed;
    this.restored = restored;
  }
}

export default Workout;
