import Tent from "@/components/tent";

export default function ForgotPassword() {
  return (
    <Tent
      status={204}
      message="Sorry, the requested resource %s is still under-construction, contact
      webmaster."
    />
  );
}
