"use client";
import * as z from "zod";
import RHFInput from "@/components/Inputs/RHFInput";
import { LoginDefaults, LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { MouseEvent, MouseEventHandler, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { login } from "@/actions/login";
import { toast } from "sonner";
import { MdLogin } from "react-icons/md";

export default function Form() {
  const [isPending, startTransition] = useTransition();

  const methods = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: LoginDefaults,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            methods.reset();
            toast.error("Error in login");
          }
        })
        .catch((e) => {});
    });
  }
  async function signIntoGoogle(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signIn("google");
  }
  return (
    <form
      className="flex flex-col justify-center items-center space-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RHFInput
        label="E mail"
        name="email"
        control={control}
        errors={errors}
        type="email"
        placeholder="someone@mail.com"
        widthClass="w-full"
        required
      />
      <RHFInput
        label="Password"
        name="password"
        control={control}
        errors={errors}
        placeholder="Password"
        type="password"
        widthClass="w-full"
        required
      />
      <a
        href="/auth/reset"
        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
      >
        Forget Password?
      </a>
      <div className="join join-horizontal">
        {!isPending && (
          <button
            className="btn btn-active btn-primary join-item text-yellow-50"
            type="submit"
          >
            <MdLogin />
            Sign In
          </button>
        )}

        {isPending && <span className="loading loading-dots loading-lg"></span>}
      </div>
    </form>
  );
}
