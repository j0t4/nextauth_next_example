"use client";
//import { getServerSession } from "next-auth/next"

import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from 'next/link'

export default async function ProtectedPage() {
  //const session = await getServerSession()
  const { data: session } = useSession()
if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Protected Page</h1>
      <p className="mb-4">Welcome, {session?.user?.name}! This page is only accessible to signed-in users.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to Public Page
      </Link>
    </div>
  )
}



