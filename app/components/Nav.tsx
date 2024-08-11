"use client";
import React from "react";
import { useCookies } from "next-client-cookies";
import { useSession } from "next-auth/react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
const Nav = () => {
    const cookies = useCookies();
    const { status, data: session } = useSession();
  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      {cookies.get("access-token") == undefined &&
      status == "unauthenticated" ? (
        <Nav1 />
      ) : (
        <Nav2 />
      )}
    </div>
  );
};

export default Nav;
