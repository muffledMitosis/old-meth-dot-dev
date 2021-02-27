const child_process = require('child_process');
const { stdout } = require('process');

class Process {
    constructor(name, dir, startCommand){
        this.name = name;
        this.dir = dir;
        this.startCommand = startCommand;
        this.processHandle = undefined;
        this.stdout = [];
    }

    start(){
        console.log(`Starting Process:${this.name}`);
        this.processHandle = child_process.exec(this.startCommand, {cwd: this.dir});
        this.processHandle.stdout.on('data', data=>this.stdout.push(data));
        // this.processHandle.on('exit', code=>console.log(`Exit Code: ${code}`));
    }

    stop(){
        // TODO: Stop Process
        console.log(`Stopping Process:${this.name}`);
    }

    status(){
        // TODO: return handle to process
    }

    print_stdout(){
        for(let i=0; i<this.stdout.length; i++){
            console.log(this.stdout[i]);
        }
    }
}

module.exports = Process;