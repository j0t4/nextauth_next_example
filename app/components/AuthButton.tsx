'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Sign out
      </button>
    )
  }
  return (
    <button onClick={() => signIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign in
    </button>
  )
}