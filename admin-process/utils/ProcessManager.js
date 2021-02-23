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
        for(proc in this.processes){
            if(proc.name == procName){
                proc.stop();
            }
        }
    }

}

module.exports = ProcessManager;