"use client";
import React from "react";
import Link from "next/link";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import Home from "/../.vscode/projct phase/A2SV-2024-Project-Phase/task-8/app/page";

const Nav2 =  () => {
  const cookies = useCookies();
  const router = useRouter();
  const { status, data: session } = useSession();
    const handleLogout = async () => {
      cookies.remove("access-token");
      console.log('clicked')
      if (status == "authenticated") {
        await signOut({ redirect: true, callbackUrl: "/" });
      }
      router.push('/');
      router.refresh();
    };
  return (
    <main className="flex w-full justify-between items-center shadow-lg">
      <Link href='/app'>
      <div className="font-extrabold text-orange-700 text-5xl px-6 pt-5 pb-2">
        Jobs
      </div>
      </Link>
      <div className="text-xl font-bold text-blue-950 flex">
        Wellcome
        {session?.user ? (
          <div className="ml-2">{session.user.name}</div>
        ) : (
          <div className="ml-2"> member</div>
        )}
      </div>
      <button
        className="mr-4 bg-blue-700 hover:bg-blue-900 text-xl p-5 text-white"
        onClick={() => {
          handleLogout();
        }}
      >
        signout
      </button>
    </main>
  );
};

export default Nav2;
