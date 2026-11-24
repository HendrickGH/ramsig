import type { ReactNode } from "react";

export interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  multiline?: boolean;
  required?: boolean;
  autoComplete?: string;
  children?: ReactNode;
}

export function FormField({
  id,
  label,
  type = "text",
  multiline = false,
  required = false,
  autoComplete,
  children,
}: FormFieldProps) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      {children ? (
        <select id={id} name={id} required={required} className="field__control">
          {children}
        </select>
      ) : multiline ? (
        <textarea id={id} name={id} required={required} className="field__control" />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className="field__control"
        />
      )}
    </div>
  );
}
