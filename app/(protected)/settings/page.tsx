import { auth, signOut } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="border-2 px-2 py-2 border-black" type="submit">
          Log out
        </button>
      </form>
    </div>
  );
};

export default page;
