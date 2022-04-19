type ShellCmd = {
  command: string;
  attributes: string[];
  imagecmd: string;
  idcmd: number;
}


const data = JSON.parse(Deno.readTextFileSync('./data.json'))

//Le xv yv et zv change selon sur quoi le type clique dans l'interface

const p=Deno.run({ cmd: [data[1].command , data[1].attributes[0]] });
console.log(data);
export async function lanceur(){

   await p.status();
  }