/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect, useState } from "react"
export default function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  },[])
  return (
    <div>
      {isClient ? 'This is never prerendered' : 'Prerended successfully'}
    </div>
  )
}
