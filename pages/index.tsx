import { useDeno } from 'aleph/react'
import React from 'react'
import Logo from '~/components/logo.tsx'
import useCounter from '~/lib/useCounter.ts'

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const version = useDeno(() => Deno.version.deno)
  
  return (
    <div className="page">
      <head>
        <title>Treyni</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <p className="logo"><Logo /></p>
      <h1>Bienvenue sur le menu <strong>Treyni</strong>!</h1>
      <p className="links">
        <a href="/steam" target="_blank">Steam</a>
        <span></span>
        <a href="/firefox" target="_blank">Firefox</a>
        <span></span>
        <a href="https://alephjs.org/docs" target="_blank">Discord</a>
        <span></span>
        <a href="./commande1.tsx" target="_blank">Github</a>
      </p>
      <p className="copyinfo">Construit sur Deno {version}</p>
    </div>
  )
}
