/* Class Logger */
class Logger{
    constructor(){
        this.logs = {};
    }
    log(info){
        let output = `Information: The "${info}" event has been emitted`;
        console.log(output);
    }
}