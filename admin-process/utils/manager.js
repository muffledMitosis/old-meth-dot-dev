const Process = require("./Process");
const ProcessManager = require("./ProcessManager");

const procMan = new ProcessManager();

procMan.addProcess(new Process("main-front", "../main-server/", "node ./main.js"), true);

function interpretCommand(command){
    let call = command.split(" ");
    switch (call[0]) {
        case "ls":
            console.log(procMan.processes);
            break;
        case "attach":
            console.log(`Attaching to ${call[1]}`);
            procMan.getProcess(call[1]).print_stdout();
            break;
        default:
            break;
    }
}

module.exports = interpretCommand;