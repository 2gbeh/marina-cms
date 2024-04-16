import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

export const GuestHeading = ({ alt }: { alt?: boolean }) => {
  return (
    <CardHeader>
      <CardTitle className="text-xl">{alt ? "Get started" : "Welcome back"}</CardTitle>
      <CardDescription>
        {alt
          ? "Enter your information to create an account"
          : "Enter your login credentials to continue"}
      </CardDescription>
    </CardHeader>
  );
};
