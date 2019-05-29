/* Class Actor */
class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
/* Class EventEmitter */
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

    console.log("Hello from on");
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(emit => {
        if (typeof emit === 'function') {
          emit.call(this);
        } else {
          console.log("Error");
        }
      });
    } //console.log("Hello from emit");

  }

  off(eventName, callback) {
    this.events[eventName].pop(callback);
    console.log("Hello from off");
  }

  showEvents() {
    console.log(this.events);
    return this.events;
  }

}
/* Class Logger */
class Logger {
  constructor() {
    this.logs = {};
  }

  log(info) {
    let output = `Information: The "${info}" event has been emitted`;
    console.log(output);
  }

}
/* Class Movie with extends of EventEmitter */
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.full_cast = [];
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() {
    this.emit("play");
    console.log(`The  ${this.title} movie is playing</br>`);
    return `The  ${this.title} movie is playing</br>`;
  }

  pause() {
    this.emit("pause");
    console.log(`The ${this.title} movie was paused</br>`);
    return `The ${this.title} movie was paused</br>`;
  }

  resume() {
    this.emit("resume");
    console.log(`Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`);
    return `Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`;
  }

  addCast(cast) {
    this.full_cast = this.full_cast.concat(cast);
  }

  showCast() {
    let full_cast = ` `;

    for (let index = 0; index < this.full_cast.length; index++) {
      full_cast += `Actor name: ${this.full_cast[index].name} - Age ${this.full_cast[index].age}</br>`;
    }

    return full_cast;
  }

}
