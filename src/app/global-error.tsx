"use client";

import Tent from "@/components/tent";

interface IGlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: IGlobalErrorProps) {
  return (
    <html>
      <body>
        <Tent
          status={500}
          message={error?.message}
          variant="retry"
          action={() => reset()}
        />
      </body>
    </html>
  );
}
