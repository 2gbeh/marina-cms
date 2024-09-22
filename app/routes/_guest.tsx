import { Outlet } from "@remix-run/react";

export default function GuestLayout() {
  console.log("🚀 ~ GuestLayout");
  return (
    <div className="flex items-center justify-center">
      <div className="w-[480px]">
        <figure className="my-5">
          <img
            src="/cover.png"
            alt=""
            className="w-full object-contain"
          />
        </figure>

        {/* CHILDREN */}
        <div className="px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
