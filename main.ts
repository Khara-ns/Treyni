//type ShellCmd = {
    //command: string;
    //attributes: string[];
    //imagecmd: string;
   // idcmd: int;
 // }
  
  import data from "./data.json" assert { type: "json" };

//Le xv yv et zv change selon sur quoi le type clique dans l'interface

const xv = 1;
const yv = 1;
const zv = 0;

const p=Deno.run({ cmd: [data[xv].command , data[yv].attributes[zv]] });
    await p.status();