import * as z from "zod";

export const AddUserSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
    role: z.string(),
    details: z.object({
      home_address: z.string(),
      work_address: z.string(),
      phone_number: z.string(),
      date_of_birth: z.date(),
      date_of_join: z.date(),
      date_relieved: z.date().nullable(),
      post_id: z.string(),
      salary: z.number(),
      salary_unit: z.string(),
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password and Confirm password should be same",
    path: ["confirm_password"],
  });

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

export const AddUserDefaults = {
  email: "",
  name: "",
  password: "",
  confirm_password: "",
  role: "G",
  details: {
    home_address: "",
    work_address: "",
    phone_number: "",
    date_of_birth: "",
    date_of_join: "",
    date_relieved: "",
    post_id: "",
    salary: 0,
    salary_unit: "",
  },
};
