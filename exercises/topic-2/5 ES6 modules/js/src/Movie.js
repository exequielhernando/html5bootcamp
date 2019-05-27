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
        return (`The  ${this.title} movie is playing</br>`);
    }
    
    pause() {
        this.emit("pause")
        console.log(`The ${this.title} movie was paused</br>`); 
        return (`The ${this.title} movie was paused</br>`);    
    }
    
    resume() {
        this.emit("resume")
        console.log(`Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`);
        return (`Title: ${this.title} - Year: ${this.year} - Duration: ${this.duration}<br/>`);
    }
    addCast(cast){            
        this.full_cast = this.full_cast.concat(cast);
    }
    showCast(){
        let full_cast = ` `;
        for (let index = 0; index < this.full_cast.length; index++) {
             full_cast += `Actor name: ${this.full_cast[index].name} - Age ${this.full_cast[index].age}</br>`;
        }   
        return full_cast;         
    }
}