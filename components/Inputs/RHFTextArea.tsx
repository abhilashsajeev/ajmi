import { Controller } from "react-hook-form";
import { getNestedError } from "./RHFInput";

export interface RHFTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: any;
  label: string;
  errors?: any;
  widthClass?: string;
  name: string;
  placeholder?: string;
  labelClass?: string;
  rows?: number; // Add rows prop for textarea
}

export default function RHFTextArea({
  control = {},
  errors = {},
  label = "",
  name = "",
  widthClass = "w-full",
  labelClass = "",
  placeholder = "",
  rows = 3, // Default rows for textarea
}: RHFTextAreaProps) {
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
          <textarea
            {...field}
            rows={rows} // Set rows attribute for textarea
            placeholder={placeholder === "" ? label : placeholder}
            className={`input input-bordered ${
              error?.message && "input-error"
            } w-full max-w-xs`}
          />
        )}
      />

      {error && (
        <div className="label">
          <span className={`label-text-alt`}>{error?.message}</span>
        </div>
      )}
    </label>
  );
}
