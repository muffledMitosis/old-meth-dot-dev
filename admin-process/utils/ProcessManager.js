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

    getProcess(proc){
        for(let i=0; i<this.processes.length; i++){
            if(this.processes[i].name == proc)
                return this.processes[i];
            else
                return undefined;
        }
    }

}

module.exports = ProcessManager;