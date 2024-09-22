import styles from "./tailwind.css?url";

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import Tent from "~/components/Tent";
import { APP } from "./constants/APP";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = ({ error }) => {
  let title = APP.name;
  if (error) {
    let err = error as { status: string; statusText: string };
    title = `${err.status || "Error"} | ${err.statusText || title}`;
  }
  return [{ title }];
};

export default function App() {
  return <Outlet />;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return isRouteErrorResponse(error) ? (
    <Tent status={error.status} statusText={error.statusText}>
      {error.data}
    </Tent>
  ) : (
    <Tent status={500} statusText="Internal Server Error">
      {(error as { message: string })?.message ?? "Something went wrong"}
    </Tent>
  );
}
