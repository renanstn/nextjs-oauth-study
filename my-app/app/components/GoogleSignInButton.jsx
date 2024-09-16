"use client";

import { signIn } from "next-auth/react";

const GoogleSignInButton = () => {
  return (
    <button
      className="bg-slate-700 px-4 py-2 text-white"
      onClick={() => signIn("google", { callbackUrl: "/profile" })}
      type="button"
    >
      Sign In With Google
    </button>
  );
};

export default GoogleSignInButton;
