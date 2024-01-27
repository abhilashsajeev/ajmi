"use client";

import RHFInput from "@/components/Inputs/RHFInput";
import RHFSelect from "@/components/Inputs/RHFSelect";
import RHFTextArea from "@/components/Inputs/RHFTextArea";
import { AddUserDefaults, AddUserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function Page() {
  const methods = useForm({
    resolver: zodResolver(AddUserSchema),
    defaultValues: AddUserDefaults,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Add Basic User Details for Login</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  name="name"
                  control={control}
                  label="Name"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  name="email"
                  type="email"
                  control={control}
                  label="E-Mail"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  type="password"
                  name="password"
                  control={control}
                  label="Password"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  name="confirm_password"
                  control={control}
                  label="Confirm Password"
                  errors={errors}
                  width="w-full"
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Photo</label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-100"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  control={control}
                  name="details.phone_number"
                  label="Phone Number"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  type="date"
                  control={control}
                  name="details.date_of_birth"
                  label="Date of Birth"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  type="date"
                  control={control}
                  name="details.date_of_join"
                  label="Date of Join"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFInput
                  type="date"
                  control={control}
                  name="details.date_relieved"
                  label="Date of Relived"
                  errors={errors}
                  labelClass="text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFTextArea
                  labelClass="text-white"
                  name="details.work_address"
                  label="Work Address"
                  rows={3}
                  control={control}
                  errors={errors}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFTextArea
                  labelClass="text-white"
                  name="details.home_address"
                  label="Home Address"
                  rows={3}
                  control={control}
                  errors={errors}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <RHFSelect
                  labelClass="text-white"
                  name="details.country"
                  errors={errors}
                  control={control}
                  label="Country"
                  options={[
                    { label: "India", value: "IN" },
                    { label: "Oman", value: "OM" },
                  ]}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
