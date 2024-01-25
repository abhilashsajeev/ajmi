import * as z from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password and Confirm password should be same",
    path: ["confirm_password"],
  });

export const RegisterDefaults = {
  email: "",
  name: "",
  password: "",
  confirm_password: "",
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginDefaults = {
  email: "",
  password: "",
};

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
