class Process {
    constructor(name, startCommand){
        this.name = name;
        this.startCommand = startCommand;
    }

    start(){
        // TODO: Start Process and set handle
        console.log(`Starting Process:${this.name}`);
    }

    stop(){
        // TODO: Stop Process
        console.log(`Stopping Process:${this.name}`);
    }

    status(){
        // TODO: return handle to process
    }
}

module.exports = Process;