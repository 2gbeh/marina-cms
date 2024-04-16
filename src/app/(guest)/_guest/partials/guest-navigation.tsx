import Link from "next/link";
import PATH from "@/constants/PATH";

export const GuestNavigation = ({ alt }: { alt?: boolean }) => {
  return (
    <div className="mt-4 text-center text-sm">
      {alt ? "Already have an account? " : "Don't have an account? "}
      <Link href={alt ? PATH.login : PATH.register} className="underline">
        {alt ? "Log in" : "Register"}
      </Link>
    </div>
  );
};
