import { useDeno } from 'aleph/react'
import React from 'react'
import Logo from '~/components/logo.tsx'
import useCounter from '~/lib/useCounter.ts'
export async function lanceur(){
  const data = JSON.parse(Deno.readTextFileSync('/home/khara/NouveauTryhard/Treyni/data.json'))

  
  const p=Deno.run({ cmd: [data[3].command , data[3].attributes[0]] });
  console.log(data);
   await p.status();
  }

export default function About() {
  
  const commandeExec = lanceur()
  const [count, isSyncing, increase, decrease] = useCounter()
  const version = useDeno(() => Deno.version.deno)
  
  return (
    <div className="page">
      <head>
        <title>Treyni</title>
        <link rel="stylesheet" href="~/style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Treyni As Started<strong>Firefox</strong>!</h1>
    </div>
  )
}
