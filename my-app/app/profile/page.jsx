import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";
import Navbar from "../components/Navbar";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  if (!session) redirect("/");

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {session?.user?.name ? <h2>Hello {session.user.name}!</h2> : null}

        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={200}
            height={200}
            alt={`Profile Pic for ${session.user.name}`}
            priority={true}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProfilePage;
