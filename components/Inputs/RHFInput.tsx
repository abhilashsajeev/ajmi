import { Controller } from "react-hook-form";

export interface RHFInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label: string;
  errors?: any;
  widthClass?: string;
  type?: string;
  name: string;
  placeholder?: string;
}

export default function RHFInput({
  control = {},
  errors = {},
  type = "text",
  label = "",
  name = "",
  widthClass = "w-full",
  placeholder = "",
}: RHFInputProps) {
  return (
    <label
      className={`form-control ${widthClass ? widthClass : "w-full"} max-w-xs`}
    >
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder === "" ? label : placeholder}
            className={`input input-bordered ${
              errors[name] && "input-error"
            } w-full max-w-xs`}
          />
        )}
      />

      {errors && errors[name] && (
        <div className="label">
          <span className="label-text-alt">{errors[name]?.message}</span>
        </div>
      )}
    </label>
  );
}
