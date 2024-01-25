"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import RHFInput from "@/components/Inputs/RHFInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterDefaults, RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";

const Register = () => {
  const [error, setError] = useState("");
  const methods = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: RegisterDefaults,
  });
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      try {
        const res = await register(data);
        if (res.success) {
        }
      } catch (error) {
        setError("Error, try again");
        console.log(error);
      }
    });
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=" p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RHFInput
              name="name"
              control={control}
              errors={errors}
              label="Name"
            />
            <RHFInput
              name="email"
              control={control}
              errors={errors}
              label="E-Mail"
              type="email"
            />
            <RHFInput
              name="password"
              control={control}
              errors={errors}
              label="Password"
              type="password"
            />
            <RHFInput
              name="confirm_password"
              control={control}
              errors={errors}
              label="Confirm Password"
              type="password"
            />
            {!isPending && (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Register
              </button>
            )}
            {isPending && (
              <span className="loading loading-dots loading-lg"></span>
            )}
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;
