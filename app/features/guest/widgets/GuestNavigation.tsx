import React from "react";
import { Link } from "@remix-run/react";
import { PATH } from "~/constants/PATH";

const GuestNavigation: React.FC = () => {
  console.log("🚀 ~ GuestNavigation");
  return (
    <nav className="mt-4 text-center text-sm">
      Already have an account?{" "}
      <Link to={PATH.login} className="underline">
        Sign in
      </Link>
    </nav>
  );
};

export default React.memo(GuestNavigation);
