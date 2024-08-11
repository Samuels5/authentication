"use client";
import Link from "next/link";
import Login from "./login/page";
import { useCookies } from "next-client-cookies";
import { useSession } from "next-auth/react";
import New from "./app/page";

export default function Home() {
  const cookies = useCookies();
  const { status } = useSession();
  return (
    <div className="pt-44 flex text-4xl">
        <Link href='/login'>Autenticate first</Link>
        <Link href='/app' className="ml-24">continue to joblist</Link>
    </div>
  );
}
