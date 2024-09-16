import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

import GithubSignInButton from "../components/GithubSignInButton";
import GoogleSignInButton from "../components/GoogleSignInButton";

const SignInPage = async () => {
  const session = await getServerSession(options);

  if (session) redirect("/profile");

  return (
    <div className="p-6 space-y-4">
      <h1>SignInPage</h1>
      <GithubSignInButton />
      <GoogleSignInButton />
    </div>
  );
};

export default SignInPage;
