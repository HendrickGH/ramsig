import type { SelectOption } from "@/design-system/services";
import { TacticalIcon } from "../atoms/TacticalIcon";

export type { SelectOption };

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  kind?: "text" | "email" | "tel" | "textarea" | "select";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  options?: readonly SelectOption[];
  rows?: number;
  className?: string;
}

export function FormField({
  id,
  name,
  label,
  kind = "text",
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
  error,
  options = [],
  rows = 4,
  className,
}: FormFieldProps) {
  const classes = ["form-field", className].filter(Boolean).join(" ");
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={classes}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required ? (
          <span className="form-field__required" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {kind === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="form-field__control form-field__control--textarea"
        />
      ) : kind === "select" ? (
        <div className="form-field__select-wrap">
          <select
            id={id}
            name={name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className="form-field__control form-field__control--select"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className="form-field__chevron" aria-hidden="true">
            <TacticalIcon name="chevron-down" size={18} />
          </span>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={kind}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className="form-field__control"
        />
      )}

      {error ? (
        <p id={errorId} className="form-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
