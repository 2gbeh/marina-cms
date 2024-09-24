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
  useNavigate,
  useRouteError,
} from "@remix-run/react";
import { Button } from "./components/_shadcn/ui/button";
import Tent from "./components/Tent";

import { APP } from "./constants/APP";
import { IError } from "./utils/types/remix.type";

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
    let err = error as IError;
    title = `${err.statusText || "Application Error"} | ${title}`;
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
  const navigate = useNavigate();
  const error = useRouteError();
  let err = error as IError;
  let isServerError = !isRouteErrorResponse(error);
  // renders
  return (
    <Tent
      status={err.status || 500}
      statusText={err.statusText || "Internal Server Error"}
    >
      <div className="flex-col-center gap-4">
        <p>
          {isServerError ? err.message || "Something went wrong" : err.data}
        </p>
        <Button
          type="button"
          onClick={() =>
            isServerError ? window.location.reload() : navigate(-1)
          }
        >
          {isServerError ? "Retry" : "Go back"}
        </Button>
      </div>
    </Tent>
  );
}
