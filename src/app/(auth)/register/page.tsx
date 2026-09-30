import type { Metadata } from "next";

import { AuthCard, AuthLayout, AuthShowcase, type AuthField } from "@/components/auth";
import { registerCopy } from "@/data/auth";

export const metadata: Metadata = {
  title: "Create an Account",
  description: registerCopy.asideDescription,
};

const fields: AuthField[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Jamie Davis",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "designer@example.com",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "********",
    autoComplete: "new-password",
  },
];

export default function RegisterPage() {
  return (
    <AuthLayout
      showcase={
        <AuthShowcase title={registerCopy.asideTitle} description={registerCopy.asideDescription} />
      }
    >
      <AuthCard
        eyebrow={registerCopy.eyebrow}
        title={registerCopy.title}
        fields={fields}
        submitLabel={registerCopy.submitLabel}
        footerPrompt={registerCopy.footerPrompt}
        footerLinkLabel={registerCopy.footerLinkLabel}
        footerHref={registerCopy.footerHref}
      />
    </AuthLayout>
  );
}
