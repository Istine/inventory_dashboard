"use client";

import LoginForm from "@/components/form/Login";
import React from "react";

type FormType = {
  username: string;
  password: string;
};

const defaultValues: FormType = {
  username: "",
  password: "",
};

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-secondary flex items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
