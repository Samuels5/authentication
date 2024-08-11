"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();
  type t = {name: string;email: string;password: string;confirm_password: string;};
  const forms =useForm<t>(); 
  const {register,handleSubmit,formState: { errors },reset,} = forms
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    data = { ...data, ...{ role: "user" } };
fetch("https://akil-backend.onrender.com/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.ok) {
      // Check if the response status is in the range 200-299
      localStorage.setItem("email", data.email);
      router.push("/verify");
      reset();
    } else {
      throw new Error("Network response was not ok."); // Handle non-200 responses
    }
  })
  .catch((e) => {
    console.log(e);
  });});

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-poppins text-[#25324B] text-3xl font-extrabold">
        Sign Up Today!
      </h1>
      <button
        className="flex border p-3 border-[#CCCCF5] rounded justify-center w-6/12 items-center gap-2"
        onClick={() => {
          signIn("google", {
            redirect: false,
            callbackUrl: "/app",
          });
        }}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6712 8.36788H18V8.33329H10.5V11.6666H15.2096C14.5225 13.607 12.6762 15 10.5 15C7.73874 15 5.49999 12.7612 5.49999 9.99996C5.49999 7.23871 7.73874 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C5.89791 1.66663 2.16666 5.39788 2.16666 9.99996C2.16666 14.602 5.89791 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.602 18.8333 9.99996C18.8333 9.44121 18.7758 8.89579 18.6712 8.36788Z"
            fill="#FFC107"
          />
          <path
            d="M3.12749 6.12121L5.8654 8.12913C6.60624 6.29496 8.4004 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C7.29915 1.66663 4.52332 3.47371 3.12749 6.12121Z"
            fill="#FF3D00"
          />
          <path
            d="M10.5 18.3333C12.6525 18.3333 14.6083 17.5095 16.0871 16.17L13.5079 13.9875C12.6432 14.6451 11.5865 15.0008 10.5 15C8.33251 15 6.49209 13.6179 5.79876 11.6891L3.08126 13.7829C4.46043 16.4816 7.26126 18.3333 10.5 18.3333Z"
            fill="#4CAF50"
          />
          <path
            d="M18.6713 8.36796H18V8.33337H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.988L13.5079 13.9871L16.0871 16.1696C15.9046 16.3355 18.8333 14.1667 18.8333 10C18.8333 9.44129 18.7758 8.89587 18.6713 8.36796Z"
            fill="#1976D2"
          />
        </svg>

        <p className="text-[#374cc1]">Sign Up with Google</p>
      </button>

      <div className="text-[#a5a4a7] font-epilogue font-normal text-base flex w-6/12 justify-between items-center">
        <div className="bg-[#a5a4a7] w-8/12 border"></div>
        <p className="w-full text-center">Or Sign Up with Email</p>
        <div className="bg-[#a5a4a7] w-8/12 border"></div>
      </div>

      <form
        action=""
        className="flex flex-col w-6/12 gap-5"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-1">
          <label className="font-epilogue font-semibold text-[#515B6F]" htmlFor='Full Name'> Full Name </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-epilogue font-semibold text-[#515B6F]" htmlFor='Email Address'> Email Address </label>
          <input
            type="email"
            id=""
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            placeholder="Enter email address"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-epilogue font-semibold text-[#515B6F]" htmlFor='Password'> Password </label>
          <input
            type="password"
            id=""
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors.password && (
            <span className="error">Password is required</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-epilogue font-semibold text-[#515B6F]" htmlFor='Confirm Password'> Confirm Password </label>
          <input
            type="password"
            id=""
            className="border border-[#D6DDEB] p-3 rounded outline-none"
            placeholder="Enter password"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <span className="error">Confirmation Password is required</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#2d298e] hover:bg-[#2d296e] p-3 rounded-full text-white"
        >
          Continue
        </button>
      </form>

      <div className="flex gap-2 ">
        <p className="text-[#202430]">Already have an account?</p>
        <Link href="login" className="text-[#425cac]">
          Login
        </Link>
      </div>
      <div>
        <p className="text-[#858b95]">
          By clicking &apos;Continue&apos;, you acknowledge that you have read
          and accepted our{" "}
          <span className="text-[#32278a]">Terms of Service</span> and
          <span className="text-[#32278a]"> Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
