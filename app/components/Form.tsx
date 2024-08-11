'use client'
import React from 'react'
import { useForm } from "react-hook-form";


type data = {
  Name: string;
  Email: string;
  Password: string;
  CPassword: string;
};

const InputLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-epilogue font-semibold text-[#515B6F]"
    >
      {label}
    </label>
  );
};

const Form = (submiting:any) => {
  const forms = useForm<data>();
  const { register, control, handleSubmit, formState, reset } = forms;
  const { errors } = formState;
  const onSubmit = (value: data) => {
    submiting(value)
    console.log("formsubmited", value);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-6/12 gap-5"
    >
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="fullName" label="Name" />
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name"
          className="border border-[#D6DDEB] p-3 rounded outline-none"
          {...register("Name", { required: "Name is requered" })}
        />
        <p>{errors.Name?.message}</p>
      </div>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="" label="Email" />
        <input
          type="email"
          id=""
          className="border border-[#D6DDEB] p-3 rounded outline-none"
          placeholder="Enter email address"
          {...register("Email", {
            required: "Email is requered",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email",
            },
          })}
        />
        <p>{errors.Email?.message}</p>
      </div>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="Password" label="Password" />
        <input
          type="password"
          id="Name"
          placeholder="Enter password"
          className="border border-[#D6DDEB] p-3 rounded outline-none"
          {...register("Password", { required: "Password is requered" })}
        />
        <p>{errors.Password?.message}</p>
      </div>
      <div className="flex flex-col gap-1">
        <InputLabel htmlFor="CPassword" label="Confirm Password" />
        <input
          type="text"
          id="cpassword"
          placeholder="confirm password"
          className="border border-[#D6DDEB] p-3 rounded outline-none"
          {...register("CPassword", { required: "first confirm Password" })}
        />
        <p>{errors.CPassword?.message}</p>
      </div>

      <button
        type="submit"
        className="bg-[#2d298e] w-full hover:bg-[#2d296e] p-3 rounded-full text-white"
      >
        Continue
      </button>
    </form>
  );
};

export default Form