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
  labelClass?: string;
}

export default function RHFInput({
  control = {},
  errors = {},
  type = "text",
  label = "",
  name = "",
  widthClass = "w-full",
  labelClass = "",
  placeholder = "",
}: RHFInputProps) {
  const error = getNestedError(errors, name);
  return (
    <label
      className={`form-control ${widthClass ? widthClass : "w-full"} max-w-xs`}
    >
      <div className="label">
        <span className={`label-text ${labelClass}`}>{label}</span>
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
              error && "input-error"
            } w-full max-w-xs`}
          />
        )}
      />

      {error && (
        <div className="label">
          <span className="label-text-alt">{error?.message}</span>
        </div>
      )}
    </label>
  );
}

export function getNestedError(errors: any, name: string): any | undefined {
  const parts = name.split(".");
  let current = errors;
  for (let i = 0; i < parts.length; i++) {
    if (!current) return undefined;
    current = current[parts[i]];
  }
  return current;
}
