import GitHubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    // https://next-auth.js.org/configuration/options#providers
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    // https://next-auth.js.org/configuration/options#pages
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
};
