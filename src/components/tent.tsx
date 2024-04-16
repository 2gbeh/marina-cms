"use client";

import Image from "next/image";
import {
  ChevronLeftCircleIcon as BackIcon,
  RefreshCw as RetryIcon
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { getStatusText } from "@/constants/HTTP_STATUS_CODE";

interface ITentProps {
  status: number;
  message: string;
  variant?: "back" | "retry";
  action?: () => void;
}

export default function Tent({ status, message, variant, action }: ITentProps) {
  const pathname = usePathname();
  const router = useRouter();
  let messageSlice = message.split("%s");
  //
  return (
    <main className="bg-[#fafafa] flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 px-5  w-full sm:w-[640px] mx-auto">
        <Image
          src="/icon.png"
          alt=""
          className="dark:invert"
          width={80}
          height={80}
          priority
        />
        {/*  */}
        <h1 className="capitalize">
          <b>{status}</b> | {getStatusText(status)}
        </h1>
        {/*  */}
        <article className="text-gray-700 text-center">
          {messageSlice?.[0]}
          <b className="font-medium">{pathname}</b>
          {messageSlice?.[1]}
        </article>
        {/*  */}
        <section className="mt-2 text-primary">
          {variant === "retry" ? (
            <i className="cursor-pointer" onClick={action} title="Retry">
              <RetryIcon size="2em" />
            </i>
          ) : (
            <i
              className="cursor-pointer"
              onClick={() => router.back()}
              title="Go Back"
            >
              <BackIcon size="2em" />
            </i>
          )}
        </section>
      </div>
    </main>
  );
}
