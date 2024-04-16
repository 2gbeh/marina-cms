import Tent from "@/components/tent";

export default function NotFound() {
  return (
    <Tent
      status={404}
      message="It appears the requested resource %s does not exist or has been moved temporarily."
    />
  );
}
