type ShellCmd = {
  command: string;
  attributes: string[];
  imagecmd: string;
  idcmd: number;
}


const data = JSON.parse(Deno.readTextFileSync('./data.json'))

//Le xv yv et zv change selon sur quoi le type clique dans l'interface

const xv = 1;
const yv = 1;
const zv = 0;
const p=Deno.run({ cmd: [data[xv].command , data[yv].attributes[zv]] });
console.log(data);
export async function lanceur(){

   await p.status();
  }