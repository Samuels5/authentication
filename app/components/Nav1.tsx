'use client'
import Link from 'next/link'
import React from 'react'

const Nav1 = () => {
  return (
    <main className="flex w-full justify-between items-center shadow-lg">
      <Link href='/app'>
      <div className="font-extrabold text-orange-700 text-5xl px-6 pt-5 pb-2">
        Jobs
      </div>
      </Link>
      <div className="text-xl font-bold text-blue-950 ">
        signin to apply for jobs
      </div>
      <div className="pr-3">
        <Link
          className="mr-4 bg-blue-700 hover:bg-blue-900 text-xl p-5 text-white"
          href="/signup"
        >
          Signup
        </Link>
        <Link
          className="mr-4 bg-orange-700 hover:bg-orange-900 text-xl p-5 text-white"
          href="/login"
        >
          {" "}
          Login
        </Link>
      </div>
    </main>
  );
}

export default Nav1