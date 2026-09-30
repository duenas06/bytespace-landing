import type { Metadata } from "next";

import { AuthCard, AuthLayout, AuthShowcase, type AuthField } from "@/components/auth";
import { loginCopy } from "@/data/auth";

export const metadata: Metadata = {
  title: "Sign In",
  description: loginCopy.asideDescription,
};

const fields: AuthField[] = [
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
    autoComplete: "current-password",
  },
];

export default function LoginPage() {
  return (
    <AuthLayout
      showcase={
        <AuthShowcase title={loginCopy.asideTitle} description={loginCopy.asideDescription} />
      }
    >
      <AuthCard
        eyebrow={loginCopy.eyebrow}
        title={loginCopy.title}
        fields={fields}
        submitLabel={loginCopy.submitLabel}
        footerPrompt={loginCopy.footerPrompt}
        footerLinkLabel={loginCopy.footerLinkLabel}
        footerHref={loginCopy.footerHref}
        withSocial
      />
    </AuthLayout>
  );
}
