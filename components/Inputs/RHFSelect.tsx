import { Controller } from "react-hook-form";

export interface RHFSelectProps {
  control: any;
  name: string;
  label: string;
  options: { label: string; value: string }[];
  errors?: any;
  widthClass?: string;
  labelClass?: string;
  placeholder?: string;
  defaultValue?: string;
}

export default function RHFSelect({
  control = {},
  name = "",
  label = "",
  options = [],
  errors = {},
  widthClass = "w-full",
  labelClass = "",
  placeholder = "",
  defaultValue = "",
}: RHFSelectProps) {
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
          <select
            className={`input input-bordered ${
              errors[name] && "input-error"
            } w-full max-w-xs`}
            value={field.value}
          >
            {defaultValue && !field.value && (
              <option value="">{placeholder || "Select one"}</option>
            )}
            {options.map((option) => (
              <option
                className="text-black"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        )}
      />

      {errors && errors[name] && (
        <div className="label">
          <span className={`label-text-alt`}>{errors[name]?.message}</span>
        </div>
      )}
    </label>
  );
}
