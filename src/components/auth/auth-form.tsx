import { Field, chakra } from "@chakra-ui/react";
import { useState, type FormEvent } from "react";

import { Button, TextInput } from "@/components/ui";

export type AuthField = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

type AuthFormProps = {
  fields: AuthField[];
  submitLabel: string;
};

type FormValues = Record<string, string>;
type FormErrors = Record<string, string | undefined>;

function validate(fields: AuthField[], values: FormValues): FormErrors {
  const errors: FormErrors = {};

  for (const field of fields) {
    const value = values[field.name]?.trim() ?? "";

    if (!value) {
      errors[field.name] = `${field.label} is required`;
      continue;
    }

    if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field.name] = "Enter a valid email address";
    }

    if (field.type === "password" && value.length < 8) {
      errors[field.name] = "Password must be at least 8 characters";
    }
  }

  return errors;
}

export function AuthForm({ fields, submitLabel }: AuthFormProps) {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors(validate(fields, values));
  }

  return (
    <chakra.form
      onSubmit={handleSubmit}
      noValidate
      display="flex"
      flexDirection="column"
      gap="24px"
    >
      {fields.map((field) => (
        <Field.Root key={field.name} invalid={Boolean(errors[field.name])}>
          <Field.Label textStyle="label.s" color="fg">
            {field.label}
          </Field.Label>
          <TextInput
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            scale="lg"
            shape="field"
            w="full"
            value={values[field.name] ?? ""}
            onChange={(event) =>
              setValues((current) => ({ ...current, [field.name]: event.target.value }))
            }
          />
          <Field.ErrorText textStyle="body.xs">{errors[field.name]}</Field.ErrorText>
        </Field.Root>
      ))}

      <Button type="submit" alignSelf="flex-end" scale="md" visual="accent" mt="8px">
        {submitLabel}
      </Button>
    </chakra.form>
  );
}
