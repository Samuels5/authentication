"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const VerifyEmail = () => {
  const cookies = useCookies();
  const router = useRouter();
  type t = {n1: string;n2: string;n3: string;n4: string;};
  const forms = useForm<t>();
  const {register,handleSubmit,formState: { errors },reset,} = forms
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const total = data.n1 + data.n2 + data.n3 + data.n4;
fetch("https://akil-backend.onrender.com/verify-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: localStorage.getItem("email"),
    otp: total,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok"); // Handle non-200 responses
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    cookies.set("access-token", data.data.accessToken);
    router.push("/app");
    reset();
    router.refresh();
  })
  .catch((e) => {
    console.log(e);
  });});

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="font-poppins text-[#25324B] text-3xl font-extrabold">
        Verify Email
      </h1>
      <p className="text-[#7C8493] text-left">
        We&apos;ve sent a verification code to the email address you <br />{" "}
        provided. To complete the verification process, please <br /> enter the
        code here.
      </p>

      <form
        action=""
        className="flex flex-col gap-5 items-center"
        onSubmit={onSubmit}
      >
        <div className="flex gap-9">
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("n1")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("n2")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("n3")}
          />
          <input
            type="text"
            className="border border-[#b2acf3] bg-[#f9f8fd] text-[#8a8e98] outline-none rounded p-3 w-[76px] text-center text-2xl"
            placeholder="0"
            maxLength={1}
            {...register("n4")}
          />
        </div>
        <div>
          <p className="text-[#858b95]">
            You can request to
            <span className="text-[#32278a]"> Resend code</span> in
            <span className="text-[#32278a]"> 0:30.</span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-[#2d298e] hover:bg-[#2d296e] p-3 rounded-full text-white w-full"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
