"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="sign-in"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={() => {}}
    />
  );
};

export default Page;
