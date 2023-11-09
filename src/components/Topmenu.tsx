import TopMenuButton from "./TopMenuButton";
import TopmenuItem from "./TopmenuItem";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

export default async function Topmenu() {
  const session = await getServerSession(authOption);

  return (
    <div className="fixed top-0 right-0 left-0 z-30 flex flex-row-reverse items-center px-24 h-14 bg-slate-100 justify-between bg-white text-xs opacity-90">
      <div className="space-x-10 mr-5">
        {!session ? (
          <TopmenuItem title="Sign in" pageRef="api/auth/signin" />
        ) : (
          <TopmenuItem title="Log out" pageRef="api/auth/signout" />
        )}

        <TopMenuButton title="Sign up" routerRef="api/auth/signup" />
      </div>

      {session?.user?.name ? (
        <div className="text-lg font-semibold">{session.user.name}</div>
      ) : null}

      <div className="space-x-10 font-serif text-center text-black italic font-semibold">
        Book&
        <p className="text-black inline text-yellow-600">Rest</p>
      </div>
    </div>
  );
}
