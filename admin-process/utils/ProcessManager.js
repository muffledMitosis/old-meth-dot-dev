class ProcessManager {
    constructor(){
        this.processNum = 0;
        this.processes = [];
    }

    addProcess(proc, start = false){
        if(start)
            proc.start();
        this.processes.push(proc);
    }

    removeProcess(procName){
        for(let i=0; i<this.processes.length; i++){
            let proc = this.processes[i];
            if(proc.name == procName){
                proc.stop();
            }
        }
    }

}

module.exports = ProcessManager;