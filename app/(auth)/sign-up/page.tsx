"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="sign-up"
      up
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default Page;
